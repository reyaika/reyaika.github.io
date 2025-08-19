// ====== CONFIGURATION ======
const csvUrl = 'sighting-monthly.csv';

// Define square size and spacing between squares
const squareSize = 50;
const spacing = 50;

// Define tooltip
const tooltip = d3.select("#tooltip");


// Define chapters for scroll-driven storytelling
const config = {
    chapters: [
        {
            id: "march",
            title: "March 2024",
            description: "Highlights March weeks (9–13).",
            filter: function(d) {
                return d.month === 'March 2024' && d['week no.'] >= 9 && d['week no.'] <= 13;
            }
        },
        {
            id: "march-10-13",
            title: "March 10–13",
            description: "Highlights weeks 10–13 only.",
            filter: function(d) {
                return d.month === 'March 2024' && d['week no.'] >= 10 && d['week no.'] <= 13;
            }
        },
        {
            id: "all",
            title: "All Weeks",
            description: "Shows all 52 squares.",
            filter: function(d) {
                return true;
            }
        },
        {
            id: "monster",
            title: "Monster Ship 5901",
            description: "Highlights only weeks 21, 25, and 52.",
            filter: function(d) {
                return d['week no.'] === 21 || d['week no.'] === 25 || d['week no.'] === 52;
            }
        },
        {
            id: "vessel-frequency",
            title: "Select a Vessel",
            description: "Explore weekly sightings per vessel.",
            filter: function() {
                return true;
            }
        }
    ]
};

const weeksPerMonth = {
    "January 2024": 5,
    "February 2024": 4,
    "March 2024": 5,
    "April 2024": 4,
    "May 2024": 5,
    "June 2024": 4,
    "July 2024": 5,
    "August 2024": 4,
    "September 2024": 4,
    "October 2024": 5,
    "November 2024": 4,
    "December 2024": 3
};

// ====== HELPER FUNCTIONS ======

function getSvgDimensions() {
    const container = document.getElementById("graphic");
    const width = container.offsetWidth || window.innerWidth;
    let height;
    if (window.innerWidth < 768) {
        height = window.innerHeight * 1;
    } else {
        height = window.innerHeight * 0.7;
    }
    return { width: width, height: height };
}

function isMobile() {
    return window.innerWidth <= 768;
}

function showTooltip(event, html) {
    tooltip
        .style("display", "block")
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY + 10) + "px")
        .html(html);
}

function hideTooltip() {
    tooltip.style("display", "none");
}

function getWeekIndexInMonth(d) {
    const sameMonth = data.filter(w => w.month === d.month).sort((a, b) => a['week no.'] - b['week no.']);
    for (let i = 0; i < sameMonth.length; i++) {
        if (sameMonth[i]['week no.'] === d['week no.']) return i;
    }
    return -1;
}

function showPanel(index) {
    d3.selectAll('svg.panel').classed('active', false);
    d3.select('#panel5-container').style('display', 'flex');

    if (index >= 0 && index <= 3) {
        d3.select(`#panel${index + 1}`).classed('active', true);
    } else if (index === 4) {
        d3.select('#panel5-container').style('display', 'flex');
        d3.select('#panel5').classed('active', true);
    }
}

function updateDescription(panelIndex) {
  const chapter = config.chapters[panelIndex];
  document.getElementById("panel-title").textContent = chapter.title;
  document.getElementById("panel-description").textContent = chapter.description;
}


// ====== INITIAL SETUP ======

const scrollyText = document.getElementById("scrolly-text");

const { width: initialWidth, height: initialHeight } = getSvgDimensions();
const panels = {};
for (let i = 1; i <= 5; i++) {
    panels[i] = d3.select("#panel" + i)
        .attr("viewBox", `0 0 ${initialWidth} ${initialHeight}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .style("width", "100%")
        .style("height", "auto");
}

// ====== LOAD DATA AND INITIALIZE ======

let data = [];
let colorScale;

d3.csv(csvUrl, d3.autoType).then(raw => {
    data = raw;

    // Extract vessel IDs (columns that are digits only)
    const vesselIds = raw.columns.filter(col => /^\d+$/.test(col));

    // Populate dropdown dynamically
    const dropdown = document.getElementById("vessel-dropdown");
    dropdown.innerHTML = "<option value=''>All Vessels</option>";
    vesselIds.forEach(id => {
        const option = document.createElement("option");
        option.value = id;
        option.textContent = id;
        dropdown.appendChild(option);
    });

    // On vessel change, redraw panel 5 with highlight based on selected vessel
    dropdown.addEventListener("change", e => {
        const vesselId = e.target.value;
        currentVesselId = vesselId || null;

        if (vesselId) {
            // Compute max sightings for the selected vessel
            const maxVesselSightings = d3.max(data, d => d[vesselId] || 0);
            colorScale.domain([0, maxVesselSightings]);
            drawVesselFrequency(vesselId);
        } else {
            // Reset color scale to total-per-week domain
            const maxSightings = d3.max(data, d => d["total-per-week"]);
            colorScale.domain([0, maxSightings]);
            drawSquares(5, config.chapters[4].filter);
        }
    });


    // Color scale based on total sightings
    const maxSightings = d3.max(data, d => d["total-per-week"]);
    colorScale = d3.scaleSequential().domain([0, maxSightings]).interpolator(d3.interpolateReds);

    drawAllPanels();
    createLegend();
    setupScrollama();
});

// Draw all panels with their chapter filters
function drawAllPanels() {
    for (let i = 0; i < config.chapters.length; i++) {
        drawSquares(i + 1, config.chapters[i].filter);
    }
}

// Draw squares for a panel, highlighting based on highlightFn
function drawSquares(panelNumber, highlightFn) {
    const svg = panels[panelNumber];
    console.log(`Drawing squares for panel ${panelNumber}`, svg.node());

    svg.selectAll(".panel-content").remove();
    const g = svg.append("g").attr("class", "panel-content");

    const monthNames = Object.keys(weeksPerMonth);
    const monthOffsets = {};
    let xOffset = 0;
    monthNames.forEach(month => {
        monthOffsets[month] = xOffset;
        xOffset += spacing;
    });

    const totalWidth = isMobile() ? 5 * spacing : monthNames.length * spacing;
    const totalHeight = isMobile() ? monthNames.length * spacing : 5 * spacing;
    const svgSize = getSvgDimensions();
    const offsetX = svgSize.width / 2 - totalWidth / 2 + 35;
    const offsetY = svgSize.height / 2 - totalHeight / 2 + 105;

    console.log(`Drawing panel ${panelNumber}`);

    // === 1. SVG SQUARE + LABEL LEGEND ===
    const legendGroup = g.append("g").attr("class", "grid-legend");

    // Draw a small square
    // legendGroup.append("rect")
    //     .attr("x", svgSize.width / 2 - 20)
    //     .attr("y", offsetY - 82)
    //     .attr("width", 15)
    //     .attr("height", 15)
    //     // .attr("fill", "#e63946")
    //     .attr("stroke", "white")
    //     .attr("stroke-width", 1);

    // Add caption
    // legendGroup.append("text")
    //     .attr("x", svgSize.width / 11)
    //     .attr("y", offsetY - 70)
    //     .attr("text-anchor", "start")
    //     .attr("font-size", "12px")
    //     .attr("fill", "white")
    //     .text("This grid shows how many Chinese Coast Guard vessels have been spotted near Scarborough Shoal");

    // === 2. DRAW SQUARES AND MONTH LABELS ===
    monthNames.forEach((month, i) => {
        const col = monthOffsets[month];
        const monthShort = d3.timeFormat("%b")(new Date(month));

        // Month label
        if (isMobile()) {
            g.append("text")
                .attr("x", offsetX - 50)
                .attr("y", i * spacing + offsetY + squareSize / 2 - 30)
                .attr("text-anchor", "end")
                .attr("font-size", "10px")
                .attr("fill", "white")
                .text(monthShort);
        } else {
            g.append("text")
                .attr("x", col + offsetX + squareSize / 2 - 36)
                .attr("y", offsetY - 45)
                .attr("text-anchor", "middle")
                .attr("font-size", "10px")
                .attr("fill", "white")
                .text(monthShort);
        }

        // Grid squares per week in the month
        for (let weekIndex = 0; weekIndex < 5; weekIndex++) {
            const weekData = data.find(d => d.month === month && getWeekIndexInMonth(d) === weekIndex);
            if (!weekData) continue;

            const cx = isMobile() ? weekIndex * spacing + offsetX : col + offsetX;
            const cy = isMobile() ? i * spacing + offsetY : weekIndex * spacing + offsetY;

            let fillColor;

            if (panelNumber === 5 && currentVesselId) {
                const vesselSightings = weekData[currentVesselId] || 0;
                fillColor = colorScale(vesselSightings);
                // fillColor = vesselSightings === 0 ? "transparent" : colorScale(vesselSightings);
            } else {
                fillColor = colorScale(weekData["total-per-week"]);
            }

            const highlight = highlightFn(weekData);

            g.append("rect")
                .attr("x", cx - squareSize / Math.SQRT2)
                .attr("y", cy - squareSize / Math.SQRT2)
                .attr("width", squareSize)
                .attr("height", squareSize)
                .attr("fill", colorScale(weekData["total-per-week"]))
                .attr("opacity", highlight ? 1 : 0.3)
                .on("mouseover", event => {
                    let html = `<strong>${weekData.month} - Week ${weekData['week no.']}</strong><br>Total sightings: ${weekData['total-per-week']}`;
                    if (panelNumber === 5 && currentVesselId) {
                        const vesselSightings = weekData[currentVesselId] || 0;
                        html += `<br>Vessel ${currentVesselId} sightings: ${vesselSightings}`;
                    }
                    showTooltip(event, html);
                })
                .on("mousemove", event => {
                    tooltip.style("left", (event.pageX + 10) + "px")
                        .style("top", (event.pageY + 10) + "px");
                })
                .on("mouseout", hideTooltip);
        }
    });

}


function createLegend() {
    const width = 150;
    const height = 50;

    const legendSvg = d3.select("#legend")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const defs = legendSvg.append("defs");
    const linearGradient = defs.append("linearGradient").attr("id", "legend-gradient");

    for (let i = 0; i <= 10; i++) {
        const t = i / 10;
        const stopColor = colorScale(colorScale.domain()[0] + t * (colorScale.domain()[1] - colorScale.domain()[0]));
        linearGradient.append("stop")
            .attr("offset", `${t * 100}%`)
            .attr("stop-color", stopColor);
    }

    legendSvg.append("rect")
        .attr("x", 0)
        .attr("y", 10)
        .attr("width", width - 20)
        .attr("height", 15)
        .style("fill", "url(#legend-gradient)");

    legendSvg.append("text")
        .attr("x", 0)
        .attr("y", 40)
        .text(Math.round(colorScale.domain()[0]))
        .attr("font-size", "10px")
        .attr("fill", "white");

    legendSvg.append("text")
        .attr("x", width - 40)
        .attr("y", 40)
        .text(Math.round(colorScale.domain()[1]))
        .attr("font-size", "10px")
        .attr("fill", "white");
}


// Variable to track currently selected vessel (for panel 5)
let currentVesselId = null;

// Draw panel 5 highlighting weeks where vessel had sightings
function drawVesselFrequency(vesselId) {
    currentVesselId = vesselId;

    // Highlight function: highlight if sightings > 0 for the vessel in this week
    function highlightFn(d) {
        return d[vesselId] > 0;
    }

    drawSquares(5, highlightFn);
}

function setupScrollama() {
    const scroller = scrollama();
    scroller
        .setup({ step: ".step", offset: 0.5, progress: true })
        .onStepEnter(response => {
            console.log("Active step index:", response.index);
            const stepIndex = response.index;
            
            const legend = document.getElementById("legend");

            if (stepIndex >= 0 && stepIndex <= 4) {
                legend.style.display = "block";
            } else {
                legend.style.display = "none";
            }

            // updateDescription(response.index);
            showPanel(stepIndex);

            // Show only the active panel, hide others
            for (let i = 1; i <= 5; i++) {
                panels[i].selectAll(".panel-content")
                  .style("visibility", i === stepIndex + 1 ? "visible" : "hidden");

            }

            // Hide/show scrolly-text except for panel 5
            const stepsContainer = document.getElementById("scrolly-text");

            if (stepIndex === 4) {
                stepsContainer.style.opacity = 0;
                stepsContainer.style.visibility = "hidden";
            } else {
                stepsContainer.style.opacity = 1;
                stepsContainer.style.visibility = "visible";
            }

            response.element.classList.add("active");

            const controlContainer = document.getElementById("control-container");
            const vesselSelector = document.getElementById("vessel-dropdown");
            const panel5Container = document.getElementById("panel5-container");

            if (stepIndex === 4) {
                panel5Container.style.display = "flex";
                controlContainer.style.display = "block";
                stepsContainer.style.opacity = 0;
                stepsContainer.style.visibility = "hidden";
            } else {
                panel5Container.style.display = "none";
                controlContainer.style.display = "none";
                stepsContainer.style.opacity = 1;
                stepsContainer.style.visibility = "visible";
            }


        })
        .onStepExit(response => response.element.classList.remove("active"));

    let resizeTimeout;
    window.addEventListener("resize", function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(drawAllPanels, 200);
    });
}

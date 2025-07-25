var config = {
    style: 'mapbox://styles/aikarey/cmd986uyv007u01s21r4k7j1q',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYWlrYXJleSIsImEiOiJjbWMyYmR1dWMwNndwMzBxNnM5aDJqaXh0In0.2MIaCmaND9Er4vOWiok0Hg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    insetOptions: {
        markerColor: '#BE5103'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    // title: 'Blurb',
    // subtitle: 'We name the places we live in, and those names might tell a story',
    // byline: 'By Aika Rey',
    // footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            // title: '',
            // image: './assets/san-fran.jpeg',
            description: 'In the Philippines, over 42,000 villages – locally known as <i>barangay</i> – carry traces of beliefs, memory, and revolutions.' ,
            location: {
                center: [120.96390, 12.57089],
                zoom: 4.88,
                pitch: 0,
                bearing: 0
            },
            showLegend: false,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'barangay-outlines',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'city-filter',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Heroes',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Politicians',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Other Persons',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Plants',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Animals',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Admin Boundaries',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Manila',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Places and Geography',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Religious',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Descriptive',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Others',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'background',
                    opacity: 0,
                    duration: 2000
                    }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            // title: '',
            // image: './assets/washington-dc.jpg',
            description: 'Ten percent of these villages are in the Greater Manila Area, where one in every four Filipinos lives.</p></p>Each village has a name. But not all of them are unique.',
            location: {
                center: [120.94491, 14.60251],
                zoom: 8.4,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            showLegend: false,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'barangay-outlines',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'city-filter',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Heroes',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Politicians',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Other Persons',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Plants',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Animals',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Admin Boundaries',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Manila',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Places and Geography',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Religious',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Descriptive',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Others',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'background',
                    opacity: 1,
                    duration: 2000
                    }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            // title: '',
            // image: './assets/geneva.jpg',
            description: 'In the capital Manila alone, there are nearly 900 barangays. All are named "Barangay" followed by a number.',
            location: {
                center: [120.96777, 14.58484],
                zoom: 11.83,
                pitch: 0,
                bearing: 0,
            },
            showLegend: false,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'barangay-outlines',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'city-filter',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Heroes',
                    opacity: 0.1,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Politicians',
                    opacity: 0.1,
                    duration: 2000
                    },
                {
                    layer: 'Other Persons',
                    opacity: 0.1,
                    duration: 2000
                    },
                {
                    layer: 'Plants',
                    opacity: 0.1,
                    duration: 2000
                    },
                {
                    layer: 'Animals',
                    opacity: 0.1,
                    duration: 2000
                    },
                {
                    layer: 'Admin Boundaries',
                    opacity: 0.1,
                    duration: 2000
                    },
                {
                    layer: 'Manila',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Places and Geography',
                    opacity: 0.1,
                    duration: 2000
                    },
                {
                    layer: 'Religious',
                    opacity: 0.1,
                    duration: 2000
                    },
                {
                    layer: 'Descriptive',
                    opacity: 0.1,
                    duration: 2000
                    },
                {
                    layer: 'Others',
                    opacity: 0.1,
                    duration: 2000
                    },
                {
                    layer: 'background',
                    opacity: 1,
                    duration: 2000
                    }
            ],
            onChapterExit: [
            ]
        },
        // {
        //     id: 'fourth-identifier',
        //     alignment: 'left',
        //     hidden: false,
        //     // title: '',
        //     // image: './assets/geneva.jpg',
        //     description: 'But when you group names by meaning, patterns begin to emerge.',
        //     location: {
        //         center: [120.92063, 14.50549],
        //         zoom: 8.23,
        //         pitch: 0,
        //         bearing: 0,
        //     },
        //     showLegend: true,
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {
        //             layer: 'barangay-outlines',
        //             opacity: 0,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'city-filter',
        //             opacity: 0,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'Filipino Heroes',
        //             opacity: 1,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'Filipino Politicians',
        //             opacity: 1,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'Other Persons',
        //             opacity: 1,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'Plants',
        //             opacity: 1,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'Animals',
        //             opacity: 1,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'Admin Boundaries',
        //             opacity: 1,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'Manila',
        //             opacity: 0,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'Places and Geography',
        //             opacity: 1,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'Religious',
        //             opacity: 1,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'Descriptive',
        //             opacity: 1,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'Others',
        //             opacity: 1,
        //             duration: 2000
        //             },
        //         {
        //             layer: 'background',
        //             opacity: 1,
        //             duration: 2000
        //             }
        //     ],
        //     onChapterExit: []
        // },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            // title: '',
            // image: './assets/geneva.jpg',
            description: 'Like Manila villages, more than a third of barangays are named after their <span class=highlight-admin>administrative</span> function –  using the words "Barangay" (village), <i>"Poblacion"</i> (downtown), or "Proper."',
            location: {
                center: [120.92063, 14.50549],
                zoom: 8.23,
                pitch: 0,
                bearing: 0,
            },
            showLegend: false,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'barangay-outlines',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'city-filter',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Heroes',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Politicians',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Other Persons',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Plants',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Animals',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Admin Boundaries',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Manila',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Places and Geography',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Religious',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Descriptive',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Others',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'background',
                    opacity: 1,
                    duration: 2000
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            // title: '',
            // image: './assets/buenos-aires.jpg',
            description: 'One in eight villages are named after saints or inspired by <span class="highlight-religious">religious</span> tradition – a legacy of centuries of Catholic influence.',
            location: {
                center: [120.92063, 14.50549],
                zoom: 8.23,
                pitch: 0,
                bearing: 0,
            },
            showLegend: false,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                    {
                    layer: 'barangay-outlines',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'city-filter',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Heroes',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Politicians',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Other Persons',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Plants',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Animals',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Admin Boundaries',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Manila',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Places and Geography',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Religious',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Descriptive',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Others',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'background',
                    opacity: 1,
                    duration: 2000
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            // title: '',
            // image: './assets/buenos-aires.jpg',
            description: 'Others describe the <span class=highlight-places>place</span> itself: the land, the water, the roads.',
            location: {
                center: [120.92063, 14.50549],
                zoom: 8.23,
                pitch: 0,
                bearing: 0,
            },
            showLegend: false,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'barangay-outlines',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'city-filter',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Heroes',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Politicians',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Other Persons',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Plants',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Animals',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Admin Boundaries',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Manila',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Places and Geography',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Religious',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Descriptive',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Others',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'background',
                    opacity: 1,
                    duration: 2000
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'eight-identifier',
            alignment: 'left',
            hidden: false,
            // title: '',
            // image: './assets/buenos-aires.jpg',
            description: 'Some are named after <span class=highlight-plants>plants and animals</span> that were once abundant there.',
            location: {
                center: [120.92063, 14.50549],
                zoom: 8.23,
                pitch: 0,
                bearing: 0,
            },
            showLegend: false,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                    {
                    layer: 'barangay-outlines',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'city-filter',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Heroes',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Politicians',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Other Persons',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Plants',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Animals',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Admin Boundaries',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Manila',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Places and Geography',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Religious',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Descriptive',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Others',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'background',
                    opacity: 1,
                    duration: 2000
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            // title: '',
            // image: './assets/buenos-aires.jpg',
            description: 'In the town of Trece Martires, they honored their thirteen martyrs by naming the villages after each <span class=highlight-people>person</span>.',
            location: {
                center: [120.86451, 14.28132],
                zoom: 11.65,
                pitch: 0,
                bearing: 0,
            },
            showLegend: false,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                                {
                    layer: 'barangay-outlines',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'city-filter',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Heroes',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Politicians',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Other Persons',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Plants',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Animals',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Admin Boundaries',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Manila',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Places and Geography',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Religious',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Descriptive',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Others',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'background',
                    opacity: 1,
                    duration: 2000
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'tenth-identifier',
            alignment: 'left',
            hidden: false,
            // title: '',
            // image: './assets/buenos-aires.jpg',
            description: 'A few are rooted in precolonial language or <span class=highlight-other>other</span> categories that defy the mold – names you’ll find only in that exact spot.<br><br> Like Namayan, a village in Muntinlupa City, once part of an ancient kingdom in what is now Metro Manila.',
            location: {
                center: [121.01859, 14.58060],
                zoom: 15,
                pitch: 0,
                bearing: 0,
            },
            showLegend: false,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                    {
                    layer: 'barangay-outlines',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'city-filter',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Heroes',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Politicians',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Other Persons',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Plants',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Animals',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Admin Boundaries',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Manila',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Places and Geography',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Religious',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Descriptive',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Others',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'background',
                    opacity: 1,
                    duration: 2000
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'eleventh-identifier',
            alignment: 'left',
            hidden: false,
            // title: '',
            // image: './assets/geneva.jpg',
            description: 'Barangay names are more than just labels. They are markers of memory, geography, and power.<br><br>What does your village’s name say about where you come from?',
            location: {
                center: [120.92063, 14.50549],
                zoom: 8.23,
                pitch: 0,
                bearing: 0,
            },
            showLegend: true,
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'barangay-outlines',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'city-filter',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Heroes',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Filipino Politicians',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Other Persons',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Plants',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Animals',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Admin Boundaries',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Manila',
                    opacity: 0,
                    duration: 2000
                    },
                {
                    layer: 'Places and Geography',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Religious',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Descriptive',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'Others',
                    opacity: 1,
                    duration: 2000
                    },
                {
                    layer: 'background',
                    opacity: 1,
                    duration: 2000
                    }
            ],
            onChapterExit: []
        }
    ]
};

$(document).ready(function () {
    function updateCutSize() {
        $('.upper-cut').attr('style', 'border-right-width:' + $('.upper-cut').parent().width() + 'px')
        $('.lower-cut').attr('style', 'border-left-width:' + $('.upper-cut').parent().width() + 'px')
    }

    function updateNavbarBackground() {
        var hasNavigationActive = $('#navigation-bar').attr('style') !== "display: none;" && Foundation.MediaQuery.current === 'small'
        if (window.scrollY > 100) {
            $('.page-header').addClass('active');
            $('.page-header').addClass('hide-status-bar');
        } else {
            if (!hasNavigationActive) {
                $('.page-header').removeClass('active');
            }
            $('.page-header').removeClass('hide-status-bar');
        }
    }

    function updateNavbarBackgroundOnMenuToggle() {
        if (window.scrollY <= 100) {
            if ($('.page-header').hasClass('active')) {
                $('.page-header').removeClass('active');
            } else {
                $('.page-header').addClass('active');
            }
        }
    }

    function makeMap() {
        if (document.getElementById('projects-map')) {
            function updateCustomMarkers(event) {
                // get map object
                var map = event.chart;

                // go through all of the images
                for (var x = 0; x < map.dataProvider.images.length; x++) {

                    // get MapImage object
                    var image = map.dataProvider.images[x];

                    // Is it a Pie?
                    // if (image.pie === undefined) {
                    //     continue;
                    // }

                    // create id
                    if (image.id === undefined) {
                        image.id = "amcharts_pie_" + x;
                    }
                    // Add theme
                    // if ("undefined" == typeof image.pie.theme) {
                    //     image.pie.theme = map.theme;
                    // }

                    // check if it has corresponding HTML element
                    if ("undefined" == typeof image.externalElement) {
                        image.externalElement = createCustomMarker(image);
                    }

                    // reposition the element accoridng to coordinates
                    var xy = map.coordinatesToStageXY(image.longitude, image.latitude);
                    image.externalElement.style.top = xy.y + "px";
                    image.externalElement.style.left = xy.x + "px";
                    image.externalElement.style.marginTop = Math.round(image.height / -2) + "px";
                    image.externalElement.style.marginLeft = Math.round(image.width / -2) + "px";
                }
            }

            function createCustomMarker(image) {
                // Create chart container
                var holder = document.createElement("div");
                holder.id = image.id;
                holder.title = image.title;
                holder.style.position = "absolute";
                holder.style.width = image.width + "px";
                holder.style.height = image.height + "px";
                holder.classList.add('map-marker');
                // Append the chart container to the map container
                image.chart.chartDiv.appendChild(holder);

                // Create a pie chart
                // var chart = AmCharts.makeChart(image.id, image.pie);

                return holder;
            }

            var map = AmCharts.makeChart("projects-map", {
                "type": "map",
                "theme": "light",
                "projection": "miller",

                "dataProvider": {
                    "map": "worldLow",
                    "getAreasFromMap": false,
                    "images": [
                        {
                            "type": "circle",
                            "label": "Canada",
                            "longitude": -117.0727,
                            "latitude": 62.831
                        },
                        {
                            "type": "circle",
                            "label": "Bahamas",
                            "longitude": -80.7916,
                            "latitude": 24.0365
                        },
                        {
                            "type": "circle",
                            "label": "Spain",
                            "longitude": -6.4548,
                            "latitude": 43.4518
                        },
                        {
                            "type": "circle",
                            "label": "Italy",
                            "longitude": 14.5305,
                            "latitude": 40.982
                        },
                        {
                            "type": "circle",
                            "label": "Hong Kong",
                            "longitude": 114.15769,
                            "latitude": 22.28552
                        },
                        {
                            "type": "circle",
                            "label": "Singapore",
                            "longitude": 103.851959,
                            "latitude": 1.290270
                        }
                    ]
                },

                "areasSettings": {
                    "unlistedAreasAlpha": 1,
                    "unlistedAreasColor": "#ffffff",
                    "unlistedAreasOutlineAlpha": 1,
                    "unlistedAreasOutlineColor": "#e6e6e6",
                    "outlineAlpha": 1,
                    "outlineColor": "#e6e6e6",
                    "outlineThickness": 1,
                    "color": "#ffffff",
                    "alpha": 1
                },

                "smallMap": false,
                "export": false,
                "chartContainer": {
                    "wheelable": false
                },
                "zoomControl": {
                    "zoomControlEnabled": false,
                    "homeButtonEnabled": false
                },
                "mouseWheelZoomEnabled": false,
                "zoomOnDoubleClick": false,
                "listeners": [{
                    "event": "click",
                    "method": function (ev) {
                        console.log(ev.x, ev.y);
                        console.log(ev.chart.xyToCoordinates(ev.x, ev.y));
                    }
                }]
                /**
                 * Data Provider
                 * The images contains pie chart information
                 * The handler for `positionChanged` event will take care
                 * of creating external elements, position them and create
                 * Pie chart instances in them
                 */
                /*
                "dataProvider": {
                    "map": "continentsLow",
                    "images": [{
                        "title": "North America",
                        "latitude": 39.563353,
                        "longitude": -99.316406,
                        "width": 150,
                        "height": 150,
                        "pie": {
                            "type": "pie",
                            "pullOutRadius": 0,
                            "labelRadius": 0,
                            "dataProvider": [{
                                "category": "Category #1",
                                "value": 1200
                            }, {
                                "category": "Category #2",
                                "value": 500
                            }, {
                                "category": "Category #3",
                                "value": 765
                            }, {
                                "category": "Category #4",
                                "value": 260
                            }],
                            "labelText": "[[value]]%",
                            "valueField": "value",
                            "titleField": "category"
                        }
                    }, {
                        "title": "Europe",
                        "latitude": 50.896104,
                        "longitude": 19.160156,
                        "width": 200,
                        "height": 200,
                        "pie": {
                            "type": "pie",
                            "pullOutRadius": 0,
                            "labelRadius": 0,
                            "radius": "10%",
                            "dataProvider": [{
                                "category": "Category #1",
                                "value": 200
                            }, {
                                "category": "Category #2",
                                "value": 600
                            }, {
                                "category": "Category #3",
                                "value": 350
                            }],
                            "labelText": "",
                            "valueField": "value",
                            "titleField": "category"
                        }
                    }, {
                        "title": "Asia",
                        "latitude": 47.212106,
                        "longitude": 103.183594,
                        "width": 200,
                        "height": 200,
                        "pie": {
                            "type": "pie",
                            "pullOutRadius": 0,
                            "labelRadius": 0,
                            "radius": "10%",
                            "dataProvider": [{
                                "category": "Category #1",
                                "value": 352
                            }, {
                                "category": "Category #2",
                                "value": 266
                            }, {
                                "category": "Category #3",
                                "value": 512
                            }, {
                                "category": "Category #4",
                                "value": 199
                            }],
                            "labelText": "",
                            "valueField": "value",
                            "titleField": "category"
                        }
                    }, {
                        "title": "Africa",
                        "latitude": 11.081385,
                        "longitude": 21.621094,
                        "width": 200,
                        "height": 200,
                        "pie": {
                            "type": "pie",
                            "pullOutRadius": 0,
                            "labelRadius": 0,
                            "radius": "10%",
                            "dataProvider": [{
                                "category": "Category #1",
                                "value": 200
                            }, {
                                "category": "Category #2",
                                "value": 300
                            }, {
                                "category": "Category #3",
                                "value": 599
                            }, {
                                "category": "Category #4",
                                "value": 512
                            }],
                            "labelText": "",
                            "valueField": "value",
                            "titleField": "category"
                        }
                    }]
                },
                */
                /**
                 * Add event to execute when the map is zoomed/moved
                 * It also is executed when the map first loads
                 */
                /*
                "listeners": [{
                    "event": "positionChanged",
                    "method": updateCustomMarkers
                }]
                */
            });
        }
    }
    $(document).foundation();

    $('.header-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplayHoverPause: true,
    });

    $('.menu-toggle').on('click', updateNavbarBackgroundOnMenuToggle);

    makeMap();
    updateCutSize();
    updateNavbarBackground();

    window.addEventListener('resize', updateCutSize, false);
    window.addEventListener('resize', updateNavbarBackground, false);
    window.addEventListener('scroll', updateNavbarBackground, false);
})

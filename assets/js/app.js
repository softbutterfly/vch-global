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
                holder.id = image.label;
                holder.title = image.label;
                holder.classList.add('map-marker');
                holder.classList.add('green');

                // Append the chart container to the map container
                image.chart.chartDiv.appendChild(holder);

                // Create a pie chart
                // var chart = AmCharts.makeChart(image.id, image.pie);

                return holder;
            }

            if (window.AmCharts) {
                var map = AmCharts.makeChart("projects-map", {
                    "type": "map",
                    "theme": "light",
                    "projection": "miller",

                    "dataProvider": {
                        "map": "worldLow",
                        "getAreasFromMap": false,
                        "images": [
                            {
                                "label": "Canada",
                                "longitude": -117.0727,
                                "latitude": 62.831
                            },
                            {
                                "label": "Bahamas",
                                "longitude": -80.7916,
                                "latitude": 24.0365
                            },
                            {
                                "label": "Peru",
                                "longitude": -77.042793,
                                "latitude": -12.046374
                            },
                            {
                                "label": "Sydney",
                                "longitude": 151.209296,
                                "latitude": -33.868820
                            },
                            {
                                "label": "Spain",
                                "longitude": -6.4548,
                                "latitude": 43.4518
                            },
                            {
                                "label": "Italy",
                                "longitude": 14.5305,
                                "latitude": 40.982
                            },
                            {
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
                        "event": "positionChanged",
                        "method": updateCustomMarkers
                    }]
                });

                map.addListener("click", function(event) {
                    // find out the coordinates of under mouse cursor
                    var info = event.chart.getDevInfo();

                    // print in console as well
                    console.log({
                      "latitude": info.latitude,
                      "longitude": info.longitude
                    })
                });
            }
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

    var casacorLastDay = new Date(2019, 10, 03);
    var today = new Date();
    // if (today <= casacorLastDay) {
    //     $('#casacor-modal').length && $('#casacor-modal').foundation('open');
    // }
})

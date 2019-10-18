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
            function createCustomMarker(image) {
                // Create chart container
                var holder = document.createElement("div");
                holder.id = image.label;
                holder.title = image.label;
                holder.classList.add('map-marker');
                holder.classList.add('green');
                if (image.project !== null) {
                    holder.classList.add('map-pulsar');
                    holder.setAttribute('data-project', JSON.stringify(image.project));
                }
                // Append the chart container to the map container
                image.chart.chartDiv.appendChild(holder);

                return holder;
            }

            function updateCustomMarkers(event) {
                // get map object
                var map = event.chart;

                // go through all of the images
                for (var x = 0; x < map.dataProvider.images.length; x++) {
                    // get MapImage object
                    var image = map.dataProvider.images[x];

                    // create id
                    if (image.id === undefined) {
                        image.id = "marker_" + x;
                    }

                    // check if it has corresponding HTML element
                    if ("undefined" == typeof image.externalElement) {
                        image.externalElement = createCustomMarker(image);
                    }

                    // reposition the element accoridng to coordinates
                    var xy = map.coordinatesToStageXY(
                        image.longitude,
                        image.latitude
                    );

                    image.externalElement.style.top = xy.y + "px";
                    image.externalElement.style.left = xy.x + "px";
                    image.externalElement.style.marginTop = Math.round(image.height / -2) + "px";
                    image.externalElement.style.marginLeft = Math.round(image.width / -2) + "px";
                    image.externalElement.addEventListener(
                        'click',
                        function () {
                            var project = this.getAttribute('data-project', null)
                            var $popup = $("#projects-popup");
                            $popup.addClass("hide");

                            if(project !== null) {
                                project = JSON.parse(project);
                                $popup.removeClass("hide");
                                $popup.css("top", this.style.top);
                                $popup.css("left", this.style.left);

                                $("#projects-popup .projects-popup-image").css("backgroundImage", "url(" + project.image + ")");
                                $("#projects-popup .cruise").text(project.cruise);
                                $("#projects-popup .place").text(project.place);
                                $("#projects-popup .date").text(project.year);
                                $("#projects-popup .vch").text(project.vch);
                            }
                        }
                    );
                }
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
                                "latitude": 62.831,
                                "project": {
                                    "year": "2018 - October",
                                    "cruise": "Ruby Princess",
                                    "place": "Victoria, Canada.",
                                    "vch": "V&CH Global – Marine",
                                    "image": "./assets/images/project-canada.jpg"
                                }
                            },
                            {
                                "label": "Bahamas",
                                "longitude": -80.7916,
                                "latitude": 24.0365,
                                "project": {
                                    "year": "2019 - February",
                                    "cruise": "Empress of the Seas",
                                    "place": "Freeport, Grand Bahamas.",
                                    "vch": "V&CH Global – Marine",
                                    "image": "./assets/images/project-bahamas.jpg"
                                }
                            },
                            {
                                "label": "Peru",
                                "longitude": -77.042793,
                                "latitude": -12.046374,
                                "project": null
                                /*
                                {
                                    "year": "2018 - October",
                                    "cruise": "Ruby Princess",
                                    "place": "Victoria, Canada.",
                                    "vch": "V&CH Global – Marine",
                                    "image": "./assets/images/project-usa.jpg"
                                }
                                */
                            },
                            {
                                "label": "Sydney",
                                "longitude": 151.209296,
                                "latitude": -33.868820,
                                "project": null
                                /*
                                {
                                    "year": "2018 - October",
                                    "cruise": "Ruby Princess",
                                    "place": "Victoria, Canada.",
                                    "vch": "V&CH Global – Marine",
                                    "image": "./assets/images/project-usa.jpg"
                                }
                                */
                            },
                            {
                                "label": "Spain",
                                "longitude": -6.4548,
                                "latitude": 43.4518,
                                "project": null
                                /*
                                {
                                    "year": "2018 - October",
                                    "cruise": "Ruby Princess",
                                    "place": "Victoria, Canada.",
                                    "vch": "V&CH Global – Marine",
                                    "image": "./assets/images/project-usa.jpg"
                                }
                                */
                            },
                            {
                                "label": "Italy",
                                "longitude": 14.5305,
                                "latitude": 40.982,
                                "project": null
                                /*
                                {
                                    "year": "2018 - October",
                                    "cruise": "Ruby Princess",
                                    "place": "Victoria, Canada.",
                                    "vch": "V&CH Global – Marine",
                                    "image": "./assets/images/project-usa.jpg"
                                }
                                */
                            },
                            {
                                "label": "Singapore",
                                "longitude": 103.851959,
                                "latitude": 1.290270,
                                "project": {
                                    "year": "2019 - January",
                                    "cruise": "Diamond Princess",
                                    "place": "Singapore",
                                    "vch": "V&CH Global – Marine",
                                    "image": "./assets/images/project-singapore.jpg"
                                }
                            },
                            {
                                "label": "USA",
                                "longitude": -122.679565,
                                "latitude": 45.512794,
                                "project": {
                                    "year": "2019 - March",
                                    "cruise": "Grand Princess",
                                    "place": "Portland, USA.",
                                    "vch": "V&CH Global – Marine",
                                    "image": "./assets/images/project-usa.jpg"
                                }
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
                    "dragMap": false,
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
                        "method": updateCustomMarkers,
                    }, {
                        "event": "clickMapObject",
                        "method": function( e ) {
                            console.log(e)
                        },
                    }]
                });


                /*
                map.addListener("click", function(event) {
                    // find out the coordinates of under mouse cursor
                    var info = event.chart.getDevInfo();

                    // print in console as well
                    console.log({
                      "latitude": info.latitude,
                      "longitude": info.longitude
                    })
                });
                */
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
    if (today <= casacorLastDay) {
        $('#casacor-modal').length && $('#casacor-modal').foundation('open');
    }
})

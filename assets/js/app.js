$(document).ready(function () {
    function updateCutSize() {
        $('.upper-cut').attr('style', 'border-right-width:' + $('.upper-cut').parent().width() + 'px')
        $('.lower-cut').attr('style', 'border-left-width:' + $('.upper-cut').parent().width() + 'px')
    };

    function updateHeaderPicutre() {
        if ($('.header-picture').length > 0) {
            if (window.innerWidth >= 400) {
                $('.header-picture').css(
                    'background-image',
                    'url("./assets/images/home.png")'
                )
            } else {
                $('.header-picture').css(
                    'background-image',
                    'url("./assets/images/mobile_home.jpg")'
                )
            }
        }
    };

    function makeMap() {
        if (document.getElementById('projects-map')) {
            function createCustomMarker(image) {
                // Create chart container
                var holder = document.createElement("div");
                var currentLang = localStorage.getItem("active-lang") || "en";
                try {
                    image.label = image.labelTranslations[currentLang];
                } catch (error) {
                    return null;
                };
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
            };

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
                            window.SelectedMapObject = this;

                            var project = this.getAttribute('data-project', null);
                            var popup = document.getElementById('projects-popup');
                            var $popup = $(popup);

                            var currentLang = localStorage.getItem("active-lang") || "en";

                            $popup.addClass("hide");

                            if (project !== null) {
                                project = JSON.parse(project);
                                $popup.removeClass("hide");
                                $popup.css("top", this.style.top);
                                $popup.css("left", this.style.left);


                                $("#projects-popup .projects-popup-image").css("backgroundImage", "url(" + project.image + ")");
                                $("#projects-popup .cruise").text(project.cruise);
                                $("#projects-popup .place").text(project.place[currentLang]);
                                $("#projects-popup .date").text(project.year[currentLang]);
                                $("#projects-popup .vch").text(project.vch);

                                var viewportOffset = popup.getBoundingClientRect();
                                var left = viewportOffset.left;
                                var right = viewportOffset.right;
                                var width = popup.clientWidth;

                                if (left < 0 && right > 0) {
                                    $popup.css("left", parseFloat(this.style.left) - left + 10 + "px");
                                    $('.projects-popup-arrow-top').css("left", 0.5 * width + left - 10 + "px");
                                }
                                else if (left > 0 && right < 0) {
                                    $popup.css("left", parseFloat(this.style.left) + left - 10 + "px");
                                    $('.projects-popup-arrow-top').css("left", 0.5 * width - left + 10 + "px");
                                }
                            }
                        }
                    );

                    if (image.selected && window.SelectedMapObject === undefined) {
                        $(image.externalElement).click();
                    }
                }
            };

            var dataProvider = {
                "map": "worldLow",
                "getAreasFromMap": false,
                "images": [
                    {
                        "label": "Canada",
                        "labelTranslations": {
                            "en": "Canada",
                            "es": "Canadá"
                        },
                        "longitude": -117.0727,
                        "latitude": 62.831,
                        "project": {
                            "year": {
                                "en": "2018 - October",
                                "es": "2018 - Octubre"
                            },
                            "cruise": "Ruby Princess",
                            "place": {
                                "en": "Victoria, Canada.",
                                "es": "Victoria, Canadá."
                            },
                            "vch": "V&CH Global – Marine",
                            "image": "./assets/images/project-canada.jpg"
                        }
                    },
                    {
                        "label": "Bahamas",
                        "labelTranslations": {
                            "en": "Bahamas",
                            "es": "Bahamas"
                        },
                        "longitude": -80.7916,
                        "latitude": 24.0365,
                        "project": {
                            "year": {
                                "en": "2019 - February",
                                "es": "2019 - Febrero"
                            },
                            "cruise": "Empress of the Seas",
                            "place": {
                                "en": "Freeport, Grand Bahamas.",
                                "es": "Freeport, Grand Bahamas."
                            },
                            "vch": "V&CH Global – Marine",
                            "image": "./assets/images/project-bahamas.jpg"
                        }
                    },
                    {
                        "label": "Peru",
                        "labelTranslations": {
                            "en": "Peru",
                            "es": "Perú"
                        },
                        "longitude": -77.042793,
                        "latitude": -12.046374,
                        "project": null
                    },
                    {
                        "label": "Sydney",
                        "labelTranslations": {
                            "en": "Sydney",
                            "es": "Sídney"
                        },
                        "longitude": 151.209296,
                        "latitude": -33.868820,
                        "project": null
                    },
                    {
                        "label": "Spain",
                        "labelTranslations": {
                            "en": "Spain",
                            "es": "España"
                        },
                        "longitude": -6.4548,
                        "latitude": 43.4518,
                        "project": null
                    },
                    {
                        "label": "Italy",
                        "labelTranslations": {
                            "en": "Italy",
                            "es": "Italia"
                        },
                        "longitude": 14.5305,
                        "latitude": 40.982,
                        "project": null
                    },
                    {
                        "label": "Singapore",
                        "labelTranslations": {
                            "en": "Singapore",
                            "es": "Singapur"
                        },
                        "selected": true,
                        "longitude": 103.851959,
                        "latitude": 1.290270,
                        "project": {
                            "year": {
                                "en": "2019 - January",
                                "es": "2019 - Enero"
                            },
                            "cruise": "Diamond Princess",
                            "place": {
                                "en": "Singapore",
                                "es": "Singapur"
                            },
                            "vch": "V&CH Global – Marine",
                            "image": "./assets/images/project-singapore.jpg"
                        }
                    },
                    {
                        "label": "USA",
                        "labelTranslations": {
                            "en": "USA",
                            "es": "USA"
                        },
                        "longitude": -122.679565,
                        "latitude": 45.512794,
                        "project": {
                            "year": {
                                "en": "2019 - March",
                                "es": "2019 - Marzo"
                            },
                            "cruise": "Grand Princess",
                            "place": {
                                "en": "Portland, USA.",
                                "es": "Portland, USA."
                            },
                            "vch": "V&CH Global – Marine",
                            "image": "./assets/images/project-usa.jpg"
                        }
                    }
                ]
            };

            if (window.AmCharts) {
                var currentLang = localStorage.getItem("active-lang") || "en";

                for (var i = 0; i < dataProvider.images.length; i++) {
                    var label = dataProvider.images[i].labelTranslations[currentLang];
                    dataProvider.images[i].label = labelTranslations = label;
                };

                var map = AmCharts.makeChart("projects-map", {
                    "type": "map",
                    "theme": "light",
                    "projection": "miller",

                    "dataProvider": dataProvider,
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
                    "listeners": [
                        {
                            "event": "dataUpdated",
                            "method": updateCustomMarkers,
                        }, {
                            "event": "positionChanged",
                            "method": updateCustomMarkers,
                        }, {
                            "event": "clickMapObject",
                            "method": function (e) {
                                console.log(e)
                            },
                        }]
                });

                window.mapChart = map;
            }
        }
    };
    window.makeMap = window.makeMap || makeMap;

    $(document).foundation();

    $('.header-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplayHoverPause: true,
    });

    makeMap();
    updateCutSize();
    updateHeaderPicutre();

    window.addEventListener('resize', updateCutSize, false);
    window.addEventListener('resize', updateHeaderPicutre, false);

    var casacorLastDay = new Date(2019, 10, 03);
    var today = new Date();
    if (today <= casacorLastDay) {
        $('#casacor-modal').length && $('#casacor-modal').foundation('open');
    };

})

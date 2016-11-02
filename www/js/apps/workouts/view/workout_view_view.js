define(["app",
    "tpl!apps/workouts/templates/workout_view_only.tpl",
    "backbone.syphon"],
        function (SpartaMain, FormTpl) {
            SpartaMain.module("Workout.ViewPage", function (ViewPage, SpartaMain, Backbone, Marionette, $, _) {
                ViewPage.FormPage = Marionette.ItemView.extend({
                    className: 'item',
                    template: FormTpl,
                    events: {
                         "click .mov-rm-link" :"hideVideo",
                        "click .mov-link" :"showVideo"
                    },
                    showVideo: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var div = "."+$(e.target).next()[0].className;
                        if( $(div).is(':empty')) {
                             var frame = ' <i class="ion-chevron-up mov-rm-link"></i><iframe width="95%" height="315" src="'+$(e.target)[0].title+'"></iframe>';
                             $(div).append(frame);
                        }else{
                            $(div).empty();
                        }
                    },
                    hideVideo: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var div = "."+$(e.target).parents()[0].className;
                        $(div).empty();
                    },
                     onShow: function () {
                        function close_accordion_section() {
                            $('.accordion .accordion-section-title').removeClass('active');
                            $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
                        }

                        $('.accordion-section-title').click(function (e) {
                            // Grab current anchor value
                            var currentAttrValue = $(this).attr('href');
                            if ($(e.target).is('.active')) {
                                close_accordion_section();
                            } else {
                                close_accordion_section();

                                // Add active class to section title
                                $(this).addClass('active');
                                // Open up the hidden content panel
                                $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
                            }

                            e.preventDefault();
                        });
                        close_accordion_section();
                        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                          if(iOS){
                           $(".wo-back-btn").addClass("ios-bar");
                         }
                    }
                });
            });
            return SpartaMain.Workout.ViewPage;
        });
 
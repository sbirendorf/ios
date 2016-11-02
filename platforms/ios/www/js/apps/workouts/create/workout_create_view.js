define(["app",
    "tpl!apps/workouts/templates/workout_form.tpl",
    "backbone.syphon"],
        function (SpartaMain, FormTpl) {
            SpartaMain.module("Workout.NewPage", function (NewPage, SpartaMain, Backbone, Marionette, $, _) {
                NewPage.FormPage = Marionette.ItemView.extend({
                    className: 'item',
                    template: FormTpl,
                    events: {
                        "submit": "finishedClicked",
                        "click .work-save": "saveClicked",
                        "click .start-set": "startSet",
                        "click .stop-set": "stopSet",
                        "click .reset-set": "resetSet",
                    },
                    startSet: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        WorkoutTimer.Start('the-clock-',$(e.target)); 
                    },
                    stopSet: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        WorkoutTimer.Stop(); 
                    },
                    resetSet: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        WorkoutTimer.Stop(); 
                        WorkoutTimer.Reset('the-clock-',$(e.target));
                    },
                    saveClicked: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        $(".wo_status").val(1);
                        var data = Backbone.Syphon.serialize(this);
                        _finishedClicked(data);
                    },
                    finishedClicked: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var data = Backbone.Syphon.serialize(this);
                        _finishedClicked(data);
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
                    }
                });
            });
            return SpartaMain.Workout.NewPage;
        });

function _finishedClickedOLD(data) {
    require(["apps/workouts/common/workout_common_controller"], function (File) {
       File.createWorkout(data);
    });
}
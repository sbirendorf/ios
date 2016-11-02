define(["app",
    "tpl!apps/workouts/templates/workout_edit_form.tpl",
    "backbone.syphon"],
        function (SpartaMain, FormTpl) {
            SpartaMain.module("Workout.EditPage", function (EditPage, SpartaMain, Backbone, Marionette, $, _) {
                EditPage.FormPage = Marionette.ItemView.extend({
                    className: 'item',
                    template: FormTpl,
                    events: {
                        "submit": "finishedClicked",
                        "click .collapsible":"collapsibleClicked",
                        "click .mov-link" :"showVideo",
                        "click .mov-rm-link" :"hideVideo",
                        "click .work-save":"saveClicked",
                        "click .start-set": "startSet",
                        "click .stop-set": "stopSet",
                        "click .reset-set": "resetSet",
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
                        data.wo_status = 1;
                        _finishedClicked(data,"saved");
                    },
                    finishedClicked: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var data = Backbone.Syphon.serialize(this);
                        data.wo_status = 3;
                        _finishedClicked(data,"finished");
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
            return SpartaMain.Workout.EditPage;
        });
 
 function _finishedClicked(data,type) {                   
    require(["apps/workouts/common/workout_common_controller"], function (File) {
        File.createWorkout(data,type);
    });
}
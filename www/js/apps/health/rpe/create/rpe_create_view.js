define(["app",
    "tpl!apps/health/rpe/templates/rpe_form.tpl",
    "backbone.syphon"
],
        function (SpartaMain, WellnessFormTpl) {
            SpartaMain.module("RPE.NewPage", function (NewPage, SpartaMain, Backbone, Marionette, $, _) {

                NewPage.New = Marionette.ItemView.extend({
                    template: WellnessFormTpl,
                    className: 'container',
                    templateHelpers: function () {
                        var d = new Date();
                         var year = d.getFullYear();
                         var month = ("0" + (d.getMonth() + 1)).slice(-2);
                         var day = ("0" + d.getDate()).slice(-2);
                         var mins = ("0" + d.getMinutes()).substr(-2);
                         var hours = ("0" + d.getHours()).substr(-2);
                        return {uid: 0,
                               date:year+"-"+month+"-"+day, time:hours+":"+mins+":00"
                           };
                    },
                    events: {
                        "submit": "saveClicked",
                       "click .js-datepicker": "createDatePicker"
                    },
                     createDatePicker: function (e) { 
                         // var options = {
                         //      date: new Date(),
                         //      mode: 'date'
                         //    };

                         //    datePicker.show(options, function(date){
                         //      $('.js-datepicker').val(date.toISOString().split('T')[0]);
                         //    });
                    },
                    saveClicked: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var data = Backbone.Syphon.serialize(this);
                        data.date = data.date+" "+data.time;
                        //after clicking submit I disable the button so it doesn't get clicked a bunch more times
                        $("input[type=submit]").attr('disabled','true');
                        require(["apps/router"], function (Controller) {
                            Controller.trigger("form:submit", data,'rpe');
                        });
                    },
                    onShow:function (e) {
                            $("div#ui-datepicker-div").css("background-color", 'rgb(171, 171, 171)');
                    }
                });

            });
            return SpartaMain.RPE.NewPage;
        });


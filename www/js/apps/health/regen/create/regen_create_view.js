define(["app",
    "tpl!apps/health/regen/templates/regen_form.tpl",
    "backbone.syphon"
],
        function (SpartaMain, RegenFormTpl) {
            SpartaMain.module("Regen.NewPage", function (NewPage, SpartaMain, Backbone, Marionette, $, _) {

                NewPage.New = Marionette.ItemView.extend({
                    template: RegenFormTpl,
                    className: 'container',
                    templateHelpers: function () {
                        //find the date today in Y-m-d format
                        Date.prototype.yyyymmdd = function() {         
                        var yyyy = this.getFullYear().toString();                                    
                        var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based         
                        var dd  = this.getDate().toString();                             
                         return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]);
                        };  

                        d = new Date();
                        return {uid: this.options.uid,
                               callback: this.options.callback,
                               today: d.yyyymmdd()};
                    },
                    events: {
                        "submit": "saveClicked",
                        "click .js-datepicker": "createDatePicker"
                    },
                     createDatePicker: function (e) { 
                           // var options = {
                           //    date: new Date(),
                           //    mode: 'date'
                           //  };

                           //  datePicker.show(options, function(date){
                           //    $('.js-datepicker').val(date.toISOString().split('T')[0]);
                           //  });
                    },
                    saveClicked: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var data = Backbone.Syphon.serialize(this); 
                        require(["apps/router"], function (Controller) {
                            Controller.trigger("form:submit", data,'regen');
                        });
                    },
                   onShow: function () {
                       require(["bootstrap"], function () {
                            setTimeout(function () {
                                 $('#toggle-1').bootstrapToggle('off');
                                  $('#toggle-2').bootstrapToggle('off');
                                  $('#toggle-3').bootstrapToggle('off');
                                   $('#toggle-4').bootstrapToggle('off');
                            },350);
                       
                        });
                   }
                });

            });
            return SpartaMain.Regen.NewPage;
        });


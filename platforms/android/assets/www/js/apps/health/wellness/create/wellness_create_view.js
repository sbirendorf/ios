define(["app",
    "tpl!apps/health/wellness/templates/wellnes_form.tpl",
    "backbone.syphon"
],
        function (SpartaMain, WellnessFormTpl) {
            SpartaMain.module("Wellness.NewPage", function (NewPage, SpartaMain, Backbone, Marionette, $, _) {

                NewPage.New = Marionette.ItemView.extend({
                    template: WellnessFormTpl,
                    className: 'container',
                    templateHelpers: function () {
                        return {uid: 0};
                    },
                    events: {
                        "submit": "saveClicked"
                    },
                    saveClicked: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var data = Backbone.Syphon.serialize(this);
                        require(["apps/router"], function (Controller) {
                              Controller.trigger("form:submit", data,'wellness');
                        });
                    },
                    onShow: function () {
                        require(["imageMapLib"], function () {
                            $('#shape1').mapster({
                                    singleSelect : false,
                                    mapKey: 'color',
                                    fill : true,
                                    fillColor : 'FF0000',
                                    fillOpacity : 0.8
                            });
                       });
                        require(["bootstrap"], function () {
                            setTimeout(function () {
                                $('#toggle-1').bootstrapToggle();
                                $('#toggle-2').bootstrapToggle();
                                $('#toggle-3').bootstrapToggle();
                            },350);
                        });
                    }
                });    
            });
            return SpartaMain.Wellness.NewPage;
        });


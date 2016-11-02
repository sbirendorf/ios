define(["app",
    "tpl!apps/recovery/templates/recovery.tpl",
    "backbone.syphon"
],
        function (SpartaMain, RecoveryTpl) {
            SpartaMain.module("Recovery.NewPage", function (NewPage, SpartaMain, Backbone, Marionette, $, _) {

                NewPage.New = Marionette.ItemView.extend({
                    template: RecoveryTpl,
                    className: 'container',
                    templateHelpers: function () {
                        var d = new Date();
                         var year = d.getFullYear();
                         var month = ("0" + (d.getMonth() + 1)).slice(-2);
                         var day = ("0" + d.getDate()).slice(-2);
                        return {uid: 0,
                               date:year+"-"+month+"-"+day
                           };
                    },
                    events: {
                        "submit": "saveClicked",
                    },
                    saveClicked: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var data = Backbone.Syphon.serialize(this);
                        console.log(data);
                        //after clicking submit I disable the button so it doesn't get clicked a bunch more times
                         $("input[type=submit]").attr('disabled','true');
                       require(["apps/router"], function (Controller) {
                           Controller.trigger("form:submit", data,'recovery');
                       });
                    },
                    onShow:function (e) {
                            $("div#ui-datepicker-div").css("background-color", 'rgb(171, 171, 171)');
                    }
                });

            });
            return SpartaMain.Recovery.NewPage;
        });


define(["app",
    "tpl!apps/health/hydration/templates/hydration_view.tpl",
    "backbone.syphon"
],
        function (SpartaMain, RegenFormTpl) {
            SpartaMain.module("Hydration.ViewPage", function (ViewPage, SpartaMain, Backbone, Marionette, $, _) {

                ViewPage.viewPage = Marionette.ItemView.extend({
                    template: RegenFormTpl,
                    templateHelpers: function () {
                      //check if int 
                      var bottle =[];
                      if(this.model.attributes.volume % 1 === 0){
                          var max = this.model.attributes.volume;
                      }else{
                        var max = Math.floor(this.model.attributes.volume);
                        bottle.push(0.5);
                      }
                       for(var i = 0; i<max; i++){
                           bottle.push(1);
                        }
                        return {bottle: bottle};
                    },
                    className: 'container',
                    events: {
                        "click .btn": "saveClicked",
                    },
                    saveClicked: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                       
                       var fetchingData = SpartaMain.request("common:getModal", "api/get_athlete_sodium_from_q/"+$(e.target)[0].value);
                       fetchingData.done(function (Data) {
                          require(["apps/router"], function (Router) {
                            Router.trigger("app:start");
                           });
                       });
                        
                    }
                });

            });
            return SpartaMain.Hydration.ViewPage;
        });


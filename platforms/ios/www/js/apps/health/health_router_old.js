define(["app"], function (SpartaMain) {
    SpartaMain.module("Health", function (Health, SpartaMain, Backbone, Marionette, $, _) {
        Health.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "enter/screen": 'createScreenCoach',
                "enter/regen": 'createRegenAth',
                "enter/wellness": 'createWellnessAth',
                "enter/screen": 'createScreenAth',
                "enter/rpe": 'createRpeAth',
                "enter/weight": 'createWeightAth'
            }
        });

        var API = {
            createRpeAth: function () {
                require(["apps/health/rpe/create/rpe_create_controller"], function (Controller) {
                    Controller.CreateRpePage(0,'mobile');
                });
            },
            
            createWeightAth: function () {
                require(["apps/health/weight/create/weight_create_controller"], function (Controller) {
                    Controller.CreateWeightPage();
                });
            },
            createWellnessAth: function () {
                require(["apps/health/wellness/create/wellness_create_controller"], function (Controller) {
                    Controller.CreateWellnessPage();
                });
            },
            createScreenAth: function () {
                require(["apps/health/screen/create/screen_create_controller"], function (Controller) {
                    Controller.CreateScreenPage();
                });
            },
            createRegenAth: function () {
                require(["apps/health/regen/create/regen_create_controller"], function (Controller) {
                    Controller.CreateRegenPage();
                });
            },
            submitForm: function (data,type) {
                require(["apps/health/common/health_common_controller"], function (Controller) {
                    Controller.saveForm(data,type);
                });
            }
        };
        Health.on("form:submit", function (data,type) {
            API.submitForm(data,type);
        });
        Health.on("start", function () {
            new Health.Router({
                controller: API
            });
        });
    });
    return SpartaMain.Health;
});
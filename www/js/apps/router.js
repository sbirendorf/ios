define(["app"], function (SpartaMain) {
    SpartaMain.module("Router", function (Router, SpartaMain, Backbone, Marionette, $, _) {
        Router.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "home": 'homePage',
                "login": 'loginPage',
                "logout": 'logout',
                "charts": 'chartPage',
                "scan": 'scanPage',
                "balance": 'balancePage',
                "notifications": 'notificationsPage',
                "booknow": 'bookPage',
                "more": 'morePage',
                "about": 'aboutPage',
                "file/list": 'filePage',
                "landing": 'landingPage',
                "profile/edit": 'profileEditPage',
                "workouts": 'workoutsList',
                "workout/refresh":'workoutsRefresh',
                "workout/create/:tid/:uid/:day":'createWorkout',
                "workout/view/:tid/:uid/:day":'viewWorkout',
                "workout/:nid/edit":'editWorkout',
                "enter/screen": 'createScreenCoach',
                "enter/regen": 'createRegenAth',
                "enter/wellness": 'createWellnessAth',
                "enter/screen": 'createScreenAth',
                "enter/rpe": 'createRpeAth',
                "enter/weight": 'createWeightAth',
                "hydration" : 'hydrationPage',
                "recovery" : 'recoveryPage',
            }
        });

        var API = {
            homePage: function () {
                 require(["apps/home/main_page_controller"], function (Controller) {
                    Controller.mobileMainPage();
                });
            },
            chartPage: function () {
                 require(["apps/home/main_page_controller"], function (Controller) {
                    Controller.mobileChartPage();
                });
            },
            scanPage: function () {
                 require(["apps/forceplate/scan/scan_controller"], function (Controller) {
                    Controller.mobileScanPage();
                });
            },
            balancePage: function () {
                 require(["apps/forceplate/balance/balance_controller"], function (Controller) {
                    Controller.mobileBalancePage();
                });
            },
            landingPage: function () {
                 require(["apps/forceplate/landing/landing_controller"], function (Controller) {
                    Controller.mobileLandingPage();
                });
            },
            profileEditPage: function () {
                 require(["apps/profile/profile_page_controller"], function (Controller) {
                    Controller.profileEditPage();
                });
            },
            aboutPage: function () {
                 require(["apps/about/about_controller"], function (Controller) {
                    Controller.aboutPage();
                });
            },
            filePage: function () {
                 require(["apps/files/files_controller"], function (Controller) {
                    Controller.filePage();
                });
            },
            notificationsPage: function () {
                 require(["apps/notifications/notifications_controller"], function (Controller) {
                    Controller.notificationsPage();
                });
            },
            bookPage: function () {
                 require(["apps/home/main_page_controller"], function (Controller) {
                    Controller.bookPage();
                });
            },
            recoveryPage: function () {
                 require(["apps/recovery/recovery_controller"], function (Controller) {
                    Controller.RecoveryPage();
                });
            },
            morePage: function () {
                 require(["apps/home/main_page_controller"], function (Controller) {
                    Controller.morePage();
                });
            },
            loginPage: function () {
                 require(["apps/home/main_page_controller"], function (Controller) {
                    Controller.loginPage();
                    SpartaMain.navigate('');
                });
            },
            logout: function () { 
                 window.localStorage.removeItem("sparta_key");
                 window.localStorage.removeItem("sparta_header");
                 var fetchingData = SpartaMain.request("common:getModal", "api/logout");
                API.loginPage();
            },
            workoutsList: function () {
                
                 require(["apps/workouts/list/workout_list_controller"], function (Controller) {
                    Controller.WorkoutsList();
                });
            },
            workoutsRefresh: function () {
                 require(["apps/workouts/list/workout_list_controller"], function (Controller) {
                    Controller.WorkoutsList();
                    SpartaMain.navigate('workouts');
                });
            },
            createWorkout: function (tid,uid,day) {
                
                 require(["apps/workouts/create/workout_create_controller"], function (Controller) {
                    Controller.createWorkoutsPage(tid,uid,day);
                });
            },
            viewWorkout: function (tid,uid,day) {
                
                 require(["apps/workouts/view/workout_view_controller"], function (Controller) {
                    Controller.viewWorkoutsPage(tid,uid,day);
                });
            },
            editWorkout: function (nid) {
                
                 require(["apps/workouts/edit/workout_edit_controller"], function (Controller) {
                    Controller.editWorkoutsPage(nid);
                });
            },
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
            },
            hydrationPage: function() {
                require(["apps/health/hydration/view/hydration_controller"], function (Controller) {
                    Controller.hydrationPage();
                });
            }
        };
        Router.on("login", function () {
            API.loginPage();
        });
         Router.on("app:start", function () {
            SpartaMain.navigate('home');
            API.homePage();
        });
        Router.on("form:submit", function (data,type) {
            API.submitForm(data,type);
        });
        Router.on("start", function () {
            SpartaMain.navigate('home');
            new Router.Router({
                controller: API
            });
        });
        
    });
    return SpartaMain.Router;
});
 

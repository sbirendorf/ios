define(["app"], function (SpartaMain) {
    SpartaMain.module("Workouts", function (Workouts, SpartaMain, Backbone, Marionette, $, _) {
        Workouts.Router = Marionette.AppRouter.extend({
            appRoutes: {
                "workouts": 'workoutsList',
                "workout/create/:tid/:uid/:day":'createWorkout',
                "workout/view/:tid/:uid/:day":'viewWorkout',
                "workout/:nid/edit":'editWorkout'
            }
        });

        var API = {
            workoutsList: function () {
                
                 require(["apps/workouts/list/workout_list_controller"], function (Controller) {
                    Controller.WorkoutsList();
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
            }
        };
         Workouts.on("workouts:start", function () {
            
            require(["apps/mobile/main_page_controller"], function (Controller) {
                    Controller.mobileMainPage();
                });
        });
        Workouts.on("start", function () {
            SpartaMain.navigate('home');
            new Workouts.Router({
                controller: API
            });
        });
        
    });
    return SpartaMain.Workouts;
});
 

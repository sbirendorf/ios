define(["app",
    "tpl!apps/notifications/templates/notifications.tpl",
    "backbone.syphon"],
        function (SpartaMain, NotificationsTpl) {
            SpartaMain.module("Notifications", function (Notifications, SpartaMain, Backbone, Marionette, $, _) {
                
                Notifications.notificationsPageView = Marionette.ItemView.extend({
                    template: NotificationsTpl,
                    templateHelpers: function () {
                        return { update:localStorage.sparta_notification};
                    },
                    events: {
                        "click .ion-android-close":"closeNotification",
                        "change #update":"notificationTimeChange"
                    },
                    notificationTimeChange: function(e){
                        e.stopPropagation();
                        e.preventDefault();
                        var selected = $('#update').val();
                        window.localStorage.setItem("sparta_notification", selected);
                    },
                    closeNotification: function(e){
                        e.stopPropagation();
                        e.preventDefault();
                        $(e.target).parent().parent().remove();
                        var data = {nid:[$(e.target)[0].id], status:"read"};
                        SpartaMain.request("common:postData","api/note_mark_read", data);
                        var number = Number($(".note-badge-notify").text()) - 1;
                        if(number > 0 ){
                             $(".note-badge-notify").text(number);
                         }else{
                            $(".note-badge-notify").hide();
                         }
                        
                    },onShow:function (){
                        //check if we have unread notifications
                        var flag = false;
                        $.each( this.model.attributes.notes, function( key, value ) {
                          if(value.field_nt_status_value == 'unread'){
                            flag = true;
                            return true;
                          }
                        });
                        if(!flag){
                             $('#main-region .container').html('<h3><center>No new notifications</center></h3>');
                        }        
                    }
                });
            });
            return SpartaMain.Notifications;
        });

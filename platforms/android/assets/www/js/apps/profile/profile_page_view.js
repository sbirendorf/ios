define(["app",
    "tpl!apps/profile/templates/profile.tpl",
    "tpl!apps/profile/templates/edit_profile.tpl",
    "tpl!apps/profile/templates/upload_image.tpl",
    "backbone.syphon"],
    function (SpartaMain, ProfilePageTpl,EditProfilePageTpl,UploadImageTpl) {
        SpartaMain.module("MobileHome.Profile", function (Profile, SpartaMain, Backbone, Marionette, $, _) {

            Profile.AthleteProfilePage = Marionette.ItemView.extend({
                template: ProfilePageTpl,
                    // templateHelpers: function () {
                    //     localStorage.sparta_url+"/"+this.model.attributes.img
                    //     if(this.model.attributes.img ==""){
                    //          return {img: "./img/anon_user.png"};
                    //     }
                    //     return {img: localStorage.sparta_url+"/"+this.model.attributes.img};
                    // },
                    onShow: function (){
                        var data = this.model.attributes;  
                        var bw = " , BW: "+ data.bw;
                        if (data.bw == null){
                            bw = "";
                        }
                            var barData = {
                                labels: [data.scanDate.substring(0, 10) + bw],
                                datasets: [
                                {
                                    fillColor: '#9C9192',
                                    data: [data.load.toFixed(0)]
                                },
                                {
                                    fillColor: '#000',
                                    data: [data.explode.toFixed(0)]
                                },
                                {
                                    fillColor: '#B83343',
                                    data: [data.drive.toFixed(0)]
                                }
                                ]
                            };
                            var context = document.getElementById('barChart').getContext('2d');
                            var clientsChart = new Chart(context).Bar(barData);
                                              
                    }
                });
            Profile.SportTaxonomy = Marionette.ItemView.extend({
                initialize: function(){
                    var mySelect = $('#position');
                    mySelect.find('option').remove();
                    var subPosition = $('#sub_position');
                    subPosition.find('option').remove();
                    subPosition.append($('<option></option>').val('Other').html("Other"));
                    mySelect.append($('<option></option>').val('Other').html("Other"));
                    $.each(this.options.model.attributes, function(val, text) {
                        mySelect.append(
                            $('<option></option>').val(text).html(text)
                            );
                    });              
                }
            });
            Profile.PositionTaxonomy = Marionette.ItemView.extend({
                initialize: function(){
                    var mySelect = $('#sub_position');
                    mySelect.find('option').remove();
                    mySelect.append($('<option></option>').val('Other').html("Other"));
                    $.each(this.options.model.attributes, function(val, text) {
                        mySelect.append(
                            $('<option></option>').val(text).html(text)
                            );
                    });              
                }
            });
            Profile.UploadPic = Marionette.ItemView.extend({
                template: UploadImageTpl,
                events: {
                    "click button_save": "saveClicked",
                    "click .js-upload-cancel": "uploadClickedCancel",
                },
                saveClicked: function (e) {
                    e.preventDefault();

                    var fd = new FormData();
                    fd.append('files', $('#file')[0].files[0]);

                    if (typeof $('#file')[0].files[0] !== 'undefined') {
                        require(["apps/profile/profile_page_controller"], function (Controller) {
                           SpartaMain.request("save:image", '/upload_user_img',fd);
                           SpartaMain.DialogRegion.reset();  
                       });
                        require(["common/common_view"], function (CommonView) {
                            var load = new CommonView.LoadingModal();
                            SpartaMain.DialogRegion.show(load);
                        });
                    } else {
                            SpartaMain.DialogRegion.reset(); // close the dialog box
                        }
                    },  uploadClickedCancel: function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        SpartaMain.DialogRegion.empty();
                    }
                });
            Profile.EditAthleteProfilePage = Marionette.ItemView.extend({
                template: EditProfilePageTpl,
                templateHelpers: function () {

                    if(this.model.attributes.info.filePicture ==""){
                       return {filePicture: "./img/anon_user.png"};
                   }
                   return {filePicture: localStorage.sparta_url+"/"+this.model.attributes.info.filePicture};
               },
               events: {
                "submit": "saveClicked",
                "mouseover .js-datepicker": "createDatePicker",
                "change #password": "validatePassword",
                "keyup #confirm_password": "validatePassword",
                "click  a.js-upload": "uploadClicked",
                "change #sport":"sportChange",
                "change #position":"positionChange"
            },
            saveClicked: function (e) {
                e.stopPropagation();
                e.preventDefault();
                var data = Backbone.Syphon.serialize(this);
                if(data.sport !="null" & data.position !="null" & data.sub_position !="null"){
                    require(["apps/profile/save_profile_controller"], function (Controller) {
                        Controller.saveProfile(data);
                    });
                }
                else{
                    alert("Sport and positions must be selected.");
                }
            },
            sportChange: function(){
                require(["apps/profile/profile_page_controller"], function (Controller) {
                    var selected = $('#sport').val();
                    Controller.taxonomySport(selected);
                });
            },
            positionChange: function(){
                require(["apps/profile/profile_page_controller"], function (Controller) {
                    var sport = $('#sport').val();
                    var position = $('#position').val();
                    Controller.taxonomyPosition(sport,position);
                });
            },
            uploadClicked: function (e) {
                e.preventDefault();
                e.stopPropagation();
                require(["apps/profile/profile_page_controller"], function (Controller) {
                    Controller.userImage();
                });
            },
            validatePassword: function(){
                var password = document.getElementById("password");
                var confirmPassword = document.getElementById("confirm_password");
                if(password.value != confirmPassword.value) {
                    confirmPassword.setCustomValidity("Passwords Don't Match");
                } else {
                    confirmPassword.setCustomValidity('');
                }
            }
        });
        });
return SpartaMain.MobileHome.Profile;
});

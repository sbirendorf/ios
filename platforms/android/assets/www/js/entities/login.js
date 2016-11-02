define(["app","common/common_view"], function(SpartaMain,Common){
  SpartaMain.module("Init", function(Init, SpartaMain, Backbone, Marionette, $, _) {

    Init.Item = Backbone.Model.extend({  
    });
    var API = {
      postLoginData: function (data) {
        var http = new XMLHttpRequest();
        var params = "name="+ data.user + "&pass=" + data.pw;

        window.localStorage.setItem("sparta_user", data.user);
              //  data.url="localhost/misparta/www";
             //   data.url="dev1.spartatrac.com";
             http.open("POST", "https://"+data.url+"/api/login", true);
                //Send the proper header information along with the request
                http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                http.onreadystatechange = function() {//Call a function when the state changes.
                  console.log(http);
                  if(http.readyState ==4){//request finished and response is ready
                    console.log('response text= '+ http.responseText);
                    if(http.responseText == ""){
                      require(["apps/router"], function (mobile) {
                        mobile.trigger("login");
                      });
                      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                      if(iOS){
                        var msg = new Common.customMessages({
                          body:'',
                          head:'Login failed please try again',
                          class: 'danger'
                        })
                        SpartaMain.MessageRegion.show(msg);
                      }else{
                        navigator.notification.alert(
                                        "Login failed please try again",  // message
                                        alertDismissed,         // callback
                                        'Login',            // title
                                        'Ok'                  // buttonName
                                        );
                      }
                    }
                    var obj = jQuery.parseJSON(http.responseText);
                    if (http.responseText.indexOf("sessionId") >= 0){
                      window.localStorage.setItem("sparta_url", "https://"+data.url);
                      window.localStorage.setItem("sparta_key", obj.sessionId);
                            API.siteHeader(data.url);//get the cookie header
                          }else{
                           require(["apps/router"], function (mobile) {
                            mobile.trigger("login");
                          });
                           var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                           if(iOS){
                              var msg = new Common.customMessages({
                                body:obj.error.descr,
                                head:'Login failed',
                                class: 'danger'
                              })
                              SpartaMain.MessageRegion.show(msg);
                            }else{
                               navigator.notification.alert(
                                  obj.error.descr,  // message
                                  alertDismissed,         // callback
                                  'Login',            // title
                                  'Ok'                  // buttonName
                                  );
                            }
                         }
                       }
                     };
                     http.send(params);
                   },
                   siteHeader: function (url) {
                    var ajax = $.ajax({
                     url: "https://"+url+"/api/login/android",
                     type: 'GET'
                   });
                    ajax.done(function (Data) {
                     window.localStorage.setItem("sparta_header", Data.sessionKey);
                     require(["apps/router"], function (mobile) { 
                      mobile.trigger("app:start");
                    });
                   });
                    ajax.fail(function(jqXHR, textStatus, errorThrown) {
                      $('.login-form').show();
                      navigator.notification.alert(
                                  errorThrown,  // message
                                  alertDismissed,         // callback
                                  'Server',            // title
                                  'Ok'                  // buttonName
                                  );
                    });
                  }
                };
                SpartaMain.reqres.setHandler("login", function(data) {
                  return API.postLoginData(data);
                });

              });
return ;
});
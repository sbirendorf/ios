define(["app"], function(SpartaMain){
SpartaMain.module("CommonEntities", function(CommonEntities, SpartaMain, Backbone, Marionette, $, _) {

    CommonEntities.Item = Backbone.Model.extend({  
    });
    CommonEntities.Items = Backbone.Collection.extend({
            model: CommonEntities.Item
    });
    
    var API = {
            getCommonDataModal: function(url) {
               var defer = $.Deferred();
               var site = localStorage.sparta_url;
               var ajax = $.ajax({
                   url: site+"/"+url,
                   type: 'GET',
                   crossDomain: true
               });
               ajax.done(function (Data) {
                    var source= new CommonEntities.Item();
                    source.set(Data.data);
                    defer.resolve(source);
               });
               ajax.fail(function(jqXHR, textStatus, errorThrown) {
                    defer.reject(errorThrown);
                    SpartaMain.getUser(errorThrown);
              });
               return defer.promise();
            },
            //gets the data exactly from url
            getCommonDataModalExact: function(url) {   
               var defer = $.Deferred();
               var site = localStorage.sparta_url;
               var ajax = $.ajax({
                   url: site+"/"+url,
                   type: 'GET'
               });
               ajax.done(function (Data) {
                    var source= new CommonEntities.Item();
                    source.set(Data);
                    defer.resolve(source);
               });
               ajax.fail(function(jqXHR, textStatus, errorThrown) {
                    defer.reject(errorThrown);
                    SpartaMain.getUser(errorThrown);
              });
               return defer.promise();
            },
            getCommonDataCollection: function(url) {  
                var defer = $.Deferred();
                var site = localStorage.sparta_url;
                var ajax = $.ajax({
                   url: site+"/"+url,
                    type: 'GET'
                });
                ajax.done(function (Data) {
                    var rtnData = new CommonEntities.Items();
                    if (Data.hasOwnProperty('data')) {
                        for (var i = 0; i < Data.data.length; i++) {
                            rtnData.add([Data.data[i]]);
                        }
                    }
                    // console.log(JSON.stringify(rtnData.toJSON()));
                    defer.resolve(rtnData);
                });
                ajax.fail(function (jqXHR, textStatus, errorThrown) {
                    defer.reject(errorThrown);
                    SpartaMain.getUser(errorThrown);
                });
               return defer.promise();
            },
            setCommonData: function(url) {  
               var defer = $.Deferred();    
               var site = localStorage.sparta_url;
               var ajax = $.ajax({
                   url: site+"/"+url,
                   type: 'POST'
               });
               ajax.done(function (Data) {
                    var source= new CommonEntities.Item();
                    source.set(Data);
                    defer.resolve(source);
               });
               ajax.fail(function(jqXHR, textStatus, errorThrown) {
                    defer.reject(errorThrown);
              });
               return defer.promise();
            },
            getCommonDataModalAll: function(url) {   
               var defer = $.Deferred();
               var site = localStorage.sparta_url;
               var ajax = $.ajax({
                   url: site+"/"+url,
                   type: 'GET'
               });
               ajax.done(function (Data) {
                    var source= new CommonEntities.Item();
                    source.set(Data);
                    defer.resolve(source);
               });
               ajax.fail(function(jqXHR, textStatus, errorThrown) {
                    defer.reject(errorThrown);
                    SpartaMain.getUser(errorThrown);
              });
               return defer.promise();
            },
            postCommonData: function (url,data) {
                var defer = $.Deferred();
                var json = JSON.stringify(data);
                var site = localStorage.sparta_url;
                var ajax = $.ajax({
                   url: site+"/"+url,
                    data: {"data": json},
                    type: 'POST'
                });
                console.log(site+"/"+url);
                ajax.done(function (Data) {
                    var rtnData = new CommonEntities.Item();
                    rtnData.set(Data);
                    defer.resolve(rtnData);
                });
                ajax.fail(function (jqXHR, textStatus, errorThrown) {
                     defer.reject(errorThrown);
                     SpartaMain.getUser(errorThrown);
                });
                
                return defer.promise();
            },
            postFileCommonData: function (url,data) {
                var defer = $.Deferred();
                var json = JSON.stringify(data);
                var site = localStorage.sparta_url;
                var ajax = $.ajax({
                   url: site+"/"+url,
                    data: data.fd,
                    processData: false,
                    contentType: false,
                    type: 'POST'
                });
                ajax.done(function (Data) {
                    var rtnData = new CommonEntities.Item();
                    rtnData.set(Data);
                    defer.resolve(rtnData);
                });
                ajax.fail(function (jqXHR, textStatus, errorThrown) {
                     defer.reject(errorThrown);
                     SpartaMain.getUser(errorThrown);
                });
                
                return defer.promise();
            },
            saveUserImage: function (url,data) {
              var defer = $.Deferred();
              var site = localStorage.sparta_url;
              $.ajax({
                    url: site+"/"+url,
                    data: data,
                    processData: false,
                    contentType: false,
                    type: 'POST',
                    success: function(data){
                       navigator.notification.alert(
                                  data,  // message
                                  alertDismissed,         // callback
                                  'Profile',            // title
                                  'Ok'                  // buttonName
                                );
                      SpartaMain.DialogRegion.reset(); // close the dialog box
                      Backbone.history.loadUrl();

                      require(["apps/mobile/main_page_controller"], function (Controller) { // update the image in the left menu 
                        Controller.mobileMainPage(true);
                      });
                    },
                    error: function(data){
                           navigator.notification.alert(
                                  data,  // message
                                  alertDismissed,         // callback
                                  'Profile',            // title
                                  'Ok'                  // buttonName
                                );
                        SpartaMain.DialogRegion.reset(); // close the dialog box
                    }
                  });  
            }
          
    };
    SpartaMain.reqres.setHandler("common:getModal", function(url) {
        return API.getCommonDataModal(url);
    });
    SpartaMain.reqres.setHandler("common:getModalExact", function(url) {
        return API.getCommonDataModalExact(url);
    });  
    SpartaMain.reqres.setHandler("common:getCollection", function(url) {
        return API.getCommonDataCollection(url);
    });
    SpartaMain.reqres.setHandler("common:post", function(url) {
        return API.setCommonData(url);
    });
    SpartaMain.reqres.setHandler("common:postData", function(url,data) {
      console.log(data);
        return API.postCommonData(url,data);
    });
    SpartaMain.reqres.setHandler("common:postFile", function(url,data) {
        return API.postFileCommonData(url,data);
    }); 
    SpartaMain.reqres.setHandler("save:image", function(url,data) {
            return API.saveUserImage(url,data);
        });
});
return ;
});
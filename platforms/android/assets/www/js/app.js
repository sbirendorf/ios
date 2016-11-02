define(["marionette"], function(Marionette,bootstrapJs){
  var SpartaMain = new Marionette.Application();

  SpartaMain.addRegions({
   MainRegion: "#main-region", 
   MenuRegion: "#slide-out-left", 
   MessageRegion: "#message-region",
  //     FooterRegion: "#footer-region", 
  DialogRegion: "#dialog-region"

});
  SpartaMain.navigate = function(route,  options){
    options || (options = {});
    Backbone.history.navigate(route, options);
  };
  SpartaMain.getUser = function(sid){
    console.log(localStorage.sparta_url);
   if(sid =='Forbidden' || localStorage.sparta_url ==undefined){
    require(["apps/router"], function (mobile) {
      mobile.trigger("login");
      window.localStorage.removeItem("sparta_key");
      window.localStorage.removeItem("sparta_header");
    });
  }

};
SpartaMain.getCurrentRoute = function(){
  return Backbone.history.fragment;
};
SpartaMain.str = function(){
 Backbone.history.start(); 
};  
SpartaMain.addInitializer( function(){  
  console.log('start');
  require(["apps/router"], function (Router) {
    SpartaMain.str();
    Router.start();
    console.log(SpartaMain.getCurrentRoute());
    if(SpartaMain.getCurrentRoute() == ""){
      Router.trigger("app:start");
    }
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;   
     if(iOS){    
        $(".app").css("margin-top", "20px");   
        $("#toolbar").css("margin-top", "20px");   
      }
  });
});

document.addEventListener('deviceready', function () {
    console.log('deviceready');
    // if(localStorage.sparta_notification ==undefined){
    //   window.localStorage.setItem("sparta_notification", 6);
    // }
    // var updateTime = Number(localStorage.sparta_notification)*60;
    // console.log(updateTime);
    // if(updateTime > 0 ){
    //  console.log('set background job');
    //   cordova.plugins.backgroundMode.setDefaults({silent: true});
    //                         // Enable background mode
    //                         cordova.plugins.backgroundMode.enable();
    // }else{
    //        console.log('remove background job');
    //        cordova.plugins.backgroundMode.disable();
    //      }



  }, false);

return SpartaMain;
});
function alertDismissed(){
}
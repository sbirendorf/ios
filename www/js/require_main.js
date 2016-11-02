requirejs.config({
  baseUrl: "../www/js",
  paths: {
    backbone: "vendor/backbone-min",
    "backbone.syphon": "vendor/backbone.syphon.min",
    jquery: "vendor/jquery-min",
    "jquery-ui": "vendor/jquery-ui-min",
    json2: "vendor/json2.min",
    marionette: "vendor/backbone.marionette.min",
    underscore: "vendor/underscore-min",
    text: "vendor/text",
    tpl: "vendor/underscore-tpl",
    propertyParser :"vendor/property_parser",
    imageMapLib :"vendor/jquery.imagemapster",
    bootstrap: "vendor/bootstrap-toggle.min",
//    
    // velocity :"vendor/velocity.min",
    // hammerjs :"vendor/hammer.min",
    // materialize :"vendor/materialize.min",
//    masonry :"vendor/masonry.min",
//    chart :"vendor/chart.min",
//    functions: "vendor/functions",
//    swipebox :"vendor/jquery.swipebox.min",
//    smoothState :"vendor/jquery.smoothState.min",
//    swiper: "vendor/swiper.min",
//    mixitup: "vendor/jquery.mixitup.min"

    },

  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore", "json2","jquery-ui"],
      exports: "Backbone"
    },
    tpl: ["text"],
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
 //   "jquery-ui": ["jquery"],
     imageMapLib: {
      deps: ["jquery","jquery-ui"],
      exports: "imageMapLib"
    },
//    bootstrap:{
//      deps: ["jquery","jquery-ui","swipebox","smoothState","materialize","swiper","mixitup","masonry","chart"],
//      exports: "bootstrap"
//    },
    // materialize:{
    //   deps: ['jquery', 'hammerjs', 'velocity']
    // },
    "backbone.syphon": ["backbone"]
  },
   urlArgs: new Date().getTime().toString()
});

require(["marionette"], function(bbm){
  console.log("jQuery version: ", $.fn.jquery);
  console.log("underscore identity call: ", _.identity(5));
  console.log("Marionette: ", bbm);
  $.support.cors = true;

});
require(["app"], function(SpartaMain){
    SpartaMain.start();
 });

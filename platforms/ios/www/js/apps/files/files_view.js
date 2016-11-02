define(["app",
    "tpl!apps/files/templates/files.tpl",
    "backbone.syphon"],
        function (SpartaMain, FilesTpl) {
            SpartaMain.module("Files", function (Files, SpartaMain, Backbone, Marionette, $, _) {
                
                Files.filesPageView = Marionette.ItemView.extend({
                    template: FilesTpl
                    ,events: {
                        "click .view-pdf": "showPDF",
                    },
                    showPDF: function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        console.log($(e.target)[0].id);
                        console.log(localStorage.sparta_url);
                        var ref = window.open(localStorage.sparta_url+'/'+$(e.target)[0].id, '_blank', 'location=yes');
                        var myCallback = function() { alert(event.url); }
                        ref.addEventListener('loadstart', myCallback);
                        ref.removeEventListener('loadstart', myCallback);
                    },
                });
            });
            return SpartaMain.Files;
        });

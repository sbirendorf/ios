/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//show the app version to the end-user
var appVersion = "2.11";
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        console.log('onDeviceReady');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        

        console.log('Received Event: ' + id);
    }
};

var WorkoutTimer= {
    timer: null,
    Start: function(className,target) {
         //change the row color
         //clear all the old timers 
        for (var i = 1; i < 999; i++){
             window.clearInterval(i);
        }
        var number = WorkoutTimer.GetComplex(target); 
        var phone = "";
         var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
         if(iOS){
            phone = "ios-bar";
         }
        $("#accordion-"+number+" .timer-view").addClass( "timer-view-active " +phone );
        $("#accordion-"+number+" #start").prop("disabled",true);
        
        WorkoutTimer.ChangeRowColor(number);
        WorkoutTimer.InsertTimeStamp(number);

        var startTime = Date.now();
        this.timer = setInterval(function() {

            var delta = Date.now() - startTime;     // milliseconds
                delta = Math.round(startTime - ( startTime - (delta / 1000)));

            var timer = $('.org-'+className+number).html();
            if(timer == null){
                WorkoutTimer.Stop();
                return;
            }
            timer = timer.split(':');
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            if(isNaN(minutes) || isNaN(seconds)){
                WorkoutTimer.Stop();
                return;
            }

            var timeSec = parseInt(timer[0], 10) * 60 + parseInt(timer[1], 10);
            timeSec = timeSec - delta;
            var timerMin = parseInt(timeSec/60);
            if (timerMin < 10 && length.timerMin != 2) timerMin = '0' + timerMin;
            var timerSec = timeSec%60;
            if (timerSec < 10 && length.timerSec != 2) timerSec = '0' + timerSec;
            $('.'+className+number).html(timerMin+":"+timerSec);

            var t = timerMin+":"+timerSec;
            if ((timerSec <= 0 && timerMin <= 0) || t.indexOf('-') >= 0){
                WorkoutTimer.Stop();
                WorkoutTimer.Reset('the-clock-',target);
                WorkoutTimer.IncreaseSet(number);
                WorkoutTimer.ModalWindow('the-clock-',target);
            }

        }, 1000);
    },
    Stop: function() {
        window.clearTimeout(this.timer);
    },
    Reset: function(className,target) {
        var number = WorkoutTimer.GetComplex(target); 
        $("."+className+number).text($(".org-"+className+number)[0].innerText);
         $("#accordion-"+number+" #start").prop("disabled",false);
    },
    GetComplex: function(target) {
        var complexNumber = $(target).closest(".accordion-section-content");
            complexNumber = complexNumber[0].id.replace(/\s/g, '');
        var number = complexNumber.replace(/[^0-9]/g, ''); 
        return number;
    },
    ChangeRowColor: function(number) {
        var currentSetNum = $("#accordion-"+number +" .set-number").text();
        $("#accordion-"+number +" .inner-set-number-"+currentSetNum).addClass( "active-set" );
        //if we have next set 
        if($("#accordion-"+number +" .inner-set-number-"+currentSetNum).hasClass( "active-set" ) == false){
            $("#accordion-"+number +" .set-number").text(currentSetNum-1);
            $("#accordion-"+number+" .timer-view").removeClass( "timer-view-active");
            
        }
    },
     IncreaseSet: function(number) {
        var currentSetNum = Number($("#accordion-"+number +" .set-number").text());
        $("#accordion-"+number +" .inner-set-number-"+currentSetNum).removeClass("active-set");
        $("#accordion-"+number +" .set-number").text(currentSetNum+1);
        
        WorkoutTimer.ChangeRowColor(number);
    },
    //add the time stamp to the timer field
    InsertTimeStamp: function(number) {
        var now = new Date().getTime();
        $("#accordion-"+number +" .timer-timestamp").val(now);
    },
    ModalWindow: function(className,target) {
         var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
         if(iOS){
              var temp = '<div class="customMessages-area"><div class="alert alert-danger" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><br><strong><center>Set is Over</center></strong><br></div></div>';
            $('#message-region').html(temp);
        }else{
            navigator.notification.alert(
                                  'Set is Over',  // message
                                  alertDismissed,         // callback
                                  'Workout',            // title
                                  'Ok'                  // buttonName
                                );

        }

            //check if we have next set
        var number = WorkoutTimer.GetComplex(target);
        var currentSetNum = $("#accordion-"+number +" .set-number").text();
        if($("#accordion-"+number +" .inner-set-number-"+currentSetNum).hasClass( "active-set" ) == true){
            WorkoutTimer.Start(className,target);
        }        
    },
};


function selectText(e){
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(iOS){
        $(e).get(0).setSelectionRange(0,9999);
    }else{
        e.select();
    }
}

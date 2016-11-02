<a href="#workouts"><i class="wo-back-btn ion-ios-arrow-back" style="float: right;margin-right: 21px;" title="Back"></i></a>
<form class="form-inputs">
    <h4 style="    text-align: center;"> <%- field_wo_workout_title[0].value %> - <%- wo_day_view %></h4>
    <div class="form-error"></div>

    Strength Level:<%- profile.major_lower  %>.<%- profile.minor_lower  %><br>
    Skills Level:<%- profile.major_upper %>.<%- profile.minor_upper %><br>
    <br>

    <div class="accordion">
        <% _(complex).each(function(comp, comp_number) { %>
        <div class="accordion-section">
            <a class="accordion-section-title" href="#accordion-<%= comp_number %>" style="text-align: center;"><%= comp.name %></a>
            <div id="accordion-<%= comp_number %>" class="accordion-section-content">
                
                <div class="workout-complex">
                    <input style="display:none;" readonly type="text" value="<%= comp.name %>" name="complex_name[<%- comp_number-1 %>][]">

                    <input class="hide" type="textarea" readonly value="<%= comp.note %>" name="notes[<%- comp_number-1 %>][]">
                    <input class="hide" readonly type="text" value="<%= comp.timer %>" name="timer[<%- comp_number-1 %>]">
                    <label>Notes:<%= comp.notes %></label><br>
                     <button id="start" style="float: left;" class="btn btn-success start-set"><span class="ion-play"></span>Start</button>
                      <!--<button id="stop" class="btn btn-danger stop-set" ><span class="ion-stop"></span> Stop</button>-->
                      <button id="reset" style="float: right;" class="btn btn-danger reset-set" ><span class="ion-ios-reload"> </span>Reset</button>
                      <br> <br>
                    <div class="timer-view">
                           <label>Set:<span class="set-number">1 </span></label>  
                           <label> Timer: <span class="the-clock-<%-comp_number %>"> <%= comp.timer %></span></label>  
                        <span class="hide org-the-clock-<%-comp_number %>"><%= comp.timer %></span>
                    </div>

                    <input type="number" style="display: none" value="<%= comp.promote %>" name="promote[<%- comp_number %>][]">
                    <% _(comp.mov_nid).each(function(mov,mov_number) { %>
                    <div class="hide">
                        <input type="text" value="<%- comp.mov_nid[mov_number] %>" name="movement_nid[<%- comp_number-1 %>][<%- mov_number %>][]"> 
                    </div>
                    <input class="timer-timestamp hide" type="number" value="" name="timerStart[<%- comp_number-1 %>]">
                    <h5 style="text-align: center;"><strong><%= comp.mov_title[mov_number] %></strong> 
                    </h5>
                     <% if(comp.mov_video[mov_number] != null ) { %>
                           <i class="ion-ios-videocam mov-link" title="<%- comp.mov_video[mov_number] %>"> </i> 
                             <div class="video-frame<%- comp_number-1 %><%- mov_number %>"></div>
                             
                    <%  }%> 

                    <br>
                    <table class=workout-table>
                        <tr style="background: gray;color: white;">
                            <th><%- comp.mov_set_reps[mov_number][0].int_type %></th>
                          
                            <th><%- comp.mov_set_reps[mov_number][0].vol_type %></th>
                            <th>Actual <%- comp.mov_set_reps[mov_number][0].int_type %></th>
                        </tr>
                        <% _(comp.mov_set_reps[mov_number]).each(function(set,set_number) { %>
                        <% if(set.goal != '0' || set.target != '0' || set.load != '0') { %>    
                        <tr class="inner-set-number-<%-set_number+1 %>">
                            <td><input class="workout-cell" readonly type="number" value="<%- set.goal %>" name="goal[<%- comp_number-1 %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <td class="hide"><input class="workout-cell" readonly type="number" value="<%- set.target %>" name="target[<%- comp_number-1 %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <td><input class="workout-cell enter" onClick="selectText(this);" type="tel" value="<%- set.load %>" name="reps[<%- comp_number-1 %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <td><input class="workout-cell enter" onClick="selectText(this);" type="tel" value="<%- set.actual %>" name="actual[<%- comp_number-1 %>][<%- mov_number %>][<%- set_number %>][]"></td>

                            <td class="hide"><input type="text" value="<%- set.vol_type %>" name="vol_type[<%- comp_number-1 %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <td class="hide"><input type="text" value="<%- set.int_type %>" name="int_type[<%- comp_number-1 %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <% if(set.work_sets != null) { %>
                            <% _(set.work_sets).each(function(s,t) { %>
                            <% if(t == 'first') { %>
                            <% if(Number(s) <= Number(set_number) ) { %>
                            <td class="hide"><input type="text" value="1" name="worksets[<%- comp_number %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <% }else { %>
                            <td class="hide"><input type="text" value="0" name="worksets[<%- comp_number %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <%  }%>   
                            <% } %>
                            <% }); %>
                            <% }else { %>
                            <td class="hide"><input type="text" value="0" name="worksets[<%- comp_number %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <%  }%> 
                        </tr>
                        <% } %>
                        <% }); %>
                    </table>
                    <% }); %>
                </div>
            </div><!--end .accordion-section-content-->
        </div><!--end .accordion-section-->
        <% }); %>
    </div>
    <br>
    <div class="control-group">
        <label>Note for the coach</label>
        <textarea rows="4" cols="5" name="note_body" style="width: 100%;height: 45px;"></textarea>
    </div><br>
    <div class="hide">
        <input  type="text" value="<%= nid %>" name="nid">
        <input  type="text" value="<%= field_wo_athlete[0].uid %>" name="uid">
        <input  type="text" value="<%- field_wo_workout_title[0].value %>"  name="wo_title">
        <input  type="number" value="0"  class="wo_status" name="wo_status">
    </div>
    <br><br>
    <input class="btn btn-primary work-save" type="button" value="Save">&ensp;<input class="btn btn-success" type="submit" value="Finish"><br><br>
</form>

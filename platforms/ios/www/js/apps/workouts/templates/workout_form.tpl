
<form class="form-inputs">
    <h4 style="    text-align: center;"> <%- days.workout_title %> - <%- days.workout_day_view %></h4>
    <div class="form-error"></div>
    Strenght Level:<%- profile.major_lower %>.<%- profile.minor_lower %><br>
    Skills Level:<%- profile.major_upper  %>.<%- profile.minor_upper  %><br>
    <br>
  
    <div class="accordion">
        <% _(days.complex).each(function(comp, comp_number) { %>
         <div class="accordion-section">
            <a class="accordion-section-title" href="#accordion-<%= comp_number %>" style="text-align: center;"><%= comp.complex_name %></a>
             <input style="display:none;" readonly type="text" value="<%= comp.complex_name %>" name="complex_name[<%- comp_number %>][]">
                 <div id="accordion-<%= comp_number %>" class="accordion-section-content">
           
                <div class="workout-complex">
                    <input class="hide" type="textarea" readonly value="<%= comp.notes %>" name="notes[<%- comp_number %>][]">
                    <input class="hide" readonly type="text" value="<%= comp.timer %>" name="timer[<%- comp_number %>][]">
                    <label>Notes:<%= comp.notes %></label><br>
                    
                      <button id="start" class="btn btn-success start-set"><span class="ion-play"></span>Start</button>
                      <button id="stop" class="btn btn-danger stop-set" ><span class="ion-stop"></span> Stop</button>
                      <button id="reset" class="btn btn-default reset-set" ><span class="ion-ios-reload"> </span>Reset</button>
                      <br> <br>
                       Set:<span class="set-number">1</span>
                       <label>Timer:<span class="the-clock-<%-comp_number %>"><%= comp.timer %></span></label>  
                    <span class="hide org-the-clock-<%-comp_number %>"><%= comp.timer %></span>
                    <input type="number" class="hide" value="<%= comp.promote %>" name="promote[<%- comp_number %>][]">
                    <% _(comp.details).each(function(mov,mov_number) { %>
                    <div class="hide">
                        <input  type="text" value="<%- mov.weight_type %>" name="weight_type[<%- comp_number %>][<%- mov_number %>][]"> 
                        <input type="text" value="<%- mov.movement_ref %>" name="movement_nid[<%- comp_number %>][<%- mov_number %>][]"> 
                        <input type="text" value="<%- mov.movement_video %>" name="movement_video[<%- comp_number %>][<%- mov_number %>][]"> 
                    </div>
                    <h5 style="text-align: center;"><strong><%= mov.movement_title %></strong></h5><br>
                    <table class=workout-table>
                        <tr style="background: gray;color:white;"><th><%- mov.int_unit %></th><th>Target</th><th><%- mov.vol_unit %></th><th>Actual</th></tr>
                        <% _(mov.goal).each(function(set,set_number) { %>
                        <tr class="inner-set-number-<%-set_number %>">
                            <td><input class="workout-cell" readonly type="number" value="<%- mov.goal[set_number] %>" name="goal[<%- comp_number %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <td><input class="workout-cell" readonly type="number" value="<%- mov.target[set_number] %>" name="target[<%- comp_number %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <td><input class="workout-cell"  readonly type="number" value="<%- mov.load[set_number] %>" name="reps[<%- comp_number %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <td><input class="workout-cell" type="number" value="<%- mov.load[set_number] %>" name="actual[<%- comp_number %>][<%- mov_number %>][<%- set_number %>][]"></td>

                            <td class="hide"><input type="text" value="<%- mov.vol_unit %>" name="vol_type[<%- comp_number %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <td class="hide"><input type="text" value="<%- mov.int_unit %>" name="int_type[<%- comp_number %>][<%- mov_number %>][<%- set_number %>][]"></td>
                            <% if(mov.work_sets != null) { %>
                            <% _(mov.work_sets).each(function(s,t) { %>
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
        <textarea rows="4"  cols="5" name="note_body" style="width: 100%;"></textarea>
    </div><br>
    <div class="hide">
        <input  type="text" value="<%= nid %>" name="tid">
        <input  type="text" value="0" name="nid">
        <input  type="text" value="<%= profile.uid %>"  name="uid">
        <input  type="text" value="<%- days.workout_title %>"  name="wo_title">
        <input  type="text" value="<%- days.workout_day %>"  name="wo_type">
        <input  type="number" value="0"  class="wo_status" name="wo_status">
        <input  type="text" value="<%- days.day_number %>"  name="trac_day">
    </div>
    <br><br>
    <input class="btn btn-primary work-save" type="button" value="Save">&ensp;<input class="btn btn-success" type="submit" value="Finish"><br><br>
</form>
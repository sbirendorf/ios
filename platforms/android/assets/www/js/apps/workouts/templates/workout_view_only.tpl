<a href="#workouts"><i class="wo-back-btn ion-ios-arrow-back" style="float: right;margin-right: 21px;" title="Back"></i></a>
    <form class="form-inputs">
        <h4 style="text-align: center;"> <%- days.workout_title %> - <%- days.workout_day_view %></h4>
        <a href="#workout/create/<%- nid %>/<%- uid %>/<%- days.day_number %>">
            <i class="btn ion-play" style="    background: #52ce4a; width: 100%;" title="Log Workout"> Start The Workout</i>
        </a>
        <br><br>
        Strength Level: <%- profile.major_lower %>.<%- profile.minor_lower %><br>
        Skills Level: <%- profile.major_upper  %>.<%- profile.minor_upper  %><br>
        <br>
    <div class="accordion">
        <% _(days.complex).each(function(comp, comp_number) { %>
        <div class="accordion-section">
            <a class="accordion-section-title" href="#accordion-<%= comp_number %>" style="text-align: center;"><%= comp.complex_name %></a>
                <div id="accordion-<%= comp_number %>" class="accordion-section-content">
     
                <div class="workout-complex">
                    <label>Notes:<%= comp.notes %></label><br>
                    <label>Timer:<%= comp.timer %></label> 

                    <% _(comp.details).each(function(mov,mov_number) { %>
                

                    <h5 style="text-align: center;"><strong><%= mov.movement_title %></strong></h5>
                    <% if( mov.movement_video != null ) { %>
                           <i class="ion-ios-videocam mov-link" title="<%-  mov.movement_video %>"> </i> 
                           <div class="video-frame<%- comp_number-1 %><%- mov_number %>"></div>
                             
                    <%  }%> 
                    <br>
                    <table class=table workout-table>
                        <tr style="background: gray;color:white;">
                            <th><%- mov.int_unit %></th>
                          
                            <th><%- mov.vol_unit %></th>
                            <th>Actual <%- mov.int_unit %></th>
                        </tr>
                        <% _(mov.goal).each(function(set,set_number) { %>
                        <tr class="inner-set-number-<%-set_number %>">
                            <td class="workout-cell"><%- mov.goal[set_number] %></td>
                            <td class="workout-cell hide"><%- mov.target[set_number] %></td>
                            <td class="workout-cell"><%- mov.load[set_number] %></td>
                            <td class="workout-cell"><%- mov.target[set_number] %></td>
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
    </form>

<div class="col s12 workout-list">
                    <ul class="nav nav-pills wo-pill">
                          <li><a data-toggle="tab" href="#ath-info-tab">Completed</a></li>
                          <li class="active"><a data-toggle="tab" href="#ath-info-tab1">Available</a></li>
                          <li><a data-toggle="tab" href="#ath-info-tab2">Upcoming</a></li>
                    </ul>
                    
                    <a href="#workout/refresh"><i class="refresh ion-refresh" style="float: right;margin-right: 21px;" title="Refresh"></i></a>
                        <div class="tab-content">
                          <div id="ath-info-tab" class="tab-pane fade">
                              <table class="table">
						              <thead class="thead-inverse">
						                  <tr>
						                      <th>Workout</th>
						                      <th>Date</th>
						                   <!--   <th>Status</th>-->
						                      <th>Edit</th>
						                  </tr>
						              </thead>
						              <tbody>
						                <% _(data).each(function(e) { %>
							                 <% if(e.wo_status == 'Logged') { %>
									           	 <tr style="height: 48px;">
						                                <td><%- e.title %></td>
						                                <td><span class="nowrap"><%- e.wo_date %></span></td>
						                         <!--       <th><%- e.wo_status %></th> -->
						                                <td>
						                                <a href="#workout/<%- e.nid %>/edit" class="btn wo-log"><i class="ion-edit"></i></a>
						                                </td>
						                     	 </tr>
									         <% } %>
						                     
						                <% }); %>
						              </tbody>
						          </table>
                           
                          </div>
                          <div id="ath-info-tab1" class="tab-pane fade in active">
                           		 <table class="table">
						              <thead class="thead-inverse">
						                  <tr>
						                      <th>Workout</th>
						                      <th>View</th>
						                  </tr>
						              </thead>
						              <tbody>
						                <% _(data).each(function(e) { %>
							                 <% if(e.wo_status == 'trac' && e.best_match == true) { %>
									           	 <tr style="height: 48px;">
						                                <td><%- e.title %>- <%- e.workout_day %></td>
						                                <td><a href="#workout/view/<%- e.nid %>/<%- e.uid %>/<%- e.day %>"><i class="btn wo-log ion-eye" title="View Workout"></i></a></td>
						                     	 </tr>
									         <% } %>

									         <% if(e.wo_status == 'Ready' || e.wo_status == 'Inprogress') { %>
									           	 <tr style="height: 48px;">
									           	 	<% if(e.wo_status == 'Inprogress') { %>
						                                <td><%- e.title %>- <%- e.workout_day %> <i class="ion-ios-reload" style="padding-left: 5px;" title="Inprogress"></i></td>
									         		<% } else {%>
						                                <td><%- e.title %>- <%- e.workout_day %></td>
						                            <% }%>
						                                <td><a href="#workout/<%- e.nid %>/edit"><i class="btn wo-log ion-eye" title="View Workout"></i></a></td>
						                     	 </tr>
									         <% } %>
						                     
						                <% }); %>
						              </tbody>
						          </table>
                         
                          </div>
                          <div id="ath-info-tab2" class="tab-pane fade">
                             	<table class="table">
						              <thead class="thead-inverse">
						                  <tr>
						                      <th>Workout</th>
						                      <th>Date</th>
						                      <th>View</th>
						                  </tr>
						              </thead>
						              <tbody>
						                <% _(data).each(function(e) { %>
							                 <% if(e.wo_status == 'trac' && (e.best_match == null) || e.best_match == 'null' || e.best_match == false) { %>
									           	 <tr>
						                                <td><%- e.title %>- <%- e.workout_day %></td>
						                                <td> </td>
						                                <td>
							                                <a style="display: block; text-align: center;" class="btn wo-log ion-eye" href="#workout/view/<%- e.nid %>/<%- e.uid %>/<%- e.day %>"></a>
						                                </td>
						                     	 </tr>
									         <% } %>

									         <% if(e.wo_status == 'Temporary') { %>
									           	 <tr style="height: 48px;">
						                                <td><%- e.title %>- <%- e.workout_day %></td>
						                                <td class="nowrap">
						                                	<%- e.wo_date %>
						                                </td>
						                                <td><span class="wo-activate btn btn-warning" id="<%- e.nid %>">Activate</span></td>
						                     	 </tr>
									         <% } %>
						                     
						                <% }); %>
						              </tbody>
						          </table>
                           
                          </div>
                        </div>
</div>

<div class="animated fadeinup delay-1">
          <div class="container activity">
            <div class="vertical-line-spacer"></div>
            <h5 class="uppercase">Last Activities</h5>
            <div class="row">
              <div class="col s12">
               <% _(list).each(function(t,num) { %>
                    <div class="contact">
                        <% if(t.type == 'scan') { %>
                              <a href="#scan"> <img alt="" src="img/ScanIcon.png"></a>
                        <% }else if( t.type == 'balance'){ %>
                              <a href="#balance"> <img alt="" src="img/BalIcon.png"></a>
                        <% }else if(t.type == 'notification'){ %>
                               <span class="date"><%- num %><br></span>  <br>
                        <% }else if(t.type == 'landing' ){ %>
                              <a href="#landing"> <img alt="" src="img/BalIcon.png"></a>
                        <% }%>
                       
                        <div class="dot z-depth-1">
                        </div>
                        <% if(t.type == 'notification') { %>

                             <a href="#notifications" <span><%- t.value.field_no_note_body_value %></span> </a>
                              
                        <% }else { %>
                             <p>
                                 <a href="#<%- t.type %>"> New <%- t.type %> </a>
                            </p>
                            <span><%- t.date %></span>
                        <% } %>
                        
                  </div>
              <% }); %>
   
                
              </div>
            </div>
          </div>
        </div> 

       
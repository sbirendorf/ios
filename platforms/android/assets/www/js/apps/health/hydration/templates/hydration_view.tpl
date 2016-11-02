<h4>Hydration Recommendation</h4>
<br>
<div class="hydration-bottle">
    <ul>
     <% _(bottle.reverse()).each(function(key,q) { %>
           <% if(key == 1 ) { %>
             <li> <img src="img/wholebottle.gif" style="height: 65px; width: 30px;"></li>
           <% } else {%> 
             <li>    <img src="img/halfbottle.gif" style="height: 40px; width: 30px; margin-top: 25px;"></li>
            <% } %> 
     <% }); %>
     </ul><br>
     <h4><center><span style="color: #2c6aa3;font-weight: 800;font-size: 27px;"><%- volume %></span> Liters</center></h4>
</div>
<br>
<form>
<% _(sodium).each(function(key, q) { %>
    <% if(key == "Green" ) { %>
              <label>No exercise</label>
              <input type="button" style="float: right; width: 84px;" class="btn btn-success" value="Green">
              <br><br><br>
    <% }%> 
    <% if(key == "Yellow" ) { %>
            <label>Normal exercise</label>
            <input type="button" style="float: right; width: 84px;background: yellow; color: black;" class="btn" value="Yellow">
            <br><br><br>
    <% }%>
    <% if(key == "Orange" ) { %>
            <label>Normal exercise</label>
            <input type="button" style="float: right; width: 84px;background: orange;" class="btn" value="Orange">
            <br><br><br>
    <% }%>
    <% if(key == "Purple" ) { %>
            <label>Exercise in hot <br>weater/game</label>
            <input type="button" style="float: right;    background: purple;    width: 84px;" class="btn" value="Purple">
            <br><br><br>
    <% }%>
   
<% }); %>
<br><br><center><h4>Brought to you by</h4></center><img src="img/precision-hydration-logo.png" style="    margin-top: -34px;">
</form>


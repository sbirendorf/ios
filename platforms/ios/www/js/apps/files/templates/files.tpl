
 <br>
 <div class="table-responsive">

  <table class="table table-striped">
    <thead>
      <tr>
        <th>Team name</th>
        <th>Title</th>
        <th>Date</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
      <% _(data.data).each(function(value, key) { %>
       <tr> 
            <td><%- value.title %></td>
            <td><%- value.file_title %></td>
            <td><%- value.field_ev_date_value %></td>
             <td><a href="#"> <i class="ion-eye view-pdf" id="<%- value.file_location %>"></i> </a></td>
        </tr>
      <% }); %>
    </tbody>
  </table>
</div>

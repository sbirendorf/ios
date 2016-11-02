<form >
    <br>
    <h4>Recovery</h4>
    <div class="control-group">    
        <label class="control-label">
            Log Date:
                <input  style="margin-left: 7px;" name="date" required type="date" value="<%= date %>" class="js-datepicker"/>    
        </label>
    </div>
     <% _(data).each(function(key, q) { %>
          <p>
            <input type="checkbox" name="types[<%- key.id %>]" id="test<%- key.id %>" />
            <label for="test<%- key.id %>"><%- key.title %></label>
          </p>
     <% }); %>
<br>
    <input type="submit" class="btn btn-danger" value="Submit"><br><br>
  </form>
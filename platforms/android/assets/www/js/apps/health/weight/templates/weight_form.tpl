<form class='screen-form'>
    <div class="hide">
        <input name="uid" type="numeric" value="<%= uid %>" />
    </div>
    <br>
    <h4>Enter Weight</h4>
    <div class="form-error"></div>
    <br>
    <div class="control-group">
        <label class="control-label">
            Log Date:
                <input  style="margin-left: 7px;" name="date" required type="date" value="<%= date %>" class="js-datepicker"/>
           <br> 
           Log Time:    
                <input  style="margin-left: 7px;" name="time" required type="time" value="<%= time %>" class="js-timepicker"/>        
        </label>
    </div>

	
      <div class="control-group">
          <label>Enter Body Weight:</label>
          <input  name="weight" required type="number" value=""/>      
      </div>
      <div class="control-group">
          <label>Enter Body Fat %:</label>
          <input  name="fat" type="number" value=""/>      
      </div>

<br><br>
<input type="submit" class="btn btn-danger" value="Submit"><br><br>
</form>
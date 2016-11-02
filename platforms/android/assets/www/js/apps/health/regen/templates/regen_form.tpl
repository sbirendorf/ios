<form class='regen-form'>
    <div class="hide">
        <input name="uid" type="numeric" value="<%= uid %>" />
    </div>
    <br>
    <h4>Create Regen</h4>
    <div class="form-error"></div>
    <br>


    <div class="control-group">
        <label for="pre-season" class="control-label">
            Log Date:
             <input name="date" required type="date" value="<%= today %>" class="js-datepicker"/>
        </label>
    </div>
     <div class="control-group">
        <label for="Prevent" class="control-label">
            Soft Tissue Care:
            
            <br><label class="option" for="Release-Upper" style="display: flex;">
                <input type="checkbox" id="toggle-1" name="prevent_upper" checked data-toggle="toggle" data-on="Yes" data-off="No" data-onstyle="success" data-offstyle="danger">
                  <img id="img-upper" style="    margin-left: 10px;height: 36px;width: 36px;" src="img/icon_upper.png" title="Roll Upper 10 minutes">Upper</label>
            <br><label class="option" for="Release-Lower" style="display: flex;">
                 <input type="checkbox" id="toggle-2" name="prevent_lower" checked data-toggle="toggle" data-on="Yes" data-off="No" data-onstyle="success" data-offstyle="danger">
                 <img id="img-lower" style="    margin-left: 10px;height: 36px;width: 36px;" src="img/icon_regen_lowerbody.png" title="Roll Lower 10 minutes">Lower</label>
            <br><label class="option" for="Activate" style="display: flex;">
                 <input type="checkbox" id="toggle-3" name="prevent_activate" checked data-toggle="toggle" data-on="Yes" data-off="No" data-onstyle="success" data-offstyle="danger">
                 <img id="img-activate" style="    margin-left: 10px;height: 36px;width: 36px;" src="img/icon_regen_activate.png" title=" Activate - Knee-up hold, Side bridge, Wall-slide">Activate</label>
                <br><label class="option" for="Stretch" style="display: flex;">
                <input type="checkbox" id="toggle-4" name="prevent_stretch" checked data-toggle="toggle" data-on="Yes" data-off="No" data-onstyle="success" data-offstyle="danger">
                 <img id="img-stretch" style="    margin-left: 10px;height: 36px;width: 36px;" src="img/icon_regen_stretch.png" title="Stretch - Heel press, Rotational lunge, Heel sit rotation">Stretch</label>
        </label>
    </div>
      <div class="control-group">
          <label>Sleep:</label>
            <select name="sleep" class="browser-default">
                <option value="4">4 hrs</option>
                <option value="4.5">4.5 hrs</option>
                <option value="5">5 hrs</option>
                <option value="5.5">5.5 hrs</option>
                <option value="5">6 hrs</option>
                <option value="6.5">6.5 hrs</option>
                <option value="7">7 hrs</option>
                <option value="7.5">7.5 hrs</option>
                <option value="8">8 hrs</option>
                <option value="8.5">8.5 hrs</option>
                <option value="9">9 hrs</option>
                <option value="9.5">9.5 hrs</option>
                <option value="10">10 hrs</option>
                <option value="10.5">10.5 hrs</option>
                <option value="11">11 hrs</option>
                <option value="11.5">11.5 hrs</option>
                <option value="12">12 hrs</option>  
         </select>
    </div>
     <div class="control-group">
            <label>Servings of Protein (g - grams):</label>
             <select name="protein" class="browser-default">
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="75">75</option>
                <option value="100" selected="selected" >100</option>
                <option value="125">125</option>
                <option value="150">150</option>
                <option value="175">175</option>
                <option value="200">200</option>
                <option value="225">225</option>
                <option value="250">250</option>
                <option value="275">275</option>
                <option value="300">300</option>
                <option value="225">325</option>
                <option value="250">350</option>
                <option value="275">375</option>
                <option value="300">400</option>
         </select>
         </div>
    </div>
     <div class="control-group">
            <label> Servings of Vegetables:</label>
            <select name="veg" class="browser-default">
                <option value="1">1</option>
                <option value="2">2</option>  
                <option value="3">3</option> 
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
         </select>
    </div>
     <div class="control-group">
            <label > Servings of Water (liters):</label>
                <select name="water" class="browser-default">
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>  
                <option value="2.5">2.5</option>  
                <option value="3">3</option> 
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
                <option value="5.5">5.5</option>
                <option value="6">6</option>
                <option value="6.5">6.5</option>
                <option value="7">7</option>
                <option value="7.5">7.5</option>
                <option value="8">8</option>
                <option value="8.5">8.5</option>
                <option value="9">9</option>
                <option value="9.5">9.5</option>
                <option value="10">10</option>
         </select>
    </div>
    


<br><br>
<input type="submit" class="btn btn-danger" value="Submit"><br><br>
</form>
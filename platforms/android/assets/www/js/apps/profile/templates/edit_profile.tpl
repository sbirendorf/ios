
<div class="container">
    <div class="h-banner animated fadeindown">
        <h3 class="ath-title">Account Settings</h3>
        <div class="parallax bg-9">
            <div class="profile-userpic">
                <img src="<%= filePicture %>" class="img-responsive" style="" alt="athlete-image">
            </div>
            <a href="#<%- info.nid %>/user_edit" style="margin-top: 197px;margin-left: 23%; z-index: 151; position: absolute;"
                class="js-upload"><i class="ion-camera" title="Edit Picture"></i></a>

            </div>
        </div>

    </div>
    <div class="row" style="margin-right: 0px; margin-left: 5px;margin-top: 35px;">
        
        <form class="form-inputs">
            <div class="hide">
                <input name="nid" type="numeric" value="<%= info.nid %>" />
                <input name="uid" type="numeric" value="<%= info.uid %>" />
            </div>
            <div class="profile-usertitle">
                <label for="edit-title">User Name: *
                    <input type="text" maxlength="255" name="username" id="edit-username" size="60" value="<%- info.username %>" required placeholder=""   />
                </label>
                <div class="clearfix"></div>
                <label for="edit-title">Name: *
                    <input type="text" maxlength="255" name="name" id="edit-name" size="60" value="<%- info.name %>"  required placeholder=""  />
                </label> 
                <div class="clearfix"></div>
                <label for="edit-title">Email: *
                    <input type="email" maxlength="255" name="email" id="edit-email" size="60" value="<%- info.mail %>" required placeholder=""  />
                </label>
                <div class="clearfix"></div>
                <label for="edit-title">Mobile Phone:
                    <input type="number"  maxlength="255" name="cellPhone" id="edit-cell-phone" size="60" value="<%- info.cellPhone %>"  />
                </label>
                <div class="clearfix"></div>
                <label for="edit-title">Password:
                    <input type="password" maxlength="255" name="password" id="password" size="60" value="<%- info.password %>"  />
                </label>
                <div class="clearfix"></div>
                <label for="edit-title">Confirm Password:
                    <input type="password" maxlength="255" name="password_confirm" id="confirm_password" size="60" value="<%- info.password %>"  />
                </label>
                <div class="clearfix"></div>
                <h5>Change Sport Position</h5>
                <br>
                <label>Sport:</label>
                <select name="sport" class="browser-default" id="sport" required>
                    <option value="Other">Other</option>
                    <% _(info.sport.sports).each(function(a) { %>
                    <option value="<%= a%>"<% if(info.sport.value == a) { %> selected <% } %><%= a %>><%= a %></option>
                    <% }); %>
                </select>


                <label>Position:</label>       
                <select name="position" class="browser-default" id="position" required>
                    <option value="Other">Other</option>
                    <% _(info.position.positions).each(function(a) { %>
                    <option value="<%= a%>"<% if(info.position.value == a) { %> selected <% } %><%= a %>><%= a %></option>
                    <% }); %>
                </select>

                <label>Sub Position:</label>       
                <select name="sub_position" class="browser-default" id="sub_position" required>
                    <option value="Other">Other</option>
                    <% _(info.subPosition.subPositions).each(function(a) { %>
                    <option value="<%= a%>"<% if(info.subPosition.value == a) { %> selected <% } %><%= a %>><%= a %></option>
                    <% }); %>
                </select>
                <br>
                <label for="edit-title">Date Of Birth: </label>
                <input type="date" class="js-datepicker" maxlength="255" name="dateOfBirth" id="edit-date-of-birth" size="60" value="<%- info.dateOfBirth %>" placeholder=""  /><br>
                <label>Gender:</label>
                <select id="gender" readonly name="gender" class="browser-default" required placeholder="" >
                    <option value="<%- info.gender %>"><%- info.gender %></option>
                </select>

                <br><label>Level:</label>
                <select id="level" name="level" class="browser-default" required>
                    <option value="none">Select Athlete Level</option>
                    <option value="High School" <% if(info.level == 'High School') { %> selected <% } %>>High School</option>
                    <option value="College" <% if(info.level == 'College') { %> selected <% } %>>College</option>
                    <option value="Pro/Olympic" <% if(info.level == 'Pro/Olympic') { %> selected <% } %>>Pro/Olympic</option>
                    <option value="Pro" <% if(info.level == 'Pro') { %> selected <% } %>>Pro</option>
                    <option value="Unavail" <% if(info.level == 'Unavail') { %> selected <% } %>>Unavail</option>
                </select>


                <br>
                <label>Hide my name in leaderboards:</label>
                <select name="privacy" class="browser-default" required>
                    <option value="0">No</option>
                    <option value="1" <%  if(info.privacy == 1) { %> selected <% } %>>Yes</option>
                </select>


            </div>
            <br><input class="btn btn-danger" type="submit" value="Save"><br>
        </form>
    </div>


<li>
    <div class="sidenav-header primary-color">

        <div class="nav-avatar">
            <img class="circle avatar" src="<%- img %>" alt="">
            <div class="avatar-body">
                <h3><%- name %></h3>
            </div>
        </div>
    </div>
</li>
<li><a href="#home" class="no-child"><i class="ion-android-home"></i>Home</a></li>
<!--<li><a href="#profile/edit" class="no-child"><i class="ion-person"></i>Account Settings</a></li>-->
 <% if(site != '') { %> <li>
 <a  href="#booknow"
	 class="no-child"><i class="ion-ios-calendar-outline"></i>Book Now,<%- credit_msg %></a></li>
	 <% }  %> 
<li><a href="#workouts" class="no-child"><i class="ion-clipboard"></i>Workouts</a></li>
<li><a href="#scan" class="no-child"><i class="ion-podium"></i>Movement Signature</a></li>
<li><a href="#balance" class="no-child"><i class="ion-ios-body"></i> Balance</a></li>
<li><a href="#landing" class="no-child"><i class="ion-ios-body"></i>Landing</a></li>
<li><a href="#enter/weight" class="no-child"><i class="ion-android-create"></i>Weight</a></li>
<!--<li><a href="#enter/regen" class="no-child"><i class="ion-android-create"></i>Regen</a></li>
<li><a href="#enter/wellness" class="no-child"><i class="ion-android-create"></i>Wellness</a></li>
<li><a href="#enter/rpe" class="no-child"><i class="ion-android-create"></i>R.P.E</a></li>-->
<li><a href="#hydration" class="no-child"><i class="ion-waterdrop"></i>Hydration</a></li>
<li><a href="#recovery" class="no-child"><i class="ion-battery-charging"></i>Recovery</a></li>
<li><a href="#charts" class="no-child"><i class="ion-android-map"></i>Charts</a></li>
<!--<li><a href="#notifications" class="no-child"><i class="ion-android-notifications"></i>Notifications</a></li>-->
<li><a href="#file/list" class="no-child"><i class="ion-paperclip"></i>Attachments</a></li>
<li><a href="#about" class="no-child"><i class="ion-information-circled"></i>About</a></li>
<!-- <li><a href="#more" class="no-child"><i class="ion-paperclip"></i>More</a></li>-->
<li><a href="#logout" class="no-child"><i class="ion-log-out"></i>Logout</a></li>

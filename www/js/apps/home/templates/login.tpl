<form class="login-page">
    <div class="login-form animated fadeinup delay-2 z-depth-1">

        <h1>Login</h1>
        <div class="input-field">
            <i class="ion-android-cloud prefix"></i> 
            <input class="validate" name="url" id="login" value="<%- url %>" type="text"> 
            <label for="login">URL</label>
            <span>No Https require , example: misparta.spartascience.com</span>
        </div>
        <br>
        <div class="input-field">
            <i class="ion-android-contact prefix"></i> 
            <input class="validate" name="user" value="<%- userlog %>" id="login" type="text"> 
            <label for="login">Username</label>
        </div>

        <div class="input-field" style="margin-bottom:20px;">
            <i class="ion-android-lock prefix"></i> 
            <input class="validate" name="pw" id="login-psw" type="password"> 
            <label for="login-psw">Password</label>
        </div>

        <a class="waves-effect waves-light btn-large accent-color width-100 m-b-20 animated bouncein delay-4 sp-login" href="">Login</a> 
      <!--   <span>Don't have an account? <a class="primary-text" href="#signup">Sign Up</a></span> -->
        Version <div class="version"><%= version %></div>
    </div><!-- End of Main Contents -->
</form>
<center><img src="img/preloader.gif" style=" width: 30px;height: 30px;margin-top: 150px;"></center>
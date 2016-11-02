  <!-- Page Content -->
      <div id="content" class="light-grey" style="margin-top: -8px;">

        <!-- Hero Header -->
        <div class="h-banner animated fadeindown">
        <h3 class="ath-title"><%= name %></h3>
          <div class="parallax">
                <br><div class="card animated fadeinup delay-3">
                    <div class="legend">
                        <h5 class="uppercase center">Movement Signature</h5>
                        <p class="center"><span class="data-color" style="background: rgb(156,145,146);"></span>Load
                           <span class="data-color" style="background: #000;"></span>Explode
                           <span class="data-color" style="background: rgb(184,51,67);"></span>Drive</p>
                    </div>

                    <div class="barChartCont">
                        <canvas id="barChart"></canvas>
                    </div>
                </div>
          </div>
         </div>
         <br><br><br>
          <div class="home-needs center">
             <span class="tag tag-default load"><%- load.toFixed(0) %></span>
             <span class="tag tag-default explode"><%- explode.toFixed(0) %></span> 
             <span class="tag tag-default drive"><%- drive.toFixed(0) %></span> 

          </div>
        <!-- Profile Content -->
        <div class="animated fadeinup delay-1">
          
          <div class="card m-t-40 animated fadeinup delay-2">
            <a href="#workouts">
                <div class="c-widget">
                  <div class="c-widget-figure primary-color">
                    <i class="ion-clipboard"></i>
                  </div>
                  <div class="c-widget-body">
                    <p class="m-0" style="font-size: 24px;font-weight: 500;padding-left: 31px;">Workouts</p>
                  </div>
                </div>
            </a>
          </div>
          <div class="center">
            <a href="#enter/rpe" style="width: 26%;" class="btn btn-primary">R.P.E</a>
            <a href="#enter/wellness" style="width: 26%;" class="btn btn-secondary">Wellness</a>
            <a href="#enter/regen" style="width: 26%;" class="btn btn-success">Regen</a>
          </div>


          <div class="card animated fadeinright delay-4">
            <h5 class="uppercase center">Athlete Information</h5>
            <p class="flow-text">
              <% if(inj == false) { %>
                        <!-- <div class="chip" style="border-radius: 8px; background:#92d050;"> FULL PARTICIPATION </div> -->
                     <% } else {%>
                      <div class="chip" style="border-radius: 8px;background:<%= inj.the_color %>; text-transform: uppercase;"> <%= inj.status %> </div>
                     <% } %>
            <h6>Position: <%= position %></h6>
            <h6>Strength Level: <%= level_low %></h6>
            <h6>Skill Level: <%= level_up %></h6>
            </p>
          </div>

        </div> 
      
         
      </div> <!-- End of Page Content -->
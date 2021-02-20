<template>
<div>
    <!-- navigation -->
    <div style="height: 80px">
    <nav class="navbar  fixed-top navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 rounded" >
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style="margin-left: 10%; margin-right: 10%; margin-bottom: 10px">
            <a class="navbar-brand" href="/rent/customer/index">APARTMENT SERVICES</a>
            <ul class="navbar-nav mr-auto navbar-right">
                <li class="nav-item">
                    <a class="nav-link" href="/rent/customer/locations">LOCATIONS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/rent/customer/about">ABOUT US</a>
                </li>
            </ul>
            <button type="button" class="btn btn-outline-secondary my-2 my-sm-0" data-toggle="modal" data-target="#loginModal">
                RESIDENCE
            </button>
        </div>
    </nav>
  </div>

  <!-- login Modal -->
    <div  class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                
                <div class="modal-header">
                    <h5 class="modal-title">RESIDENCE</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                
                <div class="modal-body" style="margin-left: 30px;margin-right: 30px">
                    <p>Welcome to our communities</p>
                </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" ><a style="color: black" href="/rent/residence/signup">SIGN UP</a></button>
                    <button type="button" class="btn btn-primary" ><a style="color: black" href="/rent/residence/login">LOG IN</a></button>
                </div>

            </div>
        </div>
    </div>

</div>
</template>
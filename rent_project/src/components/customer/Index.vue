<template>
  <div>
    <Header/>

    <!-- carousel slides -->
    <div style="height:900px">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="margin-left: 150px; margin-right: 150px">
          <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="@/assets/images/customer/index/slides01.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="@/assets/images/customer/index/slides02.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                  <img src="@/assets/images/customer/index/slides03.png" class="d-block w-100" alt="...">
              </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </a>
      </div>
    </div>  

    <!-- locations jumbotron -->
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4"><a href="/rent/customer/locations" style="color:black">OUR LOCATIONS</a></h1>
        <p class="lead">Our communities are located in Orange County and San Diego County</p>
    </div>
    </div>

    <!-- locations - san diego -->
    <div style="margin-left: 15%">
      <div class="card mb-3" style="max-width: 700px">
        <div class="row no-gutters">
            <div class="col-md-4">
              <!-- need address href -->
                <a href="#"><img src="@/assets/images/customer/locations/sandiego.png" class="card-img" alt="..."></a>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">San Diego County</h5>
                    <p class="card-text">Idyllic sun-to-sand landscapes, globally-ranked universities, and many of California's
                        best entertainment, shopping, and dining experiences are just beyond your door when you live
                        forward in a San Diego apartment community.</p>
                </div>
            </div>
        </div>
    </div>
    </div>

    <!-- locations - orange -->
    <div style="margin-left: 40%">
    <div class="card mb-3" style="max-width: 700px">
        <div class="row no-gutters">
            <div class="col-md-4">
              <!-- need address href -->
                <a href="#"><img src="@/assets/images/customer/locations/orange.png" class="card-img" alt="..."></a>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Orange County</h5>
                    <p class="card-text">Our Orange County apartment communities offer residents a lifestyle that has it all.
                        Enjoy upscale shopping, dining, and cultural experiences plus top schools, innovative workplaces,
                        and America's most beautiful beaches just beyond your door.</p>
                </div>
            </div>
        </div>
    </div>
    </div>

    <!-- what we deliver jumbotron -->
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
        <h1 class="display-4">WHAT WE DELIVER</h1>
        <p class="lead">Love the places where you live</p>
    </div>
    </div>

    <Footer/>

  </div>
</template>

<script>
import Header from '@/components/public/Header'
import Footer from '@/components/public/Footer'

export default {
  name:'Customer_Index',
  components:{
    //import Header
    Header,
    Footer,
  }
}
</script>
<template>
  <div>
    <Header />
    <ApartmentNav/>
    <!-- carousel slides -->
    <div style="height: 850px">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
        style="margin-left: 15%; margin-right: 15%"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="@/assets/images/customer/la-jolla-palms/slides01.png"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>

          <div class="carousel-item">
            <img
              src="@/assets/images/customer/la-jolla-palms/slides02.png"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <!--jumbotron description-->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">La Jolla Palms</h1>
        <p class="lead">3535 LEBON DR, STE. 1000 SAN DIEGO CA</p>
        <h3 class="display-6">Starting at $2160</h3>
        <p class="lead">1-2 Beds/1-2 Baths</p>
      </div>
    </div>

    <!--jumbotron floor plans-->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">Floor Plans</h1>
        <a href="/rent/customer/locations/san-diego/la-jolla-palms/availability"
          ><el-button type="info" plain>View Availability</el-button></a
        >
      </div>
    </div>

    <!-- floorplan list -->
    <div style="margin-left: 10%; margin-right: 10%">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">PLAN</th>
            <th scope="col">BED/BATH</th>
            <th scope="col">SQ FT</th>
            <th scope="col">STARTING PRICE</th>
            <th scope="col">FLOORPLAN</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in result" :key="item.floorplan_id">
            <th scope="row">
              Plan {{ item.floorplan_id }} - {{ item.floorplan_name }}
            </th>
            <td>{{ item.num_beds }}/{{ item.num_baths }}</td>
            <td>{{ item.area }}</td>
            <td>${{ item.starting_price }}</td>
            <td>Floor Plan</td>
          </tr>
        </tbody>
      </table>
    </div>

    <Footer />
  </div>
</template>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import ApartmentNav from "@/components/public/ApartmentNav";
import axios from "axios";

export default {
  name: "La-Jolla-Palms",

  components: {
    Header,
    Footer,
    ApartmentNav
  },

  data() {
    return {
      result: {},
    };
  },

  mounted() {
    axios
      .get("/api/customer/floorplanList/1/")
      .then((response) => {
        this.result = response.data;
        console.log(this.result);
      })
      .catch((error) => {
        alert(error);
      });
  },
};
</script>
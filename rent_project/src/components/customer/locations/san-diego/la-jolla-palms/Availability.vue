<template>
  <div>
    <Header />
    <ApartmentNav />

    <!-- carousel slides -->
    <div style="height: 800px">
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
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="@/assets/images/customer/la-jolla-palms/map.png"
              class="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>

    <!--jumbotron check availability-->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">Check Availability</h1>
        <h3 class="display-6">At La Jolla Palms</h3>
      </div>
    </div>

    <!-- available apartments list -->
    <div style="margin-left:10%; margin-right:10%">
      <el-table :data="result" style="width: 100%">
        
        <el-table-column label="PLAN" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p><strong>BED/BATH:</strong> {{ scope.row.num_beds }}/{{ scope.row.num_baths }}</p>
              <p><strong>SQ FT: </strong> {{ scope.row.area }} </p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="large">PLAN {{ scope.row.floorplan_num }}-{{ scope.row.floorplan_name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column label="APARTMENT">
          <template slot-scope="scope">
            <span> {{ scope.row.apt_num }}</span>
          </template>
        </el-table-column>

        <el-table-column label="FLOOR" >
          <template slot-scope="scope">
            <span> {{ scope.row.apt_floor }}</span>
          </template>
        </el-table-column>

        <el-table-column label="TERM" >
          <template slot-scope="scope">
            <span> {{ scope.row.apt_lease_term }} MO.</span>
          </template>
        </el-table-column>

        <el-table-column label="PRICE" >
          <template slot-scope="scope">
            <span> $ {{ scope.row.apt_price }}</span>
          </template>
        </el-table-column>

        <el-table-column label="AVAILABLE" >
          <template slot-scope="scope">
            <span> {{ scope.row.apt_available_date }}</span>
          </template>
        </el-table-column>

        <el-table-column label="DEPOSIT">
          <template slot-scope="scope">
            <span> $ {{ scope.row.apt_deposit }}</span>
          </template>
        </el-table-column>

        
      </el-table>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import ApartmentNav from "@/components/public/ApartmentNav";
import axios from "axios";

export default {
  name: "La-Jolla-Palms_Availability",

  components: {
    Header,
    Footer,
    ApartmentNav,
  },

  data() {
    return {
      result: {},
    };
  },

  mounted() {
    axios
      .get("/api/customer/checkAvailability/1/1")
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
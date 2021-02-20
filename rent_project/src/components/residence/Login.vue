<template>
  <div>
    <Header />

    <!-- jumbotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Welcome to our communities.</h1>
      </div>
    </div>

    <!-- login form  -->
    <div id="login" style="margin-left: 35%; margin-right: 35%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="demo-ruleForm"
      >
        <div style="margin-bottom: 30px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span><strong>LOGIN</strong></span>
            </div>
            <div class="text item">
              <el-form-item label="USERNAME" prop="customer_username">
                <el-input
                  v-model="ruleForm.customer_username"
                  placeholder="USERNAME"
                  style="width: 80%"
                ></el-input>
              </el-form-item>

              <el-form-item label="PASSWORD" prop="customer_password">
                <el-input
                  v-model="ruleForm.customer_password"
                  type="password"
                  placeholder="PASSWORD"
                  style="width: 80%"
                ></el-input>
              </el-form-item>
            </div>
          </el-card>
        </div>

        <el-form-item>
          <el-button type="secondary" @click="resetForm('ruleForm')"
            >RESET</el-button
          >
          <el-button type="success" @click="submitForm('ruleForm')"
            >SUBMIT</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";
import axios from "axios"

export default {
  name: "Residence_Login",

  components: {
    Header,
    Footer,
  },

  data() {
    return {
      ruleForm: {
        customer_username: "",
        customer_password: "",
      },
      rules: {
        customer_username: [
          {
            required: true,
            message: "Please enter your username",
            trigger: "blur",
          }
        ],
        customer_password: [
          {
            required: true,
            message: "Please enter your password",
            trigger: "blur",
          }
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios
            .post("/api/residence/login", this.ruleForm)
            .then((res) => {
              if (res.data.status) {
                window.location.href = "dashboard";
              } else {
                this.$message.error(res.data.message);
              }
            })
            .catch((error) => {
              console.info(error);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<template>
  <div>
    <Header />

    <!-- jumbotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">SIGN UP</h1>
        <p class="lead">Welcome to our communities.</p>
      </div>
    </div>

    <!-- signup form -->
    <div id="app" style="margin-left: 30%; margin-right: 30%">
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
              <span>LOGIN INFORMATION</span>
            </div>
            <div class="text item">
              <el-form-item label="USERNAME" prop="customer_username">
                <el-input
                  v-model="ruleForm.customer_username"
                  placeholder="USERNAME"
                  style="width: 50%"
                ></el-input>
              </el-form-item>

              <el-form-item label="PASSWORD" prop="customer_password">
                <el-input
                  v-model="ruleForm.customer_password"
                  placeholder="PASSWORD"
                  style="width: 50%"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="RE-ENTER PASSWORD"
                prop="customer_confirmPassword"
              >
                <el-input
                  v-model="ruleForm.customer_confirmPassword"
                  placeholder="RE-ENTER PASSWORD"
                  style="width: 50%"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="SECURITY QUESTION 1"
                prop="customer_security1"
              >
                <el-select
                  v-model="ruleForm.customer_security1"
                  placeholder="PLEASE SELECT SECURITY QUESTION"
                  style="width: 100%"
                >
                  <el-option
                    label="What is your first pet name?"
                    value="What is your first pet name?"
                  ></el-option>
                  <el-option
                    label="What is your high school name?"
                    value="What is your high school name?"
                  ></el-option>
                  <el-option
                    label="What is your father's first name?"
                    value="What is your father's first name?"
                  ></el-option>
                  <el-option
                    label="What is your favorite food?"
                    value="What is your favorite food?"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="ANSWER" prop="customer_security1_ans">
                <el-input
                  v-model="ruleForm.customer_security1_ans"
                  placeholder="ENTER YOUR ANSWER"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="SECURITY QUESTION 2"
                prop="customer_security2"
              >
                <el-select
                  v-model="ruleForm.customer_security2"
                  placeholder="PLEASE SELECT SECURITY QUESTION"
                  style="width: 100%"
                >
                  <el-option
                    label="What is your first pet name?"
                    value="What is your first pet name?"
                  ></el-option>
                  <el-option
                    label="What is your high school name?"
                    value="What is your high school name?"
                  ></el-option>
                  <el-option
                    label="What is your father's first name?"
                    value="What is your father's first name?"
                  ></el-option>
                  <el-option
                    label="What is your favorite food?"
                    value="What is your favorite food?"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="ANSWER" prop="customer_security2_ans">
                <el-input
                  v-model="ruleForm.customer_security2_ans"
                  placeholder="ENTER YOUR ANSWER"
                ></el-input>
              </el-form-item>
            </div>
          </el-card>
        </div>

        <div style="margin-bottom: 30px">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>CONTACT INFORMATION</span>
            </div>
            <div class="text item">
              <el-form-item label="FIRST NAME" prop="customer_firstname">
                <el-input
                  v-model="ruleForm.customer_firstname"
                  placeholder="ENTER FIRST NAME"
                  style="width: 50%"
                ></el-input>
              </el-form-item>

              <el-form-item label="LAST NAME" prop="customer_lastname">
                <el-input
                  v-model="ruleForm.customer_lastname"
                  placeholder="ENTER LAST NAME"
                  style="width: 50%"
                ></el-input>
              </el-form-item>

              <el-form-item label="GENDER" prop="customer_gender">
                <el-select
                  v-model="ruleForm.customer_gender"
                  placeholder="SELECT GENDER"
                  style="width: 50%"
                >
                  <el-option label="Gender" value=""></el-option>
                  <el-option label="Male" value="male"></el-option>
                  <el-option label="Female" value="Female"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="DOB" prop="customer_birth">
                <el-date-picker
                  type="date"
                  placeholder="SELECT DATE OF BIRTH"
                  v-model="ruleForm.customer_birth"
                  style="width: 50%"
                ></el-date-picker>
              </el-form-item>

              <el-form-item label="ADDRESS" prop="customer_address">
                <el-input
                  v-model="ruleForm.customer_address"
                  placeholder="ENTER ADDRESS"
                ></el-input>
              </el-form-item>

              <el-form-item label="E-MAIL" prop="customer_email">
                <el-input
                  v-model="ruleForm.customer_email"
                  placeholder="ENTER EMAIL ADDRESS"
                  style="width: 50%"
                ></el-input>
              </el-form-item>

              <el-form-item label="PHONE" prop="customer_phone">
                <el-input
                  v-model="ruleForm.customer_phone"
                  placeholder="ENTER PHONE NUMBER"
                  style="width: 50%"
                ></el-input>
              </el-form-item>

              <el-form-item label="MARITAL" prop="customer_marital">
                <el-select
                  v-model="ruleForm.customer_marital"
                  placeholder="SELECT MARITAL STATUS"
                  style="width: 50%"
                >
                  <el-option
                    label="Marital Status"
                    value="Marital Status"
                  ></el-option>
                  <el-option label="Single" value="Single"></el-option>
                  <el-option label="Married" value="Married"></el-option>
                  <el-option label="Divorced" value="Divorced"></el-option>
                  <el-option label="Separated" value="Separated"></el-option>
                  <el-option label="Widowed" value="Widowed"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="INCOME" prop="customer_income">
                <el-input
                  v-model="ruleForm.customer_income"
                  style="width: 50%"
                  placeholder="ENTER INCOME PER YEAR"
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

export default {
  name: "Residence_Signup",

  components: {
    Header,
    Footer,
  },
  data() {
    let confirm_pass = (rule, value, callback) => {
      if (value !== this.ruleForm.customer_password) {
        callback(new Error("password does not match"));
      } else {
        callback();
      }
    };
    let check_username = (rule, value, callback) => {
      axios
        .post("/signup/checkUser", value)
        .then(function (res) {
          if (!res.data.status) {
            callback(new Error("Username exists"));
          }
        })
        .catch(function (error) {
          console.info(error);
        });
    };

    return {
      ruleForm: {
        customer_username: "",
        customer_password: "",
        customer_confirmPassword: "",
        customer_security1: "",
        customer_security1_ans: "",
        customer_security2: "",
        customer_security2_ans: "",
        customer_firstname: "",
        customer_lastname: "",
        customer_gender: "",
        customer_birth: "",
        customer_address: "",
        customer_email: "",
        customer_phone: "",
        customer_marital: "",
        customer_income: "",
      },
      rules: {
        customer_username: [
          {
            required: true,
            message: "Please enter valid username",
            trigger: "blur",
          },
          {
            min: 4,
            message: "Username has to be minimum of 4 characters",
            trigger: "blur",
          },
          {
            required: true,
            validator: check_username,
            message: "Username exists, please log in directly",
            trigger: "blur",
          },
        ],
        customer_password: [
          {
            required: true,
            message: "Please enter valid password",
            trigger: "blur",
          },
          {
            min: 6,
            message: "Password has to be minimum of 6 characters",
            trigger: "blur",
          },
        ],
        customer_confirmPassword: [
          {
            required: true,
            message: "Please confirm your password",
            trigger: "blur",
          },
          {
            required: true,
            validator: confirm_pass,
            message: "Password does not match",
            trigger: "blur",
          },
        ],

        customer_security1: [
          {
            required: true,
            message: "Please select security question",
            trigger: "blur",
          },
        ],
        customer_security1_ans: [
          {
            required: true,
            message: "Please enter your answer to security question 1",
            trigger: "blur",
          },
        ],
        customer_security2: [
          {
            required: true,
            message: "Please select security question",
            trigger: "blur",
          },
        ],
        customer_security2_ans: [
          {
            required: true,
            message: "Please enter your answer to security question 2",
            trigger: "blur",
          },
        ],

        customer_firstname: [
          {
            required: true,
            message: "Please enter your first name",
            trigger: "blur",
          },
        ],
        customer_lastname: [
          {
            required: true,
            message: "Please enter your last name",
            trigger: "blur",
          },
        ],

        customer_birth: [
          {
            type: "date",
            required: true,
            message: "Please enter your date of birth",
            trigger: "blur",
          },
        ],
        customer_address: [
          {
            required: true,
            message: "Please enter your address",
            trigger: "blur",
          },
        ],
        customer_email: [
          {
            required: true,
            message: "Please enter your email address",
            trigger: "blur",
          },
        ],
        customer_phone: [
          {
            required: true,
            message: "Please enter you phone number",
            trigger: "blur",
          },
          {
            min: 10,
            max: 10,
            message: "Phone number has to be length of 10",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios
            .post("/signup/submitForm", this.ruleForm)
            .then(function (res) {
              if (res.data.status) {
                window.location.href = "/residence/toLogin";
              } else {
                Vue.prototype.$message.error(res.data.message);
              }
            })
            .catch(function (error) {
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
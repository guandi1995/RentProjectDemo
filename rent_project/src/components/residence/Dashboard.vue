<template>
  <el-container style="height: 900px">
    <!-- side bar -->
    <el-aside width="20%" style="background-color: #545c64">
      <!-- residence center title -->
      <div
        style="
          height: 80px;
          line-height: 80px;
          text-align: center;
          color: white;
        "
      >
        <strong>RESIDENCE CENTER</strong>
      </div>
      <!-- menu -->
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu v-for="(item, index) in menu" :index="item.id" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span><strong>{{ item.name }}</strong></span>
          </template>

          <el-menu-item-group
            v-for="(child, index) in item.children"
            :key="index"
          >
            <el-menu-item @click="addTab(child)" :index="child.id">
              <i :class="child.icon"></i>
              <span>{{ child.name }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <!-- right container -->
    <el-container>
      <!-- header -->
      <el-header
        style="
          text-align: right;
          height: 10%;
          font-size: 14px;
          background: #545c64;
          line-height: 80px;
        "
      >
        <el-dropdown trigger="click">
          <a style="color: white; cursor: pointer">
            <i class="el-icon-s-home" style="margin-right: 15px"></i>
            Hi,
            <span style="color: white"> Di</span>
          </a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-close">
              <a style="color: black" th:href="@{/residence/logout}"
                >Log out</a
              ></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!-- content -->
      <el-main>
        <el-tabs
          v-model="editableTabsValue"
          type="card"
          closable
          @tab-remove="removeTab"
        >
          <el-tab-pane
            v-for="item in editableTabs"
            :key="item.id"
            :label="item.name"
            :name="item.id"
          >
            <iframe
              :src="item.url"
              width="99%"
              height="700px"
              style="border: 0"
            ></iframe>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
var arr = [
  //Personal Center > profile, request maintenance, maintenance history
  {
    id: 1,
    name: "PERSONAL CENTER",
    icon: "el-icon-user",
    children: [
      { 
        id: 2, 
        name: "Profile",
        url: "/rent/residence/profile" },
      {
        id: 3,
        name: "Request Maintenance",
        url: "/rent/residence/requestMaintenance",
      },
      {
        id: 4,
        name: "Maintenance History",
        url: "/rent/residence/maintenanceHistory",
      },
    ],
  },

  //Payments > pay rent online, payment history
  {
    id: 5,
    name: "PAYMENTS",
    icon:"el-icon-money",
    children: [
      { 
        id: 6, 
        name: "Pay Rent Online", 
        url: "/rent/residence/payRent" 
      },
      { 
        id: 7, 
        name: "Payment History", 
        url: "/rent/residence/paymentHistory" 
      },
    ],
  },

  //Settings > change password, general settings
  {
    id: 8,
    name: "SETTINGS",
    icon:"el-icon-setting",
    children: [
      {
        id: 9,
        name: "Change Password",
        url: "/rent/residence/changePassword",
      },
      {
        id: 10,
        name: "General Settings",
        url: "/rent/residence/generalSettings",
      },
    ],
  },
];

export default {
  name: "Residence_Index",
  components: {},
  data() {
    return {
      editableTabs: [
        {
          name: "Welcome",
          id: "0",
          // url: "https://www.baidu.com/",
        },
      ],

      editableTabsValue: "",

      menu: arr,
    };
  },

  methods: {
    addTab(child) {
      if (!this.editableTabs.includes(child)) {
        this.editableTabs.push(child);
      }
      this.editableTabsValue = child.id;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.id === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.id;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.id !== targetName);
    },
  },
};
</script>
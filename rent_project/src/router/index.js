import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/rent/customer',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    //to customer index page
    {
      path: '/rent/customer/index',
      name: 'Customer_Index',
      component: () => import('@/components/customer/Index')
    },

    //to customer about page
    {
      path: '/rent/customer/about',
      name: 'Customer_About',
      component: () => import('@/components/customer/About')
    },

    //to customer locations page
    {
      path: '/rent/customer/locations',
      name: 'Customer_Location',
      component: () => import('@/components/customer/locations/Locations')
    },

    //to san diego la-jolla-palms overview page
    {
      path: '/rent/customer/locations/san-diego/la-jolla-palms',
      name: 'La-Jolla-Palms',
      component: () => import('@/components/customer/locations/san-diego/la-jolla-palms/Overview')
    },

    //to san diego la-jolla-palms availability page
    {
      path: '/rent/customer/locations/san-diego/la-jolla-palms/availability',
      name: 'La-Jolla-Palms_Availability',
      component: () => import('@/components/customer/locations/san-diego/la-jolla-palms/Availability')
    },

    /**
     * residence login/signup 
     */
    {
      path: '/rent/residence/login',
      name: 'Residence_Login',
      component: () => import('@/components/residence/Login')
    },
    {
      path: '/rent/residence/signup',
      name: 'Residence_Signup',
      component: () => import('@/components/residence/Signup')
    },

    /**
     * residence dashboard
     */
    {
      path: '/rent/residence/dashboard',
      name: 'Residence_Index',
      component: () => import('@/components/residence/Dashboard')
    },
    //personal center
    {
      path: '/rent/residence/profile',
      name: 'Residence_Profile',
      component: () => import('@/components/residence/personal_center/Profile')
    },
    {
      path: '/rent/residence/requestMaintenance',
      name: 'Residence_RequestMaintenance',
      component: () => import('@/components/residence/personal_center/RequestMaintenance')
    },
    {
      path: '/rent/residence/maintenanceHistory',
      name: 'Residence_MaintenanceHistory',
      component: () => import('@/components/residence/personal_center/MaintenanceHistory')
    },
    //payments
    {
      path: '/rent/residence/payRent',
      name: 'Residence_PayRent',
      component: () => import('@/components/residence/payments/PayRent')
    },
    {
      path: '/rent/residence/paymentHistory',
      name: 'Residence_PaymentHistory',
      component: () => import('@/components/residence/payments/PaymentHistory')
    },
    //settings
    {
      path: '/rent/residence/changePassword',
      name: 'Residence_ChangePassword',
      component: () => import('@/components/residence/settings/ChangePassword')
    },
    {
      path: '/rent/residence/generalSettings',
      name: 'Residence_GeneralSettings',
      component: () => import('@/components/residence/settings/GeneralSettings')
    },
  ]
})

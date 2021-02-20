<template>
    <div>
        <Header/>
        about us
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/public/Header'
import Footer from '@/components/public/Footer'

export default {
    name:"About",
    components:{
    //import Header and Footer
    Header,
    Footer,
  }
}
</script>
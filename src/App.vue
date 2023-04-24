<template>
  <NavBar />
  <!-- <div class="container-fluid min-vh-100 p-0"></div> -->
  <router-view />
  <Footer/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer
}
}
</script>
<style>

</style>

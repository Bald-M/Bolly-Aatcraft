<template>
  <TopNav />

  <!-- Banner -->
  <div class="container my-md-5 my-5">
    <img :src="this.$baseUrl + 'home.jpg'" class="w-100" loading="lazy">
  </div>

  <Footer />
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    TopNav,
    Footer,
  }
}
</script>


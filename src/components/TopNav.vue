<template>
  <div class="container mt-md-5">
    <nav class="nav d-flex justify-content-md-center">
      <router-link class="nav-link" to="/" :class="{ active: tab === 'HOME' }"
        @click="selectHandler('HOME')">HOME</router-link>

      <div style="cursor: pointer;">
        <a class="nav-link dropdown" @click="displayHandler">ABOUT US</a>
        <!-- sub menu -->
        <ul class="nav flex-column dropdown-menu" v-show="visible">
          <li class="nav-item"><router-link to="/company" class="nav-link" :class="{ active: tab === 'COMPANY' }"
              @click="selectHandler('COMPANY')">OUR COMPANY</router-link></li>
          <li class="nav-item"><router-link to="/culture" class="nav-link" :class="{ active: tab === 'CULTURE' }"
              @click="selectHandler('CULTURE')">OUR CULTURE</router-link></li>
        </ul>
      </div>

      <router-link class="nav-link" to="/showroom" :class="{ active: tab === 'SHOWROOM' }"
        @click="selectHandler('SHOWROOM')">SHOWROOM</router-link>

      <router-link class="nav-link" to="/products" :class="{ active: tab === 'PRODUCTS' }"
        @click="selectHandler('PRODUCTS')">PRODUCTS</router-link>

      <router-link class="nav-link disabled" to="#">NEWS</router-link>

      <router-link class="nav-link" to="/contact-us" :class="{ active: tab === 'CONTACT-US' }"
        @click="selectHandler('CONTACT-US')">CONTACT US</router-link>

    </nav>

  </div>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      tab: 'HOME',
      visible: false,
    }
  },
  methods: {
    selectHandler(value) {
      this.tab = value
      // Clicking another nav link will hide the sub menu
      this.visible = false
    },
    displayHandler() {
      this.visible = !this.visible
    }
  }
}
</script>

<style>
  .dropdown::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
  }

  .nav-link {
    color: #000000A6 !important;
  }

  .active {
    color: #FC6800 !important;
  }

  .nav-link:hover{
    color: #FC6800 !important;
  }

</style>
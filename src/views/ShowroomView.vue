<template>
  <TopNav />

  <div class="container mt-md-5">
    <!-- carousel -->
    <div class="carousel slide" data-bs-ride="carousel">

      <!-- 指示符 -->
      <div class="carousel-indicators">
        <button type="button" class="slider-indicator" v-for="(item, index) in imageList" :key="index"
          @click="selectHandler(index)" :class="{ highlight: currentIndex === index }"></button>
      </div>

      <!-- 轮播图片 -->
      <div class="carousel-inner">

        <div class="carousel-item" v-for="(item, index) in imageList" :key="index"
          :class="{ active: index === currentIndex }">
          <img :src="item" class="d-block w-100">
        </div>

      </div>

      <!-- 左右切换按钮 -->
      <button class="carousel-control-prev" type="button" @click="prevHandler">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" @click="nextHandler">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>


  <Footer />
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "ShowroomView",
  components: {
    TopNav,
    Footer,
  },
  data() {
    return {
      imageList: [this.$baseUrl + "showroom1.jpg", this.$baseUrl + "showroom2.jpg", this.$baseUrl + "showroom3.jpg"],
      currentIndex: 0,
    }
  },
  methods: {
    selectHandler(index) {
      this.currentIndex = index
    },
    prevHandler() {
      this.currentIndex = this.currentIndex - 1
      if (this.currentIndex < 0) {
        this.currentIndex = this.imageList.length - 1
      }
    },
    nextHandler() {
      this.currentIndex = this.currentIndex + 1
      if (this.currentIndex > (this.imageList.length - 1)) {
        this.currentIndex = 0
      }
    }
  }
}
</script>

<style scoped>
.slider-indicator {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  padding: 0;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity .6s ease;
}

.highlight {
  opacity: 1;
}
</style>
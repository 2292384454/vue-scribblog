<template>
  <el-carousel :interval="5000" ref="carousel" class="carousel" :height="carouselHeight" trigger="click"
               arrow="never">
    <el-carousel-item>
      <img src="/img/carousel-hk-sea.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item>
      <img src="/img/carousel-whu.jpg" alt="">
    </el-carousel-item>
  </el-carousel>
  <div>
    <article-list/>
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList";
import {ElCarousel, ElCarouselItem} from 'element-plus';
import 'element-plus/dist/index.css';
import {onMounted, onUnmounted, ref} from "vue";

export default {
  name: "Home",
  setup() {
    const carouselHeight = ref('341px');
    const updateCarouselHeight = () => {
      const aspectRatio = 3.0; // 轮播图长宽比
      const width = window.innerWidth;
      const height = width / aspectRatio;
      carouselHeight.value = `${height}px`;
    };

    onMounted(() => {
      updateCarouselHeight();
      window.addEventListener('resize', updateCarouselHeight);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateCarouselHeight);
    });

    return {
      carouselHeight,
    };
  },
  components: {
    ArticleList,
    ElCarousel, ElCarouselItem
  },
}
</script>

<style>
.carousel {
  width: 100%
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
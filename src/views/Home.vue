<template>
  <div class="carousel-wrapper">
    <div class="carousel-title">kevin Hwang's Blog</div>
    <div class="label-box">
      <a class="btn">标签1</a>
      <a class="btn">CTSDB</a>
      <a class="btn">标签3</a>
      <a class="btn">标签4</a>
      <a class="btn">标签5</a>
      <a class="btn">标签6</a>
      <a class="btn">标签7</a>
      <a class="btn">标签8</a>
      <a class="btn">标签9</a>
      <a class="btn">标签10</a>
      <a class="btn">标签11</a>
      <a class="btn">标签12</a>
      <a class="btn">标签13</a>
      <a class="btn">标签14</a>
      <a class="btn">标签15</a>
      <a class="btn">标签16</a>
    </div>
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
  width: 100%;
  z-index: 0
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.carousel-wrapper {
  position: relative;
}

@font-face {
  font-family: 'Still-Night';
  src: url('../../public/fonts/still_night.woff2') format('woff2'),
  url('../../public/fonts/still_night.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

.carousel-title {
  position: absolute;
  top: 2.5ch;
  right: 100px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: right;
  color: #fff;
  font-family: 'Still-Night', sans-serif;
  font-size: 100px;
  z-index: 1;
}

.label-box {
  position: absolute;
  top: 30ch;
  right: 200px;
  width: 300px;
  z-index: 1;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
}

.btn {
  background-color: rgba(255, 255, 255, 0.3);
  /* 给按钮添加圆角 */
  border-radius: 5px;
  font-family: sans-serif;
  color: #fafafa;
  font-size: 16px;
  padding: 3px;
  text-decoration: none;
  margin: 4px 6px;
}
/* 悬停样式 */
.btn:hover {
  background: #5284b5;
  background-image: -webkit-linear-gradient(top, #5284b5, #4e8b7d);
  background-image: -moz-linear-gradient(top, #5284b5, #4e8b7d);
  background-image: -ms-linear-gradient(top, #5284b5, #4e8b7d);
  background-image: -o-linear-gradient(top, #5284b5, #4e8b7d);
  background-image: linear-gradient(to bottom, #5284b5, #4e8b7d);
  text-decoration: none;
}
</style>
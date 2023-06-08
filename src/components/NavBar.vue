<template>
  <div>
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             text-color="#fff"
             active-text-color="#ffd04b"
             @select="handleSelect">
      <div class="avatar-wrapper">
        <a href="/">
          <el-avatar :size="40" align-items="center" @error="errorHandler">
            <img
                src="/img/avatar.jpg"
                alt="头像"/>
          </el-avatar>
        </a>
      </div>
      <el-menu-item index="/home" :class="{ 'is-active': route.path === '/' || route.path === '/home' }">首页
      </el-menu-item>
      <el-menu-item index="/demo" :class="{ 'is-active': route.path === '/demo' }">demo
      </el-menu-item>
      <el-menu-item index="/message" :class="{ 'is-active': route.path === '/message' }">留言
      </el-menu-item>
      <el-menu-item index="/contact" :class="{ 'is-active': route.path === '/contact' }">联系
      </el-menu-item>
      <el-menu-item index="/about" :class="{ 'is-active': route.path === '/about' }">关于
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {ElMenu, ElMenuItem} from 'element-plus';
import {defineComponent, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import 'element-plus/dist/index.css'

export default defineComponent(
    {
      name: "NavBar",
      components: {ElMenu, ElMenuItem},
      setup() {
        const activeIndex = ref('/');
        const route = useRoute();
        const router = useRouter();
        const handleSelect = (index) => {
          activeIndex.value = index;
          router.push(index);
        };
        const errorHandler = () => true;
        return {
          activeIndex,
          route,
          handleSelect,
          errorHandler
        };
      },
    });
</script>
<style>
.el-menu-demo {
  height: 60px;
  width: 100%;
  border: none;
  margin: 0;
  padding: 0;
  background-color: #1b2126;
  font-size: 16px;
}

.avatar-wrapper {
  display: flex;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
}

.el-menu-item.is-active {
  background-color: #f0f0f0 ;
  color: #333;
}
</style>
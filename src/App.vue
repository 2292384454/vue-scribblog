<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <nav-bar/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {ElHeader, ElMain} from 'element-plus';
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    ElHeader, ElMain,
    NavBar
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.header {
  background-color: #1b2126;
}
</style>
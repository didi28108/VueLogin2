<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1">儀錶板</el-menu-item>
    <el-submenu index="2">
      <template slot="title">工作台</template>
      <el-menu-item index="2-1">移動</el-menu-item>
      <el-menu-item index="2-2">澆水</el-menu-item>
      <el-menu-item index="2-3">施肥</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" >消息中心</el-menu-item>
    <el-menu-item index="4" @click="logout">登出</el-menu-item>
  </el-menu>
</template>
<script>
  import {Menu,Submenu,MenuItem} from 'element-ui';
  export default {
    data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      logout(){
        localStorage.removeItem('token');
        this.$router.push('/login');
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    components: {
      'el-menu':Menu,
      'el-menu-item':MenuItem,
      'el-submenu':Submenu,
    }
  }
</script>
<style scoped>
  @import url("element-ui/lib/theme-chalk/index.css");
  @import url("element-ui/lib/theme-chalk/display.css");
</style>
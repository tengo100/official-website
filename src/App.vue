<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GoTop from '@/components/GoTop.vue'
import {useRoute} from "vue-router";
import {computed} from "vue";
const route = useRoute()
const isLayout=computed(()=>{
  return !route?.meta?.noLayout
})
</script>

<template>
  <Header v-if="isLayout"></Header>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  <Footer v-if="isLayout"></Footer>
  <GoTop v-if="isLayout"></GoTop>
</template>

<style scoped></style>


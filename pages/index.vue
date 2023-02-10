<template>
  <div class="home">
    <!-- 首页
    <Banner></Banner>
    <BannerChild></BannerChild>
    <nuxt-link to="/about?data='我是首页的数据'">跳转到about</nuxt-link>
    <nuxt-link to="/about/personal">跳转到about子页面</nuxt-link> -->
  </div>
</template>

<script setup>
// const data = useRoute().query.data
// console.log('data', data)
import { ref } from 'vue'

const data = ref('')

const resData = await useFetch("http://127.0.0.1:3002/test")

console.log('resData', resData)

// data.value = resData


</script>

<style scoped>
</style>
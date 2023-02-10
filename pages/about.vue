<template>
  <div>
    about
    <div @click="navigateTo('/?data=我是关于的数据')">跳转到首页1</div>
    
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
const data = useRoute().query.data
console.log('data', data)
</script>

<style lang="scss" scoped>
</style>
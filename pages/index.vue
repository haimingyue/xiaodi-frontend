<template>
  <div class="home" @click="handleClick">
    <a-button type="primary">Primary Button</a-button>
    首页11{{ text }}{{ data.xiaodi.a }}
  </div>
</template>

<script setup>
let text = $ref(3)
const data = reactive({
  xiaodi: {
    a: 1
  }
})

const handleClick = () => {
  text = 4
}
</script>

<style scoped>
</style>
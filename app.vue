
<script setup>
import "ant-design-vue/es/message/style/css";

useHead({
  title: "小滴课堂",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "My description",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

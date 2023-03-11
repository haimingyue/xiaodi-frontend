<script lang="ts" setup>
// 二次接口封装请求
import { test } from "../api/test";

const data = await test();
console.log("data", data);

const { count, add, multiplyCount } = $(useUser());
</script>
<template>
  <div class="home">
    <h2 @click="add">改变count的值1</h2>
    <h2>action:{{ count }}</h2>
    <h2>getters:{{ multiplyCount }}</h2>
    <a-button>按钮</a-button>
  </div>
</template>
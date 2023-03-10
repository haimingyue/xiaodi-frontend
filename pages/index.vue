<script lang="ts" setup>
import { useUser } from '../composables/user';

const { count, add, multiplyCount } = $(useUser())
</script>
<template>
  <div class="home">
    <h2 @click="add">改变count的值</h2>
    <h2>action:{{ count }}</h2>
    <h2>getters:{{ multiplyCount }}</h2>
  </div>
</template>
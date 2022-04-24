<template>
  <div class="title">
    <div>{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.title {
  background-color: #fff;
  div {
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
  }
}
</style>

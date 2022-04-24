<template>
  <div>
    <ComTitle title="图片懒加载"></ComTitle>
    <div class="block">
      <div>
        <div>往</div>
        <div>下</div>
        <div>划</div>
      </div>
    </div>
    <div class="img-content">
      <LazyImg :width="300" :height="300"></LazyImg>
    </div>
  </div>
</template>

<script setup lang="ts">
import LazyImg from "./LazyImg.vue";
import ComTitle from "@/components/common/ComTitle/ComTitle.vue";
</script>

<style scoped lang="scss">
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.img-content {
  display: flex;
  justify-content: center;
  img {
    height: 300px;
    width: 300px;
  }
}
</style>

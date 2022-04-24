<template>
  <div>
    <ComTitle title="拖拽上传"></ComTitle>
    <div class="box">
      <DragLoad></DragLoad>
    </div>
  </div>
</template>

<script setup lang="ts">
import ComTitle from "@/components/common/ComTitle/ComTitle.vue";
import DragLoad from "./DragLoad/DragLoad.vue";
</script>

<style scoped lang="scss">
.box {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>

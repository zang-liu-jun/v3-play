<template>
  <div>
    <ComTitle title="拖动组件"></ComTitle>
    <div ref="dragBox1" class="drag-box">
      <div>我是可以拖动的</div>
      <div>({{ X }},{{ Y }})</div>
    </div>
    <div v-drag style="background-color: #e7eaed; height: 30px">自定义指令</div>
  </div>
</template>

<script setup lang="ts">
import ComTitle from "@/components/common/ComTitle/ComTitle.vue";
import { onMounted, ref } from "vue";
import { useDraggable } from "./useDraggable";

const dragBox1 = ref(null);
const { X, Y, vDrag } = useDraggable(dragBox1);
</script>

<style scoped lang="scss">
.drag-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  width: 150px;
  height: 70px;
  background-color: #fff;
  border: 1px solid #c8c8c8;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(#000, 0.08), 0 1px 2px rgba(#000, 0.08);
  div {
    user-select: none;
  }
}
</style>

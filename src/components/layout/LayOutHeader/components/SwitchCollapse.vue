<template>
  <div class="menu-switch" @click="comStore.switchCollapse">
    <el-icon><expand /></el-icon>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { useComStore } from "@/store";

const comStore = useComStore();
</script>

<style scoped lang="scss">
.menu-switch {
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #f6f6f6;
    cursor: pointer;
  }
}
</style>

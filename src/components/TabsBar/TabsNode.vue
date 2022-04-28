<template>
  <div
    ref="node"
    class="tabs-node"
    draggable="true"
    :class="isActive ? 'active' : ''"
  >
    <div>{{ tabName }}</div>
    <div class="icon-box">
      <el-icon><close /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDragSort } from "./useDragSort";
import { ref } from "vue";
const props = defineProps({
  tabName: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
  tabIndex: {
    type: Number,
    required: true,
  },
});
const node = ref<HTMLElement | null>(null);
useDragSort(node, props.tabName);
</script>

<style scoped lang="scss">
.tabs-node {
  display: flex;
  align-items: center;
  padding: 0 8px 0;
  height: 25px;
  font-size: 12px;
  border: 1px solid #d9d9d9;
  background-color: #fff;
  border-radius: 3px;
  user-select: none;
  .icon-box {
    display: flex;
    align-items: center;
  }
}
.active {
  background-color: #1a8dfe;
  color: #fff;
}
</style>

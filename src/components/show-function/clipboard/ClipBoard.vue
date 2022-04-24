<template>
  <div class="clip-board">
    <ComTitle title="文本一键复制"></ComTitle>
    <div class="box">
      <el-input v-model="text" placeholder="输入文本" size="small" />
      <el-button v-copy="text" type="primary" plain>一键复制</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import ComTitle from "@/components/common/ComTitle/ComTitle.vue";
import { ref } from "vue";
import { useVcopy } from "./useVcopy";

const text = ref("");

const { vCopy } = useVcopy();
</script>

<style scoped lang="scss">
.clip-board {
  .box {
    gap: 10px;
    padding: 0 20px 0;
    margin-top: 20px;
    display: flex;
  }
}
</style>

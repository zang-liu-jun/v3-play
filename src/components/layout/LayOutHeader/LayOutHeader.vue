<template>
  <div class="layout-header">
    <SwitchCollapse style="height: 100%"></SwitchCollapse>
  </div>
</template>

<script setup lang="ts">
import SwitchCollapse from "./components/SwitchCollapse.vue";
</script>

<style scoped lang="scss">
.layout-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e7eaed;
}
</style>

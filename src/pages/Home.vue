<template>
  <div class="app">
    <div class="layout-left">
      <LeftMenu></LeftMenu>
    </div>
    <div class="layout-right">
      <div>
        <LayOutHeader></LayOutHeader>
        <MidTabs></MidTabs>
      </div>
      <div class="layout-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import LeftMenu from "@/components/layout/LeftMenu/LeftMenu.vue";
import LayOutHeader from "@/components/layout/LayOutHeader/LayOutHeader.vue";
import MidTabs from "@/components/layout/MidTabs/MidTabs.vue";
</script>

<style scoped lang="scss">
.app {
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  overflow: hidden;
  .layout-right {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100vh;
    .layout-content {
      width: 100%;
      overflow-y: scroll;
    }
  }
}
.layout-left {
  overflow-y: scroll;
  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

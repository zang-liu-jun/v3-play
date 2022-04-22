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
        <el-scrollbar>
          <router-view v-slot="{ Component }">
            <ContentTransition>
              <component :is="Component"></component>
            </ContentTransition>
          </router-view>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import LeftMenu from "@/components/layout/LeftMenu/LeftMenu.vue";
import LayOutHeader from "@/components/layout/LayOutHeader/LayOutHeader.vue";
import MidTabs from "@/components/layout/MidTabs/MidTabs.vue";
import ContentTransition from "@/components/common/transition/ContentTransition.vue";
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
      flex: 1;
      width: 100%;
      overflow-y: scroll;
      background-color: #f0f2f5;
      &::-webkit-scrollbar {
        display: none;
      }
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

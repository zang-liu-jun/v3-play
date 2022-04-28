<template>
  <div class="tabs-bar">
    <TransitionGroup name="fade"
      ><TabsNode
        v-for="item in tabsStore.tabsArr"
        :key="item.tabName"
        :tab-name="item.tabName"
        :is-active="item.routeName === tabsStore.currentRouteName"
        :tab-index="item.tabIndex"
      ></TabsNode
    ></TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import TabsNode from "./TabsNode.vue";
// @ts-ignore
import { useTabsStore } from "@/store";

const tabsStore = useTabsStore();
</script>

<style scoped lang="scss">
.tabs-bar {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>

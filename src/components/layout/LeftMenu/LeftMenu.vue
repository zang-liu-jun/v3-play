<template>
  <el-menu
    default-active="1-1"
    class="el-menu-vertical-demo"
    :collapse="comStore.isCollapse"
    text-color="#fff"
    background-color="#001529"
    :unique-opened="true"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><grid /></el-icon>
        <span>功能</span>
      </template>
      <el-menu-item index="1-1" @click="goInto('clipboard', '剪切板')"
        >剪切板</el-menu-item
      >
      <el-menu-item index="1-2" @click="goInto('drag', '拖动组件')"
        >拖动组件</el-menu-item
      >
      <el-menu-item index="1-3" @click="goInto('lazy', '图片懒加载')"
        >图片懒加载</el-menu-item
      >
      <el-menu-item index="1-4" @click="goInto('websocket', 'websocket')"
        >websocket</el-menu-item
      >
    </el-sub-menu>

    <el-sub-menu index="2">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>组件</span>
      </template>
      <el-menu-item index="2-1" @click="goInto('dragLoad', '拖拽上传')"
        >拖拽上传</el-menu-item
      >
      <el-sub-menu index="2-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useComStore } from "../../../store";
import { useRouter } from "vue-router";
import { useGo } from "./useGo";
const comStore = useComStore();

const router = useRouter();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const { goInto } = useGo(router);
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu-vertical-demo {
  height: 100vh;
}
</style>

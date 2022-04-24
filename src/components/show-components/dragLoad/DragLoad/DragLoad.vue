<template>
  <div>
    <div ref="dragLoad" class="drag-load">
      <div class="svg-box">
        <svg
          t="1650731237132"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5128"
          width="42"
          height="42"
        >
          <path
            d="M795.694545 395.636364a289.047273 289.047273 0 0 0-567.38909 0 197.585455 197.585455 0 0 0 18.385454 395.636363h30.952727a23.272727 23.272727 0 0 0 0-46.545454H246.690909a151.272727 151.272727 0 1 1-2.327273-302.545455l23.272728 5.352727 3.025454-25.6a242.269091 242.269091 0 0 1 480.814546 0l4.654545 25.134546 23.272727-4.887273a151.272727 151.272727 0 1 1-2.327272 302.545455h-34.909091a23.272727 23.272727 0 0 0 0 46.545454h35.141818a197.585455 197.585455 0 0 0 18.385454-395.636363z"
            p-id="5129"
            fill="#bfbfbf"
          ></path>
          <path
            d="M528.523636 480.349091a23.272727 23.272727 0 0 0-33.047272 0l-131.490909 131.490909a23.272727 23.272727 0 0 0 0 33.047273 23.272727 23.272727 0 0 0 32.814545 0L488.727273 552.96V837.818182a23.272727 23.272727 0 0 0 46.545454 0V552.96l93.090909 91.927273a23.272727 23.272727 0 0 0 16.523637 6.749091 23.272727 23.272727 0 0 0 16.290909-39.796364z"
            p-id="5130"
            fill="#bfbfbf"
          ></path>
        </svg>
      </div>
      <div class="font-box">
        <div>
          将文件拖动到此处，或<span style="color: cornflowerblue"
            >点击上传</span
          >
          <input
            id="fileInput"
            style="display: none"
            type="file"
            multiple="multiple"
            name="file"
          />
        </div>
      </div>
    </div>

    <div class="progress-box">
      <TransitionGroup name="upload">
        <div v-for="item in [...fileSet]" :key="item.id">
          <div class="font">{{ item.name }}</div>
          <el-progress
            :percentage="item.progress"
            :stroke-width="3"
            :status="item.progress === 100 ? 'success' : ''"
          />
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, Ref, ref } from "vue";
import { useDragLoad } from "./useDragLoad";

const dragLoad = ref(null);
const { url, fileSet } = useDragLoad(dragLoad);
const isShow = ref(false);
</script>

<style scoped lang="scss">
.drag-load {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 350px;
  height: 180px;
  border: 1px dashed #909399;
  cursor: pointer;
  font-size: 14px;
  border-radius: 20px;
  .svg-box {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
  }
  .font-box {
    display: flex;
    justify-content: center;
    width: 100%;
    user-select: none;
  }
}
.progress-box {
  margin-top: 10px;
  width: 100%;
  .font {
    font-size: 12px;
  }
}
.upload-enter-active {
  animation: top-move 0.5s;
}

.upload-leave-active {
  animation: top-move 0.5s reverse;
}

@keyframes top-move {
  0% {
    transform: translateY(-10px);
    opacity: 0;
  }
  50% {
    transform: translateY(-5px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

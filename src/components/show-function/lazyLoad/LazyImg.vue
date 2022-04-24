<template>
  <div>
    <img
      ref="img"
      v-lazy="'https://t7.baidu.com/it/u=2616957906,247311499&fm=193&f=GIF'"
      src="@/assets/picture/gou.jpg"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { useVlazy } from "./useVlazy";
import { onMounted, ref } from "vue";

const props = defineProps({
  width: {
    type: Number,
    default: 50,
  },
  height: {
    type: Number,
    default: 50,
  },
});
const img: any = ref(null);
onMounted(() => {
  img.value.style.width = `${props.width}px`;
  img.value.style.height = `${props.height}px`;
});

const { vLazy } = useVlazy();
</script>

<style scoped lang="scss"></style>

<template>
  <Transition name="fade" appear mode="out-in">
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.fade-enter-active {
  animation: left-move 0.5s;
}
.fade-leave-active {
  animation: right-move 0.5s reverse;
}
@keyframes right-move {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes left-move {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>

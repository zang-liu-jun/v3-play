export const useVlazy = () => {
  const vLazy = {
    beforeMount(el: any, binding: any) {
      el.$fakeUrl = binding.value;
    },
    mounted(el: any) {
      const io = new IntersectionObserver((entries) => {
        const realSrc = el.$fakeUrl;
        // 通过isIntersecting判断是否在可视区域内
        new Promise((resolve) => {
          setTimeout(() => {
            entries[0].isIntersecting && realSrc && (el.src = realSrc);
            resolve("ok");
          }, 1000);
        });
      });
      // 挂载实例, 提供给后续的unmounted钩子操作
      el.$io = io;
      // 监听目标对象
      io.observe(el);
    },
    updated(el: any, binding: any) {
      // 实时更新最新的图片路径
      el.$fakeUrl = binding.value;
    },
    unmounted(el: any) {
      // 停止监听工作
      el.$io.disconnect();
    },
  };

  return {
    vLazy,
  };
};

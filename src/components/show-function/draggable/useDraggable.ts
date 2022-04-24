import { onMounted, unref, ref } from "vue";

// 自定义指令实现
const vDrag = {
  mounted(el: any) {
    el.style.position = "fixed";
    el.style.cursor = "pointer";
    el.style.userSelect = "none";
    el.addEventListener("mousedown", (e: any) => {
      const disX = el.offsetLeft;
      const disY = el.offsetTop;
      const x = e.clientX;
      const y = e.clientY;
      document.onmousemove = (e: MouseEvent) => {
        const currX = e.clientX;
        const currY = e.clientY;
        el.style.left = `${disX + currX - x}px`;
        el.style.top = `${disY + currY - y}px`;
      };
      document.onmouseup = (e: MouseEvent) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    });
  },
};

// 钩子函数实现
export const useDraggable = (element: any) => {
  let disX;
  let disY;
  // X, Y是当前距离浏览器的边框的距离
  const X = ref(0);
  const Y = ref(0);
  onMounted(() => {
    const el = unref(element);
    el.style.cursor = "move";
    el.style.position = "fixed";
    X.value = el.offsetLeft;
    Y.value = el.offsetTop;
    el.addEventListener("mousedown", (e: any) => {
      const left = el.offsetLeft;
      const top = el.offsetTop;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      document.onmousemove = (e: MouseEvent) => {
        X.value = el.offsetLeft;
        Y.value = el.offsetTop;
        disX = e.clientX - mouseX;
        disY = e.clientY - mouseY;
        el.style.left = `${left + disX}px`;
        el.style.top = `${top + disY}px`;
        return false;
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    });
  });
  return {
    X,
    Y,
    vDrag,
  };
};

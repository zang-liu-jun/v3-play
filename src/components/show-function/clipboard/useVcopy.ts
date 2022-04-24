import { ElMessage } from "element-plus";

const vCopy = {
  mounted(el: any, binding: any) {
    el.targetContent = binding.value;
    el.addEventListener("click", () => {
      if (!el.targetContent) {
        return;
      }
      const textarea: any = document.createElement("textarea");
      textarea.readOnly = "readonly";
      textarea.style.position = "fixed";
      textarea.style.top = "-99999px";
      textarea.value = el.targetContent;
      document.body.appendChild(textarea);
      textarea.select();
      const res = document.execCommand("copy");
      res &&
        ElMessage({
          message: "复制成功",
          type: "success",
        });
      document.body.removeChild(textarea);
    });
  },
  updated(el: any, binding: any) {
    el.targetContent = binding.value;
  },
  unmounted(el: any) {
    el.removeEventListener("click", () => {});
  },
};

export const useVcopy = () => {
  return {
    vCopy,
  };
};

import { onMounted, reactive, ref, Ref } from "vue";
import { File } from "vitest";
// @ts-ignore
import instance from "@/service/index";
interface IFile {
  id: number;
  name: string;
  progress: number;
  file: string | Blob;
}

export function useDragLoad(element: Ref<HTMLElement | null>) {
  const url = ref("");
  // 上传文件列表
  // const fileArr: any[] = reactive([]);
  const fileSet: Set<IFile> = reactive(new Set());
  onMounted(() => {
    const el = element.value;
    el!.addEventListener("drop", (e: DragEvent) => {
      e.preventDefault();
      resetStyle(el);
      const files: IFile[] = Object.values(e.dataTransfer!.files).map((item) =>
        reactive({
          id: Math.random(),
          name: item.name,
          progress: 0,
          file: item,
        })
      );
      for (const file of files) {
        fileSet.add(file);
        uploadFile(file).then((res) => {
          fileSet.delete(file);
        });
      }
      // uploadFile(file as any, percent);
      // url.value = window.URL.createObjectURL(file as any);
    });
    el!.addEventListener("dragover", (e) => {
      e.preventDefault();
      el!.style.backgroundColor = "#ECF5FF";
      el!.style.borderColor = "#409eff";
      el!.style.borderWidth = "2px";
    });
    el!.addEventListener("dragleave", function (event) {
      // 当拖动元素离开可放置目标节点，重置其背景
      resetStyle(el);
    });
    // 调用input file点击事件并且监听它的改变
    const fileInput = document.querySelector("#fileInput");
    fileInput!.addEventListener("change", (e) => {
      console.log((e as any).target.files);
      const files: any = Object.values((e as any).target.files).map((item) =>
        reactive({
          id: Math.random(),
          name: (item as File).name,
          progress: 0,
          file: item as File,
        })
      );
      for (const file of files) {
        fileSet.add(file);
        uploadFile(file).then((res) => {
          fileSet.delete(file);
        });
      }
    });
    // 点击上传
    el!.addEventListener("click", () => {
      (fileInput as any).click();
    });
  });
  return {
    url,
    fileSet,
  };
}

async function uploadFile(file: IFile) {
  const fd = new FormData();
  fd.append("name", "file");
  fd.append("file", file.file);
  try {
    const res = await instance.post(
      // "https://jsonplaceholder.typicode.com/posts/",
      "https://www.hualigs.cn/api/upload",
      fd,
      {
        onUploadProgress: (progress: any) => {
          const res = Number(
            ((progress.loaded / progress.total) * 100).toFixed(2)
          );
          // if (res >= file.progress)
          file.progress = res;
        },
        timeout: 0,
      }
    );
  } catch (e) {
    console.log(e);
  }
}

function resetStyle(el: HTMLElement | null) {
  el!.style.backgroundColor = "";
  el!.style.borderColor = "#909399";
  el!.style.borderWidth = "1px";
}

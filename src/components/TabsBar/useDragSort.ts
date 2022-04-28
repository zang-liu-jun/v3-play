import { onMounted, Ref } from "vue";
// @ts-ignore
import { useTabsStore } from "@/store";

const tabsStore = useTabsStore();
export function useDragSort(node: Ref<HTMLElement | null>, tabName: string) {
  onMounted(() => {
    const el = node.value;
    handleEl(el, tabName);
  });
}

function handleEl(el: HTMLElement | null, tabName: string) {
  const tabIndex = tabsStore.tabsArr.findIndex(
    (item: any) => item.tabName === tabName
  );
  el?.addEventListener("dragstart", (e) => {
    tabsStore.selectedIndex = tabIndex;
  });
  el?.addEventListener(
    "dragenter",
    (e) => {
      if (tabIndex === tabsStore.selectedIndex) {
        return;
      }
      for (let i = 0; i < tabsStore.tabsArr.length; i++) {
        if (i < tabIndex) {
          tabsStore.tabsArr[i].tabIndex--;
        } else if (i > tabIndex) {
          tabsStore.tabsArr[i].tabIndex++;
        }
      }
      if (tabsStore.selectedIndex < tabIndex) {
        tabsStore.tabsArr[tabsStore.selectedIndex].tabIndex = tabIndex + 1;
      } else if (tabsStore.selectedIndex > tabIndex) {
        tabsStore.tabsArr[tabsStore.selectedIndex].tabIndex = tabIndex - 1;
      }

      tabsStore.tabsArr.sort((a: any, b: any) => {
        return a.tabIndex - b.tabIndex;
      });
      for (let i = 0; i < tabsStore.tabsArr.length; i++) {
        tabsStore.tabsArr[i].tabIndex = i;
      }
    },
    false
  );
  el?.addEventListener("dragend", (e) => {
    tabsStore.selectedIndex = -1;
  });
  el?.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer!.dropEffect = "move";
  });
}

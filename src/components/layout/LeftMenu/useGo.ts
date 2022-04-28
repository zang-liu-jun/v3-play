// @ts-ignore
import { useTabsStore } from "@/store";
import { Router } from "vue-router";

export function useGo(router: Router) {
  function goInto(routeName: string, tabName: string) {
    const tabsStore = useTabsStore();
    router.push({ name: routeName });
    const set = new Set(tabsStore.tabsArr.map((item: any) => item.routeName));
    if (!set.has(routeName)) {
      tabsStore.tabsArr.push({
        tabIndex: tabsStore.tabsArr.length,
        tabName,
        routeName,
      });
    }
    tabsStore.currentRouteName = routeName;
  }
  return {
    goInto,
  };
}

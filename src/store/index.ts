import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state() {
    return {
      username: "小臧",
      count: 0,
    };
  },
  actions: {
    add() {
      this.count++;
    },
  },
});

export const useComStore = defineStore("compositon", {
  state() {
    return {
      isCollapse: false,
    };
  },
  actions: {
    switchCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
});

interface TabNode {
  tabIndex: number;
  tabName: string;
  routeName: string;
}
export const useTabsStore = defineStore("tabs", {
  state() {
    const tabsArr: TabNode[] = [];
    const currentRouteName = "";
    const selectedIndex = -1;
    return {
      tabsArr,
      currentRouteName,
      selectedIndex,
    };
  },
});

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

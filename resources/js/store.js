import { defineStore } from "pinia";

export const useDataStore = defineStore("DataStore", {
  state: () => ({
    selected: {
    }
  }),
  getters: {
    getSelected: (state) => state.selected,
  },
  actions: {
    async setUserSelected(user) {
      state.userSelected = user;
    },
  },
});
import { defineStore } from "pinia";

export const useDataStore = defineStore("DataStore", {
  state: () => ({
    selected: null
  }),
  actions: {
    async setUserSelected(user) {
      state.userSelected = user;
    },
  },
});
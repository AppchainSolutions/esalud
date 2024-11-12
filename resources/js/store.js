import { defineStore } from "pinia";

export const useDataStore = defineStore("DataStore", {
  state: () => ({
    selected: null,
    endpoints: [{}],
    userSelected: null
  }),
  actions: {
    async setUserSelected(user) {
      this.userSelected = user;
    },
    setEndpoints(endpoints) {
      this.endpoints = endpoints;
    },
  },
});
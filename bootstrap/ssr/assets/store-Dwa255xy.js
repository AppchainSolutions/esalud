import { defineStore } from "pinia";
const useDataStore = defineStore("DataStore", {
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
    }
  }
});
export {
  useDataStore as u
};
//# sourceMappingURL=store-Dwa255xy.js.map

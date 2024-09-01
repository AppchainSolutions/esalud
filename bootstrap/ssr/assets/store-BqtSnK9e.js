import { defineStore } from "pinia";
const useDataStore = defineStore("DataStore", {
  state: () => ({
    selected: {}
  }),
  getters: {
    getSelected: (state2) => state2.selected
  },
  actions: {
    async setUserSelected(user) {
      state.userSelected = user;
    }
  }
});
export {
  useDataStore as u
};
//# sourceMappingURL=store-BqtSnK9e.js.map

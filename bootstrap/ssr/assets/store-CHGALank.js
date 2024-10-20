import { defineStore } from "pinia";
const useDataStore = defineStore("DataStore", {
  state: () => ({
    selected: null
  }),
  actions: {
    async setUserSelected(user) {
      state.userSelected = user;
    }
  }
});
export {
  useDataStore as u
};
//# sourceMappingURL=store-CHGALank.js.map

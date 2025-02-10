import { defineStore } from "pinia";
const useDataStore = defineStore("DataStore", {
  state: () => ({
    selected: {},
    userSelected: {},
    pacienteSelected: []
  }),
  getters: {
    getUserSelected: (state) => state.userSelected,
    getPacienteSelected: (state) => state.pacienteSelected
  },
  actions: {
    async setUserSelected(user) {
      this.userSelected = user;
    },
    async setPaciente(paciente = null) {
      if (paciente) {
        this.pacienteSelected = paciente;
      }
      return this.pacienteSelected;
    }
  }
});
export {
  useDataStore as u
};
//# sourceMappingURL=store-45BLaymI.js.map

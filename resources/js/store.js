import { defineStore } from "pinia";

export const useDataStore = defineStore("DataStore", {
  state: () => ({
    selected: {
    },
    userSelected: {
    },
    pacienteSelected: {
    },
  }),
  getters: {
    getUserSelected: (state) => state.userSelected,
    getPacienteSelected: (state) => state.pacienteSelected,
  },
  actions: {
    async setUserSelected(user) {
      state.userSelected = user;
    },
    async setPacienteSelected(paciente) {
      state.pacienteSelected = paciente.id ? paciente.id : paciente;
    },
  },
});
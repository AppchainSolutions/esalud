import { defineStore } from "pinia";

export const useDataStore = defineStore("DataStore", {
    state: () => ({
        selected: {},
        userSelected: {},
        pacienteSelected: 0,
    }),
    getters: {
        getUserSelected: (state) => state.userSelected,
        getPacienteSelected: (state) => state.pacienteSelected,
    },
    actions: {
        async setUserSelected(user) {
            this.userSelected = user;
        },
        async setPaciente(paciente) {
            this.pacienteSelected = paciente.id ? paciente.id : paciente;
        },
    },
});

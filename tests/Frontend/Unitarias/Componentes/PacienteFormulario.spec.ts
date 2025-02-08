import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import PacienteFormulario from '@/components/PacienteFormulario.vue';

describe('Formulario de Paciente', () => {
    let wrapper: any;

    beforeEach(() => {
        wrapper = mount(PacienteFormulario);
    });

    it('renderiza correctamente', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('valida RUT correctamente', async () => {
        const rutInput = wrapper.find('input[name="rut"]');
        await rutInput.setValue('12.345.678-9');
        
        const validacionRut = wrapper.vm.validarRut('12.345.678-9');
        expect(validacionRut).toBeTruthy();
    });

    it('valida campos requeridos', async () => {
        await wrapper.find('form').trigger('submit');
        
        expect(wrapper.vm.errores.nombre).toBeTruthy();
        expect(wrapper.vm.errores.apellidos).toBeTruthy();
        expect(wrapper.vm.errores.rut).toBeTruthy();
    });
});

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ExamenNotificationComponent from '@/Components/Examenes/ExamenNotification.vue'

describe('Componente de Notificaciones de Exámenes', () => {
    it('renderiza lista de exámenes próximos a vencer', () => {
        const examenesProximosAVencer = [
            {
                id: 1,
                paciente: { 
                    nombre: 'Juan Pérez',
                    email: 'juan.perez@example.com'
                },
                tipo: 'Examen de Sangre',
                fecha_vencimiento: new Date().setMonth(new Date().getMonth() + 2)
            },
            {
                id: 2,
                paciente: { 
                    nombre: 'María González',
                    email: 'maria.gonzalez@example.com'
                },
                tipo: 'Radiografía',
                fecha_vencimiento: new Date().setMonth(new Date().getMonth() + 2)
            }
        ]

        const wrapper = mount(ExamenNotificationComponent, {
            props: { 
                examenes: examenesProximosAVencer 
            }
        })

        // Verificar renderizado de lista de exámenes
        const examenItems = wrapper.findAll('.examen-item')
        expect(examenItems.length).toBe(2)
        
        // Verificar contenido del primer elemento
        expect(examenItems[0].text()).toContain('Juan Pérez')
        expect(examenItems[0].text()).toContain('Examen de Sangre')
    })

    it('emite evento al seleccionar examen para notificación', async () => {
        const examen = {
            id: 1,
            paciente: { 
                nombre: 'Juan Pérez',
                email: 'juan.perez@example.com'
            },
            tipo: 'Examen de Sangre',
            fecha_vencimiento: new Date().setMonth(new Date().getMonth() + 2)
        }

        const wrapper = mount(ExamenNotificationComponent)

        // Simular selección de examen
        await wrapper.find('.btn-notificar').trigger('click')

        // Verificar emisión de evento
        expect(wrapper.emitted('notificar')).toBeTruthy()
        expect(wrapper.emitted('notificar')[0][0]).toEqual(examen)
    })
})

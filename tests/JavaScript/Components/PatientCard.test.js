import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';
import PatientCard from '@/Components/PatientCard.vue';

describe('PatientCard', () => {
    const patient = {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        birth_date: '1990-01-01'
    };

    let wrapper;

    beforeEach(() => {
        wrapper = mount(PatientCard, {
            props: {
                patient
            }
        });
    });

    it('renders patient information correctly', () => {
        expect(wrapper.text()).toContain(patient.name);
        expect(wrapper.text()).toContain(patient.email);
        expect(wrapper.text()).toContain(patient.phone);
    });

    it('emits edit event when edit button is clicked', async () => {
        const editButton = wrapper.find('[data-test="edit-patient"]');
        await editButton.trigger('click');

        expect(wrapper.emitted()).toHaveProperty('edit');
        expect(wrapper.emitted().edit[0]).toEqual([patient.id]);
    });
});

describe('Patient Management', () => {
    beforeEach(() => {
        // Login antes de cada test
        cy.visit('/login');
        cy.get('[data-test="email"]').type('test@example.com');
        cy.get('[data-test="password"]').type('password');
        cy.get('[data-test="submit"]').click();
    });

    it('can create a new patient', () => {
        cy.visit('/patients');
        cy.get('[data-test="add-patient"]').click();

        // Llenar el formulario
        cy.get('[data-test="patient-name"]').type('Jane Doe');
        cy.get('[data-test="patient-email"]').type('jane@example.com');
        cy.get('[data-test="patient-phone"]').type('9876543210');
        cy.get('[data-test="patient-birth-date"]').type('1995-05-15');

        cy.get('[data-test="save-patient"]').click();

        // Verificar que el paciente fue creado
        cy.contains('Paciente creado exitosamente');
        cy.contains('Jane Doe');
    });

    it('can search and edit patient', () => {
        cy.visit('/patients');
        
        // Buscar paciente
        cy.get('[data-test="search-input"]').type('Jane Doe');
        cy.get('[data-test="patient-card"]').should('have.length', 1);

        // Editar paciente
        cy.get('[data-test="edit-patient"]').first().click();
        cy.get('[data-test="patient-phone"]').clear().type('1112223333');
        cy.get('[data-test="save-patient"]').click();

        // Verificar actualización
        cy.contains('Paciente actualizado exitosamente');
        cy.contains('1112223333');
    });
});

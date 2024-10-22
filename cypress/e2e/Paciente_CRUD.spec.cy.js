// cypress/integration/paciente.spec.js

describe.only("Paciente CRUD Operations", () => {
    beforeEach(() => {
        // Assuming you have a login function to authenticate
        cy.login();
    });

    it("should create a new patient", () => {
        cy.get(".text-h6");
        cy.get(".v-list > :nth-child(3)").click();
        cy.get(".v-toolbar__content > .v-btn").click();
        cy.get("#rut").type("12345678-9");
        cy.get("#input-109").type("xoxo@vtr.com");
        cy.get("#nombre").type("John Doe");
        cy.get("#apellidos").type("Salazar");
        cy.get(".v-card-actions > :nth-child(3)").click();
        cy.get(".v-expansion-panel-title__overlay").click();
        cy.get("#input-147").type("12345678-9");
        cy.get('[type="submit"]').click;
        cy.contains("John Doe");
    });

    /*it("should edit an existing patient", () => {
        cy.visit("/pacientes");
        cy.contains("John Doe").parent().find("a.edit").click();

        cy.get('input[name="name"]').clear().type("John Smith");
        cy.get('button[type="submit"]').click();

        cy.url().should("include", "/pacientes");
        cy.contains("John Smith");
    });

    it("should delete a patient", () => {
        cy.visit("/pacientes");
        cy.contains("John Smith").parent().find("button.delete").click();

        cy.url().should("include", "/pacientes");
        cy.contains("John Smith").should("not.exist");
    });

    it("should view patient details", () => {
        cy.visit("/pacientes");
        cy.contains("John Doe").parent().find("a.view").click();

        cy.url().should("include", "/pacientes/");
        cy.contains("John Doe");
        cy.contains("30");
        cy.contains("123 Main St");
    });*/
});

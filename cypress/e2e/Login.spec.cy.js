describe('Login Test', () => {
  it('Ingresa con credenciales', () => {
    cy.visit('http://localhost:8000/login');
    cy.contains('Municipalidad');
    cy.get('#email');
    cy.get('#password');
//    cy.get('action.email').type('admin@example.com');
  })
})

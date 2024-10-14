describe('Login and navigate to dashboard', () => {
  it('should login and redirect to dashboard', () => {
    // Visit the login page
      cy.visit('http://localhost:8000/login');

    // Type email and password
    cy.get('#email').type('admin@example.com');
    cy.get('#password').type('password123');

    // Submit the form
    cy.get('form').submit();

    // Verify that the dashboard page is displayed
    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });
});

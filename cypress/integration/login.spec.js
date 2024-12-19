describe('Login Test', () => {
    it('should log in successfully', () => {
        // Visit the login page
        cy.visit('/login');

        // Enter email
        cy.get('input[name="email"]').type('admin@example.com');

        // Enter password
        cy.get('input[name="password"]').type('password123');

        // Click the login button
        cy.get('button[type="submit"]').click();

        // Assert that the user is redirected to the home page
        cy.url().should('include', '/dashboard');

        // Assert that the home page contains specific text
        cy.contains('Welcome to the Home Page'); // Adjust this assertion based on your page content
    });
});
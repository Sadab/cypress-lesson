describe('Heading text', () => {
    it('contains correct title', () => {
        cy.visit('http://172.24.144.1:3001/example-1');

        cy.get('h1')
            .invoke('text')
            .should('equal', 'My Awesome Web Application')

    })
});
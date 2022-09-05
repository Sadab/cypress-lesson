describe('Text box with max chars', () => {
    it('Displayes the remaining char counts', () => {
        cy.visit('http://172.24.144.1:3001/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-last-name"]')
            .type('hello');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy="input-last-name"]')
            .type('fdsbfdsbsgas   ');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');
    });

    it('prevents the user from typing more than 15 chars', () => {
        cy.visit('http://172.24.144.1:3001/example-3');

        cy.get('[data-cy="input-last-name"]')
            .type('fdsbfdsbsgashnh  fdsdfbdbds ');

        cy.get('[data-cy="input-last-name"]')
            .should('have.attr', 'value', 'fdsbfdsbsgashnh' )
    });
});
describe('Text box with max chars', () => {
    it('Displayes the remaining char counts', () => {
        cy.visit('http://172.24.144.1:3001/example-2');

        cy.get('span')
            .invoke('text')
            .should('equal', '15');

        cy.get('input')
            .type('hello');

        cy.get('span')
            .invoke('text')
            .should('equal', '10');

        cy.get('input')
            .type('fdsbfdsbsgas   ');

        cy.get('span')
            .invoke('text')
            .should('equal', '0');
    });

    it('prevents the user from typing more than 15 chars', () => {
        cy.visit('http://172.24.144.1:3001/example-2');

        cy.get('input')
            .type('fdsbfdsbsgashnh  fdsdfbdbds ');

        cy.get('input')
            .should('have.attr', 'value', 'fdsbfdsbsgashnh' )
    });
});
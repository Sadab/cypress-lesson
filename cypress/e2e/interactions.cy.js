describe('Basic page interactions', () => {
    beforeEach(() => {
        cy.visit('/example-4')
    });

    it('sets header text to the item\'s name when double clicked', () => {
        cy.get('[data-cy="box-1-items-list"] > :nth-child(2)')
            .dblclick();
        
        cy.get('[data-cy="box-1-selected-name"]')
            .invoke('text')
            .should('equal', 'Option Two');
    });

    it('displays correct count ofr the number of selected check boxes', () => {
        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(1) input')
            .check();

        cy.get('[data-cy="box-2-selected-count"]')
            .invoke('text')
            .should('equal', '1');
    });

    it('displays the name of currently selected item', () => {
        cy.get('[data-cy="box-3-dropdown"]')
            .select('Option Three');

        cy.get('[data-cy="box-3-selected-name"]')
            .invoke('text')
            .should('equal', 'Option Three');
    });

    it('should display the name the most recetly hovered item', () => {
        cy.get('[data-cy="box-4-items-list"] > :nth-child(2)')
            .trigger('mouseover');

        cy.get('[data-cy="box-4-selected-name"]')
            .invoke('text')
            .should('equal', 'Option Two');
    });
});
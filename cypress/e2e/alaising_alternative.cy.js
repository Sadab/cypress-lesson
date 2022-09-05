describe("Text box with max chars", () => {
  it("Displayes the remaining char counts", () => {
    cy.visit("http://172.24.144.1:3001/example-3");

    cy.get('[data-cy="last-name-chars-left-count"]').as("charsLeftSpan");

    cy.get('[data-cy="input-last-name"]').as("charInput");

    cy.get("@charsLeftSpan")
        .then($charsLeftSpan => {
            expect($charsLeftSpan.text()).to.equal('15');
        })

    cy.get("@charInput").type("hello");

    cy.get("@charsLeftSpan").invoke("text").should("equal", "10");

    cy.get("@charInput").type("fdsbfdsbsgas   ");

    cy.get("@charsLeftSpan").invoke("text").should("equal", "0");
  });

  it("prevents the user from typing more than 15 chars", () => {
    cy.visit("http://172.24.144.1:3001/example-3");

    cy.get('[data-cy="input-last-name"]').as("charInput");

    cy.get("@charInput").type("fdsbfdsbsgashnh  fdsdfbdbds ");

    cy.get("@charInput").should("have.attr", "value", "fdsbfdsbsgashnh");
  });
});

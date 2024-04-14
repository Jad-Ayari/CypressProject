describe('check button radio', () => {
    it('passes', () => {
      cy.visit('https://testautomationpractice.blogspot.com/')
      cy.get("#male").should("be.visible")
      cy.get("#female").should("be.visible")
      cy.get("#male").check()
      cy.get("#male").should("be.checked")
      cy.get("#female").should("not.be.checked")
    });

    it.only('passes', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get("#monday").should("be.visible")
        cy.get("#monday").check().should("be.checked")
      })
  })
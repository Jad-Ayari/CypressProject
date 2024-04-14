describe('exemple tabs', () => {
 
    beforeEach("exemple tabs", function () {
      //URL launch
      cy.visit("https://demo.opencart.com/admin/index.php")
      cy.get("#input-username").type("demo")
      cy.get("#input-password").type("demo")
      cy.get(".btn-primary").click()
      cy.get(".btn-close").click()
      cy.get("h1").should("contain", "Dashboard")
 

})

/*it('get values from table', function () {

  cy.get("#menu-customer").click()
  cy.get("#collapse-5 li:first-child").click()
  cy.get("h1").should("have.text", "Customers")
  cy.get("tbody tr:nth-child(1) td:nth-child(2)").then((e) =>
  {
    
      let x = e.text()
      cy.log(x)
  })
  cy.get("tbody tr td").each((e) =>
  {
   cy.log(e.text())
  }
  )
}
)
})*/
it('get values from table', function () {
 
    cy.get("#menu-customer").click()
    cy.get("#collapse-5 li:first-child").click()
    cy.get("h1").should("have.text", "Customers")
    cy.get("tbody tr:nth-child(1) td:nth-child(2)").then((e) =>
    {
        let x = e.text()
        cy.log(x)
    })
    for (let i=0; i<=1918; i++)
    {
        let x = parseInt(i+1);
        cy.get(".pagination li").contains(x).click()
    cy.get("tbody tr td").each((e) =>
    {
     cy.log(e.text())
    }
    )
}}
)
})
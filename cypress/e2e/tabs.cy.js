describe('exemple tabs', () => {
 
    it("exemple tabs", function () {
      //URL launch
      cy.visit("https://the-internet.herokuapp.com/windows")
   
      cy.get('.example a').invoke("removeAttr", "target").click()
      cy.get('h3').should("be.visible")
      cy.get('h3').should("contain", "New Window")
      cy.go("back")
    })

    it.only("exemple tabs autre alternative", function () {
        //URL launch
        cy.visit("https://the-internet.herokuapp.com/windows")
     
        cy.get('.example a').then((e) => {
         let url = e.prop("href")
         cy.visit(url)
 
        }
 
        )
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")
      })
})
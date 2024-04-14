
    describe("exemple tabs", () => {
        beforeEach("exemple tabs", function () {
          //URL launch
          cy.visit("https://demo.opencart.com/admin/index.php");
          /*cy.fixture("users").then( user =>{
 
            cy.get("#input-username").type(user.username);
            cy.get("#input-password").type(user.password);
     
          }
          )*/
         /* cy.readFile("cypress/datas/user.json").then( user =>{
 
            cy.get("#input-username").type(user.username);
            cy.get("#input-password").type(user.password);
     
          }
          )*/

            //API QUI RETOURNE LES USERS
      cy.writeFile("cypress/datas/BD.json",{
 
        username:"test",
        password:"test"
 
      }
      )
 
      cy.readFile("cypress/datas/BD.json").then( user =>{
 
        cy.get("#input-username").type(user.username);
        cy.get("#input-password").type(user.password);
 
      }
      )
          
            /*cy.get("#input-username").type("demo");
            cy.get("#input-password").type("demo");*/
            cy.get("button[type='submit']").click() ;
            cy.get(".btn-close").click();
            cy.get("h1").should("contain","Dashboard")
        })
     
      it("tableau de Dashboard",function() {
     
    cy.get("#menu-customer").click()
    cy.get("#collapse-5 li:first-child").click()
    cy.get("h1").should("have.text","Customers")
    cy.get(".table.table-bordered.table-hover thead tr td").should("have.length","7")
  })

})

describe('check button alert', () => {
    it('passes', () => {
      cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
      cy.get('button[onclick="jsAlert()"]').should("be.visible")
      cy.get('button[onclick="jsAlert()"]').click()
      cy.on('window:alert', (e) => {
        expect(e).contains("I am a JS Alert")
      })
      cy.get("#result").should("have.text","You successfully clicked an alert")
     
    });
    it.only('passes', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').should("be.visible")
        cy.get('button[onclick="jsConfirm()"]').click()
        
        cy.on('window:confirm', (e) => {
             expect(e).contains("I am a JS Confirm")
        })
        cy.on('window:confirm', () => false)
        cy.get("#result").should("have.text","You clicked: Cancel")
       
      });
      it.only('passes', () => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsPrompt()"]').should("be.visible")
        cy.get('button[onclick="jsPrompt()"]').click()
        
        cy.window().then((win) => {
            cy.stub(win,"prompt").returns("Welcome")
            cy.get('button[onclick="jsPrompt"]').click()
        }

        )
        //cy.get("#result").should("have.text","You clicked: Welcome")
       
      });
 
})

describe('JavaScript Alert with Double Button Example', () => {  
    it('displays an alert with two buttons', () => {    
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')    
        cy.get('button[onclick="jsPrompt()"]').should("be.visible")
        cy.get('button[onclick="jsPrompt()"]').click()
        
        // Stubbing the window.alert method  

        cy.window().then((win) => {   
            
            cy.stub(win,"prompt").returns("Welcome")   
            cy.stub(win, 'prompt').callsFake((msg) => {        
                // Simulating a dialog with two buttons
                const isOk = confirm(msg)        
                return isOk ? 'OK' : 'Cancel'    
             })     })    
             // Triggering the alert    
             cy.get('button').click()    
              // Waiting for the alert to be called and asserting its message    
              cy.get('@prompt').should('be.calledWith', 'Hello, world!')  
            }) })
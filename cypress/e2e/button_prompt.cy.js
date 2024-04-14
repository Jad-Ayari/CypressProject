describe('premier test', () => {
 
    it("Scenario 1", function () {
      //URL launch
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
      //handling prompt alert
     
      cy.window().then(function(p){
         //stubbing prompt window
         cy.get(':nth-child(3) > button').click()
         cy.wait(3000)
   
         cy.stub(p, "prompt").returns("cypress");
         cy.on('window:confirm', () => false);  //accept by Cancel button
   
         // click on Click for JS Prompt button
         // verify application message on clicking on OK
         cy.get('#result').contains('You entered: cypress')
      });
   });
  })
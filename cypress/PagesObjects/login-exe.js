https://automationexercise.com/login

class Login{
   
    setUserName(name){
        cy.get(".name").type(name);
    }
    setEmail(email){
        cy.get(".name").type(email);
    }
    clickSubmit(){
        cy.get("button[type='submit']").click();
    }
    ValidateLogin(){
        cy.get(".btn-close").click();
        cy.get("h1").should('have.text','Dashboard')
    }
 
}
export default Login;
import User from "../PagesObjects/userPage";

describe('inscrition-user', () => {
    it('inscription utilisateur', () => {
        cy.visit("https://automationexercise.com/login")
        
        const usr = new User()
        usr.setusername('Jed')
        usr.setemail("[data-qa='signup-email']",'jed.ayari@gmail.com')
        usr.clickSubmit('button[data-qa="signup-button"]')
        usr.setIdgender('#id_gender1')
        usr.setPassword("#password",'test1')
        usr.setDateofBirth('18/July/1979')
        usr.setNewsletter()
        usr.setFirstName('Jed')
        usr.setLastName('Ayari')
        usr.setCompany('Sagemcom')  
        usr.setAdress('Ben arous')
        usr.setCountry('Canada')
        usr.setState('Mourouj')
        usr.setCity('Mourouj')
        usr.setZipcode('0000')
        usr.setMobile('00001111')  
        usr.clickSubmit('button[data-qa="create-account"]')

        cy.get('h2[data-qa="account-created"]').should("have.text",'ACCOUNT CREATED!')
 
 
       })

       it.only('authentification utilisateur', () => {
        cy.visit("https://automationexercise.com/login")
        const usr1 = new User()
        usr1.setemail("[data-qa='login-email']",'jed.ayari@gmail.com')
        usr1.setPassword("[data-qa='login-password']",'test1')
        usr1.clickSubmit('button[data-qa="login-button"]')
    
    })
 
     
    });
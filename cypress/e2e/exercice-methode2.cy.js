import User from "../PagesObjects/userPage";

describe('inscription-user', () => {
    it('inscription-utilisateur', () => {
        cy.visit("https://automationexercise.com/login")
        
        cy.readFile("cypress/fixtures/localisateur.json").then( ele =>{

        cy.fixture("usr").then( user =>{
        const usr = new User()
        usr.setusername(user.username)
        usr.setemail(ele.loc_email,user.email)
        usr.clickSubmit(ele.loc_signup)
        usr.setIdgender(ele.loc_Idgender)
        usr.setPassword(ele.loc_password,user.password)
        usr.setDateofBirth(user.date)
        usr.setNewsletter()
        usr.setFirstName(user.first_name)
        usr.setLastName(user.last_name)
        usr.setCompany(user.company)  
        usr.setAdress(user.address1)
        usr.setCountry(user.country)
        usr.setState(user.state)
        usr.setCity(user.city)
        usr.setZipcode(user.zipcode)
        usr.setMobile(user.mobile_number)  
        usr.clickSubmit(ele.loc_create)

        })

    })

        cy.get('h2[data-qa="account-created"]').should("have.text",'Account Created!')
 
 
       })

      it.only('authentification utilisateur', () => {
        cy.visit("https://automationexercise.com/login")
        cy.readFile("cypress/fixtures/localisateur.json").then( ele =>{

        cy.fixture("usr").then( user =>{
            
        const usr1 = new User()
        usr1.setemail(ele.loc_logemail,user.email)
        usr1.setPassword(ele.loc_logpassword,user.password)
        usr1.clickSubmit(ele.loc_btnlogin)
    
    })
})
 
      })
     
    });
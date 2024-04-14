class User {
    setusername(username) {
     
        cy.get('input[data-qa=signup-name]').type(username)
     
     }

    setemail(loc,email) {

        cy.get(loc).type(email) 

         }

    clickSubmit(loc){
            cy.get(loc).click();
        }

    setIdgender(idgender){

     cy.get(idgender).check()
    }
    
    setPassword(loc,password){
        cy.get(loc).type(password)
    }

    setDateofBirth(date){
        let dte = date.split('/')
        cy.get('#days').select(dte[0])
        cy.get('#months').select(dte[1])
        cy.get('#years').select(dte[2]) 

    }
         
    setNewsletter(){
        cy.get('#newsletter').check()
    }

    setFirstName(first_name){
        cy.get('#first_name').type(first_name)
    }

    setLastName(last_name){
        cy.get('#last_name').type(last_name)
    }  
        
    setCompany(company){
    cy.get('#company').type(company)
    }  

    setAdress(address1){
        cy.get('#address1').type(address1)
    }
    
    setCountry(country){
        cy.get('#country').select(country)
    }
    
    setState(state){
        cy.get('#state').type(state)
    }
    
    setCity(city){
        cy.get('#city').type(city)
    }
    
    setZipcode(zipcode){
        cy.get('#zipcode').type(zipcode)
    }

    setMobile(mobile_number){    
        cy.get('#mobile_number').type(mobile_number)
    }  

       


    }
    export default User;
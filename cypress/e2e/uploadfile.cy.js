describe('upload file', () => {
    it('passes', () => {
      cy.visit('http://the-internet.herokuapp.com/upload')
 
      cy.get('#file-upload').attachFile('./upload/test.pdf')
      cy.get('#file-submit').click()
      cy.wait(1000)
      cy.get('#content h3').should('have.text',"File Uploaded!")
     
    });


    it('passes and rename file', () => {
        cy.visit('http://the-internet.herokuapp.com/upload')
   
        cy.get('#file-upload').attachFile({filePath:'./upload/test.pdf', fileName:'cypress.pdf'})
        cy.get('#file-submit').click()
        cy.wait(1000)
        cy.get('#content h3').should('have.text',"File Uploaded!")
       
      });

      it.only('passes', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['./upload/test.pdf','./upload/test2.pdf'])
        //cy.get('#file-submit').click()
        cy.wait(1000)
        cy.get('#fileList').should('not.have.text',"No File Selected")
    })
    
})

// Automatización de API 
var value;
describe('Buscar Usuario',() =>{
    
    it ('para buscar usuario',() => {
        
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/user113', // Endpoint Buscar Useers
       
            form: false, 
            body: {
                    },
            headers: {
                "Content-Type": 'application/json'
              },
        }).then(function(response){
            this.value = response.body.username,
            cy.log("Usuario: "+this.value),
            this.value = response.body.email,
            cy.log("Email : "+this.value),
             expect(response.status).to.equal(200)
            })
    })
 })


// Automatización de API 
var value;
describe('Eliminar Usuario',() =>{
    
    it ('para buscar usuario',() => {
        
        cy.request({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/user/user113', // Endpoint Delete Users
     
            form: false, 
            body: {
                    },
            headers: { 
                "Content-Type": 'application/json'
              },
        }).then(function(response){
            this.value = response.body.code,
            cy.log("Codigo: "+this.value),
            this.value = response.body.email,
             expect(response.status).to.equal(200)
            })
    })
 })

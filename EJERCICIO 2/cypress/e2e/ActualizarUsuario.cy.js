
// Automatización de API 
var value;
describe('Actualizaar Usuarios',() =>{
    
    it ('to create usuario',() => {
        
        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/user/user113', // Endpoint Crear Useers
     
            form: false, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
                    "id": 1,
                    "username": "user113",
                    "firstName": "firstName",
                    "lastName": "secondName",
                    "email": "estevanga@icloud.com",
                    "password": "password1",
                    "phone": "0989442049",
                    "userStatus": 1
                },
            headers: {
                "Content-Type": 'application/json'
              },
        }).then(function(response){
            this.value = response.body.code,
             expect(response.status).to.equal(200),
             cy.log("code: "+this.value),
             cy.log(response.body.type),
             cy.log(response.body.message)
             
            })
    })
 })

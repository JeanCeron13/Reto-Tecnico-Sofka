
// Automatización de API 
var value;
describe('Crear Usuarios',() =>{
    
    it ('to create usuario',() => {
        
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user', // Endpoint Crear Useers
     
            form: false, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
                    "id": 1,
                    "username": "user113",
                    "firstName": "firstName",
                    "lastName": "secondName",
                    "email": "email",
                    "password": "password1",
                    "phone": "0989442049",
                    "userStatus": 1
                },
            headers: {
                "Content-Type": 'application/json'
              },
        }).then(function(response){
            this.value = response.body.code,
            cy.log("Code: "+this.value),
             expect(response.status).to.equal(200)
            })
    })
 })

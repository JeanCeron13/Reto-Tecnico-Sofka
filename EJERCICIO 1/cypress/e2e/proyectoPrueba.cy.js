import { HomePage } from '../support/pages/homePage'
import { Register} from '../support/pages/register'


describe('Proyecto de prueba- compras de productos', () => {
  let   registerData 
before ("before", ()=>{
  cy.fixture('registerData').then(data=>{
    registerData = data;
  });

});
  

  //crear instancia de nuestra clase 

  const homePage = new HomePage ();
  const register = new Register ();

  beforeEach("beforeEach", () => {
      cy.visit('');
      
  });
  it(" Compra de productos ", () => {
 
    //•	 Agregar dos productos al carrito
    
 
    //selección de los productos
    homePage.clickproducto1();
  homePage.clickAddCard();
  homePage.clickHome();
  
  homePage.clickproducto2();
  homePage.clickAddCard();
  homePage.clickHome();
  homePage.clickproducto3();
  homePage.clickAddCard();
  homePage.clickHome();
  homePage.clickHome();
  homePage.clickcard();
  //	Visualizar el carrito
    
  homePage.clickplace();
 
  //	Completar el formulario de compra
   
  register.writeName (registerData.name);
  register.writeCountry (registerData.country);
  register.writecity (registerData.city);
  register.writeCard (registerData.credit_car);
  register.writeMounth (registerData.month);
  register.writeYear(registerData.year);
  register.selectSubmit(); 
  //Finalizar la compra
  

  });
});





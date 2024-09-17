export class HomePage{
  
  
    constructor() {
        this.producto1 = 'div>h4>a[href="prod.html?idp_=1"]';
        this.producto2 = 'div>h4>a[href="prod.html?idp_=6"]';
        this.producto3 = 'div>h4>a[href="prod.html?idp_=5"]';
        this.addCard ="[class='btn btn-success btn-lg']";
        this.home="div>ul>li>a[href='index.html']";
        this.card="#cartur"; 
    };

    

    clickproducto1(){
        cy.get(this.producto1).click();
    };
    clickproducto2(){
        cy.get(this.producto2).click();
    };
    clickproducto3(){
        cy.get(this.producto3).click();
    };

    clickAddCard(){
        cy.get(this.addCard).click();
    }

    clickHome(){
        cy.get(this.home).click();
    }

    clickcard(){
        cy.get(this.card).click();
    }

    clickplace(){
        cy.xpath("//BUTTON[@type='button'][text()='Place Order']").click()
    }

};




export class Register{
    constructor (){
        this.name="#name"
        this.country="#country"
        this.city="#city"
        this.card="#card"
        this.month="#month"
        this.year="#year" 
    }

writeName (name) {
    cy.get(this.name).type(name);
}

writeCountry (country){
    cy.get(this.country).type(country);
}

writecity(city){
    cy.get(this.city).type(city)
}

writeCard(card){
    cy.get(this.card).type(card)
}


writeMounth(month){
    cy.get(this.month).type(month)
}


writeYear(year){
    cy.get(this.year).type(year)
}

selectSubmit (){
    cy.xpath("//BUTTON[@type='button'][text()='Purchase']").click()
}






}
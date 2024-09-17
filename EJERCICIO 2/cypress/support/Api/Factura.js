export class Factura{
    constructor (){
        this.firstname="input[name=firstname"
        this.lastname="input[name=lastname"
        this.email="input[id=input-payment-email"
        this.telephone="input[name=telephone"
        this.company="input[name=company"
        this.address_1="input[name=address_1"
        this.address_2="input[name=address_2"
        this.city="input[name=city"
        this.postcode="input[name=postcode"
    }
writeFirstName (firstname) {
    cy.get(this.firstname).type(firstname);
}

writeLastName (lastname) {
    cy.get(this.lastname).type(lastname);
}

writeEmail (email) {
    cy.get(this.email).type(email);
}

writeTelephone (telephone) {
    cy.get(this.telephone).type(telephone);
}
writeCompany (company){
    cy.get(this.company).type(company);
}

writeAddress_1(address_1){
    cy.get(this.address_1).type(address_1)
}

writeAddress_2(address_2){
    cy.get(this.address_2).type(address_2)
}

writeCity(city){
    cy.get(this.city).type(city)
}


writePostCode(postcode){
    cy.get(this.postcode).type(postcode)
}

}
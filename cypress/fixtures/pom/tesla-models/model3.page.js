class Model3 {
    get buttonOrderNow() {return cy.contains("Order Now")}
    get textModel3() {return cy.contains('Model 3')}
}

export default new Model3()
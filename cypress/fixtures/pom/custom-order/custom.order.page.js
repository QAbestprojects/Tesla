class CustomOrder {
    get fieldsetModel3() {return cy.get('fieldset [value="$MT322"]')}
    get paintPearlWhite() {return cy.get('[data-id="$PPSW-option"]')}
    get paintRedMultiCoat() {return cy.get('[id="PAINT_$PPMR"]')}
    get priceRedMultuCoat() {return cy.get('[data-id="PAINT-price"]')}
    get wheels18Aero() {return cy.get('[id="WHEELS_$W40B"]')}
    get wheels19Sport() {return cy.get('[id="WHEELS_$W41B"]')}
    get price19SportWheels() {return cy.get('[data-id="WHEELS-price"]')}
}

export default new CustomOrder()
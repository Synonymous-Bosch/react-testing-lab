describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update the display of the running total when number buttons are pressed', () => {
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '13')
  })

  it('should update the display with the result of the operation when arithmetical operations pressed', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('.display').should('contain', '4')
  })

  it('should allow operations to be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1')
  })

  it('should return the correct output for positive numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3')
  })

  it('should return the correct output for negative numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-8')
  })

  it('should return the correct output for decimal numbers', () => {
    cy.get('#number3').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9.42')
  })

  it('should return the correct output for very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '680399757')
  })

  it('should return "undefined" if number divided by 0', () => {
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'undefined')
  })


})
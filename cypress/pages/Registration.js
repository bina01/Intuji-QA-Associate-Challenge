class RegisterPage {
  visit() {
    cy.visit('/signup');
  }

  fillName(name) {
    cy.get('input[data-qa="signup-name"]').type(name);
  }

  fillEmail(email) {
    cy.get('input[data-qa="signup-email"]').type(email);
  }

  clickSignupButton() {
    cy.get('button[data-qa="signup-button"]').click();
  }

  verifyEmailUniquenessError() {
    cy.contains('Email Address already exist!').should('be.visible');
  }

  selectTitle(title = 'Mr') {
    if (title === 'Mr') {
      cy.get('#id_gender1').check();
    } else if (title === 'Mrs') {
      cy.get('#id_gender2').check();
    }
  }

  fillPassword(password) {
    cy.get('#password').clear().type(password);
  }

  selectDateOfBirth(day, month, year) {
    cy.get('#days').select(day.toString());
    cy.get('#months').select(month);
    cy.get('#years').select(year.toString());
  }

  fillFirstName(firstName) {
    cy.get('#first_name').clear().type(firstName);
  }

  fillLastName(lastName) {
    cy.get('#last_name').clear().type(lastName);
  }

  fillCompany(company) {
    cy.get('#company').clear().type(company);
  }

  fillAddress(address) {
    cy.get('#address1').clear().type(address);
  }

  fillAddress2(address2) {
    cy.get('#address2').clear().type(address2);
  }

  selectCountry(country) {
    cy.get('#country').select(country);
  }

  fillState(state) {
    cy.get('#state').clear().type(state);
  }

  fillCity(city) {
    cy.get('#city').clear().type(city);
  }

  fillZipcode(zipcode) {
    cy.get('#zipcode').clear().type(zipcode);
  }

  fillMobileNumber(mobileNumber) {
    cy.get('#mobile_number').clear().type(mobileNumber);
  }

  clickCreateAccount() {
    cy.get('button[data-qa="create-account"]').click();
  }
}

export default RegisterPage;

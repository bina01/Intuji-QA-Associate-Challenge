import RegisterPage from "../pages/Registration";
import { fa, faker } from "@faker-js/faker";

describe("Complete User Registration Flow", () => {
  const registerPage = new RegisterPage();
  let testUser;

  before(() => {
    cy.fixture("user").then(({ newUser }) => {
      testUser = newUser;
      testUser.name = faker.name.fullName();
      testUser.email = faker.internet.email();
    });
  });

  it("Register new user and complete full form", () => {
    registerPage.visit();

    // Initial signup page
    registerPage.fillName(testUser.name);
    registerPage.fillEmail(testUser.email);
    registerPage.clickSignupButton();

    // Wait for full registration form page to load
    cy.url().should("include", "/signup");

    // Fill full account info form
    registerPage.selectTitle("Mr");
    registerPage.fillPassword(testUser.password);
    registerPage.selectDateOfBirth(testUser.day, testUser.month, testUser.year);
    registerPage.fillFirstName(testUser.firstName);
    registerPage.fillLastName(testUser.lastName);
    registerPage.fillCompany(testUser.company);
    registerPage.fillAddress(testUser.address);
    registerPage.fillAddress2(testUser.address2);
    registerPage.selectCountry(testUser.country);
    registerPage.fillState(testUser.state);
    registerPage.fillCity(testUser.city);
    registerPage.fillZipcode(testUser.zipcode);
    registerPage.fillMobileNumber(testUser.mobileNumber);

    // Submit registration
    registerPage.clickCreateAccount();

 

  });

  it("Handle duplicate email error", () => {
    registerPage.visit();
    const existingEmail = "testuser@example.com"; // Use a known existing email

    registerPage.fillName("Test User");
    registerPage.fillEmail(existingEmail);
    registerPage.clickSignupButton();

    registerPage.verifyEmailUniquenessError();
  });

  
  it("After Registration, verify the user is logged in", () => {
    
    cy.visit("/login");
    cy.get('input[data-qa="login-email"]').type(testUser.email);
    cy.get('input[data-qa="login-password"]').type(testUser.password);
    cy.get('button[data-qa="login-button"]').click();
    cy.get('a[href="/logout"]').should('be.visible');
  });

});

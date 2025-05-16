import CheckoutPage from "../pages/Checkout";
const checkoutPage = new CheckoutPage();

describe("Checkout Flow with Stored Login Session", () => {
  let user, payment;

  before(() => {
    cy.fixture("user").then((data) => {
      user = data;
    });
    cy.fixture("paymentDetail").then((data) => {
      payment = data;
    });
  });

  beforeEach(() => {
    cy.fixture("login").then((user) => {
      cy.loginWithSession(user.email, user.password);
    });
  });

  it("should checkout successfully using session", () => {
    cy.visit("/view_cart");
    cy.contains("Logged in as").should("contain", "New user1");

    cy.get("body").then(($body) => {
      // Then check if 'Proceed To Checkout' button is present
      if ($body.find("a.btn.btn-default.check_out").length > 0) {
        cy.contains("Proceed To Checkout").click();
        cy.contains("Place Order").click();

        checkoutPage.fillPaymentDetails(payment);

        // Confirm success
        cy.contains("Order Placed!").should("be.visible");
      } else {
        return;
      }
    });
  });
});

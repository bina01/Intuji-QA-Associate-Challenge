class CheckoutPage {
  proceedToCheckout() {
    cy.contains("Proceed To Checkout").click();
  }

  fillPaymentDetails(payment) {
    cy.get('input[name="name_on_card"]').type(payment.cardName);
    cy.get('input[name="card_number"]').type(payment.cardNumber);
    cy.get('input[name="cvc"]').type(payment.cvc);
    cy.get('input[name="expiry_month"]').type(payment.expiryMonth);
    cy.get('input[name="expiry_year"]').type(payment.expiryYear);
    cy.get("#submit").click();
  }

  verifyOrderConfirmation() {
    cy.get("h2").should("contain.text", "Order Placed!");
  }
}
export default CheckoutPage;

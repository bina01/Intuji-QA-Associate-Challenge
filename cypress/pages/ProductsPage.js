class CartPage {
  visitHome() {
    cy.visit('https://automationexercise.com');
  }

  addProductByName(productName) {
    cy.contains(productName).scrollIntoView().trigger('mouseover');
    cy.contains(productName).parent().contains('Add to cart').click();
  }

  continueShopping() {
    cy.contains('Continue Shopping').click();
  }

  goToCart() {
    cy.contains('View Cart').click();
  }

  changeQuantity(productName, quantity) {
    cy.get('tr')
      .contains(productName)
      .parent()
      .find('input[type="number"]')
      .clear()
      .type(quantity);
    cy.wait(1000); // wait for update if needed
  }

  removeProduct(productName) {
    cy.get('tr')
      .contains(productName)
      .parent()
      .find('.cart_delete a')
      .click();
  }

  verifyTotal(expectedTotal) {
    cy.get('.cart_total_price').then(($els) => {
      const prices = [...$els].map(el => parseFloat(el.innerText.replace(/[^\d.]/g, '')));
      const total = prices.reduce((acc, val) => acc + val, 0);
      expect(total).to.eq(expectedTotal);
    });
  }
}

export const cartPage = new CartPage();

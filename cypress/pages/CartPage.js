class CartPage {
  visitProduct(url) {
    cy.visit(`https://automationexercise.com${url}`);
  }

  addToCart() {
    cy.contains('Add to cart').click();
  }

  continueShopping() {
    cy.contains('Continue Shopping').click();
  }

  viewCart() {
    cy.contains('View Cart').click();
  }

  verifyProductQuantity(productName, expectedQty) {
    cy.contains('tr', productName)
      .find('.cart_quantity')
      .invoke('text')
      .then(text => {
        expect(parseInt(text.trim())).to.eq(expectedQty);
      });
  }

  verifyProductTotal(productName, expectedTotal) {
    cy.contains('tr', productName)
      .find('.cart_total_price')
      .invoke('text')
      .then(text => {
        const total = parseFloat(text.replace(/[^\d]/g, ''));
        expect(total).to.eq(expectedTotal);
      });
  }

  removeProduct(productName) {
    cy.contains('tr', productName)
      .find('.cart_delete a')
      .click();
  }

  verifyOnlyOneProductLeft() {
    cy.get('#cart_info_table tbody tr').should('have.length', 1);
  }
}

export default CartPage;










// class CartPage {
//   visitProduct(url) {
//     cy.visit(`https://automationexercise.com${url}`);
//   }

//   addToCart() {
//     cy.contains('Add to cart').click();
//   }

//   continueShopping() {
//     cy.contains('Continue Shopping').click();
//   }

//   viewCart() {
//     cy.contains('View Cart').click();
//   }

//   changeQuantity(productName, quantity) {
//     cy.get('tr')
//       .contains(productName)
//       .parents('tr')
//       .find('.cart_quantity input')
//       .clear()
//       .type(quantity.toString());
//   }

//   removeProduct(productName) {
//     cy.get('tr')
//       .contains(productName)
//       .parents('tr')
//       .find('.cart_delete a')
//       .click();
//   }

//   verifyProductTotal(productName, expectedTotal) {
//     cy.get('tr')
//       .contains(productName)
//       .parents('tr')
//       .find('.cart_total_price')
//       .invoke('text')
//       .then((text) => {
//         const total = parseFloat(text.replace(/[^\d]/g, ''));
//         expect(total).to.eq(expectedTotal);
//       });
//   }

//   verifyCartProductCount(expectedCount) {
//     cy.get('#cart_info_table tbody tr').should('have.length', expectedCount);
//   }
// }

// export default CartPage;

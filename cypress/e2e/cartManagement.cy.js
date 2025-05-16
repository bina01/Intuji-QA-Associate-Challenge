import CartPage  from '../pages/CartPage';

const cartPage = new CartPage(); 
describe('Cart and Quantity Management with Repeated Add-to-Cart', () => {
  let productA, productB;

  before(() => {
    cy.fixture('cart').then((data) => {
      productA = data.productA;
      productB = data.productB;
    });
  });

  it('adds products with correct quantity and verifies cart', () => {
    // Add Product A three times
    for (let i = 0; i < productA.quantity; i++) {
      cartPage.visitProduct(productA.url);
      cartPage.addToCart();

      if (i < productA.quantity - 1) {
        cartPage.continueShopping();
      } else {
        cy.contains('View Cart').click();
      }
    }

    // Verify Product A quantity and total
    cartPage.verifyProductQuantity(productA.name, productA.quantity);
    cartPage.verifyProductTotal(productA.name, productA.quantity * productA.price);

    // Continue shopping and add Product B once
    // cartPage.continueShopping();
    cartPage.visitProduct(productB.url);
    cartPage.addToCart();
    cartPage.viewCart();

    // Verify Product B
    cartPage.verifyProductQuantity(productB.name, productB.quantity);
    cartPage.verifyProductTotal(productB.name, productB.price);

    // Total Calculation
    const expectedTotal = (productA.quantity * productA.price) + productB.price;

    // Final total verification
 

    cy.get('#cart_info_table .cart_total_price').then(($els) => {
    const totals = $els.toArray().map(el =>
        parseFloat(el.innerText.replace(/[^\d]/g, ''))
    );
    const totalSum = totals.reduce((sum, val) => sum + val, 0);
    expect(totalSum).to.eq(expectedTotal);
    });



    // Remove Product B and verify cart update
    cartPage.removeProduct(productB.name);
    cartPage.verifyOnlyOneProductLeft();
    cartPage.verifyProductTotal(productA.name, productA.quantity * productA.price);
  });
});







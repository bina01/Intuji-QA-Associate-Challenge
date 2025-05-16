import ProductsPage from '../pages/ProductsPage';

describe('Product Browsing & Filtering', () => {
  const productsPage = new ProductsPage();

  before(() => {
    productsPage.visit();
  });

  it('Filter products by Women > Dress and verify', () => {
    productsPage.filterByCategory('Women', 'Dress');

    // Verify product list includes at least one product with "Dress" in name or description
    productsPage.getProductNames().each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .then((text) => {
          expect(text.toLowerCase()).to.include('dress');
        });
    });
  });

//   it('Click product and verify detail info', () => {
//     // Click the first product with 'Dress' in name (adjust as needed)
//     productsPage.getProductNames()
//       .contains(/dress/i)
//       .first()
//       .then(($product) => {
//         const productName = $product.text().trim();
//         productsPage.clickProductByName(productName);

//         // Verify product detail page info
//         productsPage.getProductDetailName().should('contain.text', productName);
//         productsPage.getProductDetailPrice().should('exist');
//         productsPage.getProductDetailAvailability().should('contain.text', 'Availability');
//       });
//   });
});

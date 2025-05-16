import AuthPage from "../pages/AuthPage";
const authPage = new AuthPage();
describe("Logout and Re-login Flow", () => {
  let user;

  before(() => {
    cy.fixture("login").then((data) => {
      user = data;
    });
  });

  it("should logout and relogin preserving the user state", () => {
    // First login
    authPage.login(user.email, user.password);

    // Verify user is logged in
    authPage.verifyLoggedIn();

    // Logout
    authPage.logout();

    // Verify logout success
    authPage.verifyLoggedOut();

    // Re-login
    authPage.login(user.email, user.password);

    // Verify login state again
    authPage.verifyLoggedIn();
  });
});

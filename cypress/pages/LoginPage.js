class LoginPage {
    elements = {
        makeAppointmentButton: () => cy.get('#btn-make-appointment'),
        loginField: () => cy.get('#txt-username'),
        passwordField: () => cy.get('#txt-password'),
        loginButton: () => cy.get('#btn-login'),
        errorMessage: () => cy.get('.text-danger')
    }

    clickmakeAppointmentButton() {
        this.elements.makeAppointmentButton().click()
    };

    inputLogin(login) {
        this.elements.loginField().type(login)
    };

    inputPassword(password) {
        this.elements.passwordField().type(password)
    };

    clickLoginButton() {
        this.elements.loginButton().click()
    };

    checkErrorMessage() {
        this.elements.errorMessage().should('have.text', 'Login failed! Please ensure the username and password are valid.')
    };

    login(login, password) {
        this.elements.makeAppointmentButton().click()
        this.elements.loginField().type(login)
        this.elements.passwordField().type(password)
        this.elements.loginButton().click()
    };
}
export default LoginPage;
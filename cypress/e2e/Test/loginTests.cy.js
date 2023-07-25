/// <reference types="cypress" />
import LoginPage from "../../pages/LoginPage.js";
import AppointmentPage from "../../pages/AppointmentPage.js";

const loginPage = new LoginPage();
const appointmentPage = new AppointmentPage();

describe('Cypress test', () => {

    beforeEach(function () {
        cy.fixture('loginTest').then((data) => {
            cy.log('Open login page')
            cy.visit(data.mainURL)
        });
    });

    it('Login test', function () {
        cy.fixture('loginTest').then(data => {

            cy.log('Click "Make appointment button"')
            loginPage.clickmakeAppointmentButton()

            cy.log('Input email')
            loginPage.inputLogin(data.email)

            cy.log('Input password')
            loginPage.inputPassword(data.password)

            cy.log('Click login button')
            loginPage.clickLoginButton()

            cy.log('Check fields')
            appointmentPage.checkHeader()
            appointmentPage.checkFacilityField()
            appointmentPage.checkReadmissionCheckBox()
            appointmentPage.checkHealthCareProgramField()
            appointmentPage.checkVisitDateField()
            appointmentPage.checkCommentField()
        })
    })

    it('Login negative test', function () {
        cy.fixture('loginTest').then(data => {
            cy.log('Click "Make appointment button"')
            loginPage.clickmakeAppointmentButton()

            cy.log('Input bad email')
            loginPage.inputLogin(data.bad_email)

            cy.log('Input bad password')
            loginPage.inputPassword(data.bad_password)

            cy.log('Click login button')
            loginPage.clickLoginButton()

            cy.log('Check error messages')
            loginPage.checkErrorMessage()
        })
    })
});

/// <reference types="cypress" />
import LoginPage from "../../pages/LoginPage.js";
import AppointmentPage from "../../pages/AppointmentPage.js";
import AppointmentConfirmationPage from "../../pages/AppointmentConfirmationPage.js";

const loginPage = new LoginPage();
const appointmentPage = new AppointmentPage();
const confirmationPage = new AppointmentConfirmationPage();

describe('Cypress test', () => {

    beforeEach(function () {
        cy.fixture('loginTest').then((data) => {
            cy.log('Open login page')
            cy.visit(data.mainURL)
            loginPage.login(data.email, data.password)
        });
    });

    it('Make appointment test', function () {
        cy.fixture('appointmentTest').then(data => {
            let date = new Date().toLocaleDateString('en-GB');

            cy.log('Set facility')
            appointmentPage.selectFacilityDropBox(data.line)

            cy.log('Set readmission check box')
            appointmentPage.setReadmission()

            cy.log('Select heath programm')
            appointmentPage.selectHealthProgramm(data.healthProgramm)

            cy.log('Set comment')
            appointmentPage.setComment(data.comment)

            cy.log('Set visit date')
            appointmentPage.setVisitDate(date)

            cy.log('Click book appointment button')
            appointmentPage.clickBookAppointment()

            cy.log('Check Header')
            confirmationPage.checkHeader()

            cy.log('Check Sub Header')
            confirmationPage.checkSubHeader()

            cy.log('Check Facility')
            confirmationPage.checkFacility(data.facility)

            cy.log('Check Readmission')
            confirmationPage.checkHospitalReadmission(data.readmission)

            cy.log('Check Healthcare Program')
            confirmationPage.checkHeathCareProgramm(data.healthProgramm)

            cy.log('Check Visit Date')
            confirmationPage.checkVisitDate(date)

            cy.log('Check Comment')
            confirmationPage.checkComment(data.comment)
        })
    })
});

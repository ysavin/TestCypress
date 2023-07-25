class AppointmentConfirmationPage {
    elements = {
        header: () => cy.get('h2'),
        subHeader: () => cy.get('.lead'),
        facility: () => cy.get('#facility'),
        hospitalReadmission: () => cy.get('#hospital_readmission'),
        heathCareProgramm: () => cy.get('#program'),
        visitDate: () => cy.get('#visit_date'),
        comment: () => cy.get('#comment')
    }

    checkHeader() {
        this.elements.header().should('be.visible').should('have.text', 'Appointment Confirmation')
    };

    checkSubHeader() {
        this.elements.subHeader().should('be.visible').should('have.text', 'Please be informed that your appointment has been booked as following:')
    };

    checkFacility(facility) {
        this.elements.facility().should('be.visible').should('have.text', facility)
    };

    checkHospitalReadmission(readmission) {
        this.elements.hospitalReadmission().should('be.visible').should('have.text', readmission)
    };

    checkHeathCareProgramm(programm) {
        this.elements.heathCareProgramm().should('be.visible').should('have.text', programm)
    };

    checkVisitDate(date) {
        this.elements.visitDate().should('be.visible').should('have.text', date)
    };

    checkComment(comment) {
        this.elements.comment().should('be.visible').should('have.text', comment)
    };
}
export default AppointmentConfirmationPage;
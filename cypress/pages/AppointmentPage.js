class AppointmentPage {
    elements = {
        header: () => cy.get('h2'),
        facilityFieldHeader: () => cy.get(':nth-child(1) > .col-sm-offset-3'),
        facilityDropBox: () => cy.get('#combo_facility'),
        facility: () => cy.get('//*[@id="combo_facility"]/option[3]'),
        readmissionCheckBoxHeader: () => cy.get('.checkbox-inline'),
        readmissionCheckBox: () => cy.get('#chk_hospotal_readmission'),
        healthCareProgramFieldHeader: () => cy.get(':nth-child(3) > .col-sm-offset-3'),
        healthCareProgramRadio: (name) => cy.contains(name),
        visitDateFieldHeader: () => cy.get(':nth-child(4) > .col-sm-offset-3'),
        visitDateFieldInput: () => cy.get('#txt_visit_date'),
        commentFieldHeader: () => cy.get(':nth-child(5) > .col-sm-offset-3'),
        commentField: () => cy.get('#txt_comment'), 
        bookAppointmentButton: ()=>cy.get('#btn-book-appointment')
    }

    checkHeader() {
        this.elements.header().should('be.visible').should('have.text', 'Make Appointment')
    };

    checkFacilityField() {
        this.elements.facilityFieldHeader().should('be.visible').should('have.text', 'Facility')
    };

    checkReadmissionCheckBox() {
        this.elements.readmissionCheckBoxHeader().should('be.visible').should('have.text', '\n                             Apply for hospital readmission\n                        ')
    };

    checkHealthCareProgramField() {
        this.elements.healthCareProgramFieldHeader().should('be.visible').should('have.text', 'Healthcare Program')
    };

    checkVisitDateField() {
        this.elements.visitDateFieldHeader().should('be.visible').should('have.text', 'Visit Date (Required)')
    };

    checkCommentField() {
        this.elements.commentFieldHeader().should('be.visible').should('have.text', 'Comment')
    };

    selectFacilityDropBox(line) {
        this.elements.facilityDropBox().select(line)
    };

    setReadmission() {
        this.elements.readmissionCheckBox().click()
    };

    selectHealthProgramm(programm) {
        this.elements.healthCareProgramRadio(programm).click()
    };

    setVisitDate(date) {
        this.elements.visitDateFieldInput().type(date).click()
    };

    setComment(comment) {
        this.elements.commentField().click().type(comment)
    };

    clickBookAppointment() {
        this.elements.bookAppointmentButton().click()
    };
}
export default AppointmentPage;
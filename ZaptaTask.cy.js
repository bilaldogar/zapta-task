describe('Testing the Staysucasa Website', () => {
    beforeEach(() => {
        cy.visit('https://www.staysucasa.com/');
    });

    it('Checking the Sucasa Standard section', () => {
        cy.contains('The Sucasa Standard');
        cy.contains('Work From Anywhere');
        cy.contains('Transparent Pricing');
        cy.contains('Premium Properties');
    });

    it('Checking the Work From Anywhere section', () => {
        cy.contains('Work From Anywhere')
        cy.contains('Find Stays').click();
        cy.url().should('eq', 'https://www.staysucasa.com/index?#featured');
    });

    it('Taking a image of the page', () => {
        const now = new Date();
        const timestamp = now.toISOString().slice(11, 19).replace(/:/g, '-');
        const imageName = `FIRST_${timestamp}`;
        cy.screenshot(imageName);
    });
});

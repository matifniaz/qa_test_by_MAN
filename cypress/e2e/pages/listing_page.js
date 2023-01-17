
class listing {

    elements = {
        total_card:()=>cy.xpath("//div[@class='image-thumb']"),
        total_download_links: () => cy.xpath("//span[contains(text(),'Download')]"),
        total_author_names: () => cy.xpath("//div[@class='display-block']/div/span[1]"),
        header_total_picture: () => cy.xpath("//h1[normalize-space()='Pictures (30)']"),

        detail_link: (img_no) => cy.xpath("(//div[@class='display-block']/div/span[1])[" + img_no + "]"),
        download_link: (img_no) => cy.xpath("(//span[contains(text(),'Download')])[" + img_no + "]"),
        
    }

    verify_Gallery_Listing() {
        this.elements.header_total_picture().should('be.visible').should('contain', '30')
        this.elements.total_author_names().should('have.length', 30)
        this.elements.total_download_links().should('have.length', 30)
    }


}
module.exports = new listing()
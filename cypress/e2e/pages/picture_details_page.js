class picture_details_page {
    elements = {
        author_name: () => cy.xpath("//span[normalize-space()][1]"),
        download_link: () => cy.xpath("//span[@class='button download']"),
        back_link:()=> cy.xpath("//a[contains(text(),'Back')]")



    }

}
module.exports = new picture_details_page()
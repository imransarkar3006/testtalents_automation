class DashboardPage{
    constructor(page){
        this.page=page

        this.profileDropDownSelector = page.locator('#box-40.center-pic-in-div.round-div')
        this.profileLinkLocator = page.locator('a[href="/dashboard/my-profile"]')
        this.emailInputFieldLocator = page.locator('input[placeholder = "Business Email"]')
        
      

    }

    



}
export default DashboardPage
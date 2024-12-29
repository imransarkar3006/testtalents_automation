class LoginPage{
    constructor(page){
        this.page=page

        this.loginLinkLocator = page.locator('a[href="/auth/login"]')
        
        this.loginEmailInputFieldLocator = page.locator('#recruiterLoginEmail')
        this.loginPassInputFieldLocator = page.locator('#recruiterLoginPassword')
        this.checkboxInputLocator = page.locator('input[type="checkbox"]')
        this.signinButtonLocator = page.locator('#recruiterLoginFormButton')
        


    }





}
class LoginPage{
    constructor(page){
        this.page=page

        this.loginLinkLocator = page.locator('a[href="/auth/login"]')
        
        this.loginEmailInputFieldLocator = page.locator('input[type="email"]')
        this.loginPassInputFieldLocator = page.locator('#recruiterLoginPassword')
        this.checkboxInputLocator = page.locator('input[type="checkbox"]')
        this.signinButtonLocator = page.locator('#recruiterLoginFormButton')

    }

    async recruiterLogin(loginEmail, loginPass){
       await  this.loginLinkLocator.click()
        await this.loginEmailInputFieldLocator.fill(loginEmail)
        await this.loginPassInputFieldLocator.fill(loginPass)
        await this.checkboxInputLocator.click()
        await this.signinButtonLocator.click()
    }



}
export default LoginPage
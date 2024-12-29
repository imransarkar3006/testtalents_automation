class RegistrationPage{
    constructor(page){
        this.page=page

        this.registrationLinkLocator = page.locator('a[href="/auth/register"]').nth(1)
        this.fullNameInputFieldLocator = page.locator('#recruiterRegisterFullName')
        this.buisnessEmailInputFieldLocator = page.locator('#recruiterRegisterEmail')
        this.regPassInputFieldLocator = page.locator('#recruiterRegisterPassword')
        this.regConfirmPassInputFieldLocator = page.locator('#recruiterRegisterConfirmPassword')
        this.signupButtonLocator = page.locator('#recruiterRegisterFormButton')



    }





}
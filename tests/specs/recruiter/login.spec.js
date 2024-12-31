import {test, expect} from '@playwright/test'
import testConfig from '../../../testconfig'
import LoginPage from '../../pageObjects/recruiter/loginPage'
import DashboardPage from '../../pageObjects/recruiter/dashboardPage'
import { faker } from '@faker-js/faker'

test.describe('recruiter Login', async()=>{

  test.only('Login with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page)
    const dashboardPage = new DashboardPage(page)
    await page.goto(`${testConfig.baseURL}`)
    await expect(page).toHaveTitle(/TestTalents/)
    await page.waitForTimeout(5000)
    await page.waitForLoadState()
    await loginPage.recruiterLogin(testConfig.loginUserEmail, testConfig.loginUserPassword)
    await expect(page).toHaveTitle(/Dashboard/)
    // await dashboardPage.profileDropDownSelector.click()
    // await dashboardPage.profileLinkLocator.click()
    // expect (dashboardPage.emailInputFieldLocator).toHaveText(testConfig.loginUserEmail)

   

    

  })

})




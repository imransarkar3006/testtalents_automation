// @ts-check
import {test, expect} from '@playwright/test'
import testConfig from '../../../testconfig'
import RegistrationPage from '../../pageObjects/recruiter/registrationPage'
import { faker } from '@faker-js/faker'

test.describe('recruiter registration', async()=>{

  test('registration with valid credentials', async ({ page }) => {

    const fakeFullName = faker.person.fullName()
    

    const registrationPage = new RegistrationPage(page)
    await page.goto(`${testConfig.baseURL}`)
    await expect(page).toHaveTitle(/TestTalents/)
    await registrationPage.registerWithValidCredentials(fakeFullName, )
  })
})



import dotenv from 'dotenv'
dotenv.config({
    path: `.env.test`,
    override: true
})

const testConfig = {
    baseURL: process.env.URL,
    loginUserEmail: process.env.LOGIN_EMAIL,
    loginUserPassword: process.env.LOGIN_PASSWORD

}
export default testConfig
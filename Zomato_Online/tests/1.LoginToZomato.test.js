require('dotenv').config()
import HomePage from '../models/pages/home_page.js'
import ZomatoLoginPage from '../models/pages/login_page.js'
const loginCredentials = require('../test-helpers/test-data/loginCredentials.js').users
const credintials = JSON.parse(JSON.stringify(loginCredentials))
const zomato_login_page= new ZomatoLoginPage()
const homepage = new HomePage()


fixture`Login to Zomato`
    .page`${process.env.zomatoURL}`

    credintials.forEach(credential => {
    test(' -----  Sign Up to Zomato web app and check logged in successfully -----', async t => {
        console.log("------ Start Sign Up test------")
        await homepage.ClickSignup()
        await zomato_login_page.login(credential,"signup")
        console.log("------ Signed Up with user  " + credential.email + " ------")
        console.log("------ End Sign Up test------")

    });
});

   credintials.forEach(credential => {
    test(' -----  Login to Zomato web app and check logged in successfully -----', async t => {
        console.log("------ Start Login test------")
    await homepage.ClickLogin()
    await zomato_login_page.login(credential,"login")
    console.log("------ Logged in with user  " + credential.email + " ------")
    console.log("------ End Login test------")
    });
});
require('dotenv').config()
import { Selector, t } from 'testcafe'
import login_selectors from '../../test-helpers/selectors/login_selectors.json'
import * as common_functions from '../../test-helpers/utils/common-functions'
import common_selectors from '../../test-helpers/selectors/common_selectors.json'

class LoginPage {

    constructor() {
        // gmail login selectors
        this.gmail_btn = Selector(login_selectors.continuoWithGmail)
        this.login_gmail = Selector(login_selectors.gmailEmail)
        this.login_password = Selector(login_selectors.gmailPassword)
        this.login_username_next = Selector(login_selectors.emailNextbtn)
        this.login_password_next = Selector(login_selectors.passwordNextbtn)
        // email login selectors on Zomato
        this.email_btn = Selector(login_selectors.continuoWithEmail)
        this.login_email = Selector(login_selectors.email).child(0).child(0)
        this.send_otp_btn = Selector(common_selectors.span).withText(login_selectors.sendOTP)
        // login to email outlook
        this.outlook_email = Selector(login_selectors.gmailEmail)
        this.outlook_submit = Selector(login_selectors.outlookEmailNext)
        this.outlook_password = Selector(login_selectors.gmailPassword)
        // get zomato mail and click the link for login or signup
        this.outlook_signin = Selector(login_selectors.outlookSignIn)
        this.other_email = Selector(common_selectors.span).withText(login_selectors.Other)
        this.junk_email = Selector(common_selectors.span).withText(login_selectors.junkEmail)
        this.zomato_email = Selector(login_selectors.unreadMail).child(common_selectors.span).withText(login_selectors.Zomato)
        this.zomato_link = Selector(common_selectors.aTag).withText(login_selectors.LoginToZomato)
        this.signup_name = Selector(login_selectors.signupName).child(0).child(0)
        this.privacy_checkbox = Selector(login_selectors.email).nextSibling(common_selectors.div).child(common_selectors.label).child(common_selectors.input)
        this.create_account = Selector(common_selectors.span).withText(login_selectors.createAccount)
        this.create_account_email_btn = Selector(common_selectors.aTag).withText(login_selectors.CreateyouraccountMail)
        this.open_zomato_link = Selector(login_selectors.openZomatoLink)
    }

    async login(credential, type) {
        if (credential.type == 'email') {
            console.log("Login type with Email")
            await this.loginUsingEmail(credential, type)
        }
        else {
            console.log("Login type with Gmail")
            await this.loginUsingGmail(credential, type)
        }
    }



    async loginUsingGmail(credential) {
        await t.click(this.gmail_btn)
        console.log("Click on Login wth Gmail")
        await common_functions.typeText(this.login_gmail, credential.email)
        console.log("Add user name")
        await t.click(this.login_username_next)
        console.log("add password")
        await common_functions.typeText(this.login_password, credential.password)
        console.log("Confirm Logging")
        await t.click(this.login_password_next)
    }

    async loginUsingEmail(credential, type) {

        if (type == 'login') {
            await t.click(this.email_btn)
            console.log("Select login with Email option")
            await common_functions.typeText(this.login_email.nth(1), credential.email)
            console.log("Add email")
            await t.click(this.send_otp_btn)
            console.log("Click send OTP")
        }
        else {
            console.log("Select sign up with Email option")
            await common_functions.typeText(this.signup_name, credential.name)
            console.log("Add Name")
            await common_functions.typeText(this.login_email.nth(1), credential.email)
            console.log("Add email")
            await t.click(this.privacy_checkbox)
            console.log("Check privacy checkbox")
            await t.click(this.create_account)
            console.log("click create account ")
        }
        await t.navigateTo(process.env.outlookUrl)
        console.log("Go to Outlook")
        await t.click(this.outlook_signin)
        console.log("Sign in ")
        await common_functions.typeText(this.outlook_email, credential.email)
        console.log("Add email")
        await t.click(this.outlook_submit)
        await common_functions.typeText(this.outlook_password, credential.password)
        console.log("add password")
        await t.click(this.outlook_submit)
        console.log("Submit ")
        console.log("Open Other folder")
        await t.click(this.other_email)
        if (!await this.zomato_email.exists) {
            console.log("mail is not in Other so check Junk folder")
            await t.click(this.junk_email)
        }
        console.log("click on email Link")
        await t.click(this.zomato_email.nth(0))
        console.log("click login to zomato button")
        if (type == 'login') {
            console.log("click login to zomato button")
            await t.click(this.zomato_link)
        }
        else {
            console.log("click Create zomato account")
            await t.click(this.create_account_email_btn)
        }
        if (await this.open_zomato_link.exists) {
            await t.click(this.open_zomato_link)
        }
    }
}

export default LoginPage;
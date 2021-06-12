require('dotenv').config()
import HomePage from '../models/pages/home_page.js'
import ZomatoLoginPage from '../models/pages/login_page.js'
import resturant_details from '../test-helpers/test-data/resturantDetails.json'
import RestaurantPage from '../models/pages/resturant_page.js'
import ProfilePage from '../models/pages/profile_page.js'
const profile_page = new ProfilePage()
const loginCredentials = require('../test-helpers/test-data/loginCredentials.js').users
const credintial = JSON.parse(JSON.stringify(loginCredentials))
const zomato_login_page = new ZomatoLoginPage()
const homepage = new HomePage()
const restaurant_page = new RestaurantPage()


fixture`Login to Zomato`
    .page`${process.env.zomatoURL}`

test(' -----  Search for Restaurant and Bookmark -----', async t => {
    console.log("------ Start Bookmark restaurant test------")
    await homepage.ClickLogin()
    await zomato_login_page.loginUsingEmail(credintial[1], "login")
    console.log("------ Logged in with user  " + credintial[1].email + " ------")
    await homepage.SearchForRestaurant(resturant_details.restaurantName)
    await restaurant_page.BookmarkRestaurant()
    await profile_page.CheckRestaurantBookmarked(resturant_details)
    console.log("------ End Bookmark restaurant test------")


});
require('dotenv').config()
import HomePage from '../models/pages/home_page.js'
import ZomatoLoginPage from '../models/pages/login_page.js'
import book_restaurant_details from '../test-helpers/test-data/bookRestaurantDetails.json'
import RestaurantPage from '../models/pages/resturant_page.js'
import AllRestaurantPage from '../models/pages/all_restarurant_page.js'
const loginCredentials = require('../test-helpers/test-data/loginCredentials.js').users
const credintial = JSON.parse(JSON.stringify(loginCredentials))
const zomato_login_page= new ZomatoLoginPage()
const homepage = new HomePage()
const restaurant_page = new RestaurantPage()
const all_restaurant_page= new AllRestaurantPage()


fixture`Login to Zomato`
    .page`${process.env.zomatoURL}`

    test(' -----  Open Go Out For Dinner and book Restaurant -----', async t => {
        console.log("------ Start book restaurant test------")
        await homepage.ClickLogin()
        await zomato_login_page.loginUsingEmail(credintial[1],"login")
        console.log("------ Logged in with user  " + credintial[1].email + " ------")
        await homepage.ClickGoOutForMeal()
        await all_restaurant_page.ClickBookRestaurant()
        const restaurant_name= await restaurant_page.FillBookDetails(book_restaurant_details)
        await restaurant_page.CheckRestaurantBooked(restaurant_name)
        console.log("------ End book restaurant test------")
       

    });
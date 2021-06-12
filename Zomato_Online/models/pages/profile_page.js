
import { Selector, t } from 'testcafe'
import profile_selectors from '../../test-helpers/selectors/profile_selectors.json'
import * as common_functions from '../../test-helpers/utils/common-functions'
import common_selectors from '../../test-helpers/selectors/common_selectors.json'

class ProfilePage {

    constructor() {
         // user menu 
         this.profile_menu = Selector(profile_selectors.profileMenu)
         this.reviews_tab = Selector(profile_selectors.reviewTab).child(common_selectors.liTag).child(0).child(0).child(1).child(3)
         this.bookmark_tab = Selector(profile_selectors.reviewTab).child(common_selectors.liTag).child(0).child(0).child(1).child(2)
         this.profile_tab = Selector(profile_selectors.reviewTab).child(common_selectors.liTag).child(0).child(0).child(1).child(0)
         this.zomta_homepage = Selector(profile_selectors.zomatoHomePagelink)
         this.your_bookings = Selector(common_selectors.h2).withText(profile_selectors.yourBookings)
    }
    

    async CheckRestaurantBooked(restaurant_name) {
        const restaurant_exist = Selector(common_selectors.div).withText(restaurant_name)
        await t.click(this.zomta_homepage)
        console.log("Open Profile Menu")
        await t.click(this.profile_menu)
        console.log("Open my bookings Tab")
        await t.click(this.profile_tab)
        console.log("Check Restaurant added in my booking section ")
        await t.click(this.your_bookings)
        await common_functions.assertTrue(await restaurant_exist.exists)
    }

    async CheckReviewAdded(resturantDetails) {
        const restaurant_exist = Selector(common_selectors.pTag).withText(resturantDetails.restaurantName)
        await t.click(this.zomta_homepage)
        console.log("Open Profile Menu")
        await t.click(this.profile_menu)
        console.log("Open reviews Tab")
        await t.click(this.reviews_tab)
        console.log("Check review added in the review section ")
        await common_functions.assertTrue(await restaurant_exist.exists)
    }

    async CheckRestaurantBookmarked(resturantDetails) {
        const restaurant_exist = Selector(common_selectors.aTag).withText(resturantDetails.restaurantName)
        await t.click(this.zomta_homepage)
        console.log("Open profile menu ")
        await t.click(this.profile_menu)
        console.log("open bookmarks Tab")
        await t.click(this.bookmark_tab)
        console.log("check restaurant bookmarked added correctly ")
        await common_functions.assertTrue(await restaurant_exist.exists)
    }

} export default ProfilePage
import { Selector, t } from 'testcafe'
import restaurant_selectors from '../../test-helpers/selectors/restaurant_selectors.json'
import * as common_functions from '../../test-helpers/utils/common-functions'
import common_selectors from '../../test-helpers/selectors/common_selectors.json'

class RestaurantPage {

    constructor() {

        // add review selectors 
        this.add_review = Selector(common_selectors.span).withText(restaurant_selectors.addReview)
        this.dining_rate = Selector(common_selectors.div).withText(restaurant_selectors.addReview).parent(restaurant_selectors.section).nextSibling(restaurant_selectors.section).child(restaurant_selectors.section).child(restaurant_selectors.section).child(restaurant_selectors.section).child(restaurant_selectors.diningRateChild)
        this.dining = Selector(restaurant_selectors.dining)
        this.review_reason = Selector(common_selectors.div).withText(restaurant_selectors.searchTag).nextSibling(common_selectors.input)
        // confirm review 
        this.confirm_review = Selector(restaurant_selectors.confirmReviewParent).child(common_selectors.button).child(common_selectors.span).child(common_selectors.span).withText(restaurant_selectors.addReview)
        //////bookmark restaurant
        this.bookmark_btn = Selector(common_selectors.span).withText(restaurant_selectors.bookmark)
        this.bookmark_icon = Selector(restaurant_selectors.bookmarkIcon)
        /// book table
        this.date_dropdown = Selector(common_selectors.span).withText(restaurant_selectors.SelectDate)
        this.guests_dropdown = Selector(common_selectors.span).withText(restaurant_selectors.SelectGuests)
        this.select_time = Selector(common_selectors.h4).withText(restaurant_selectors.selectTime).nextSibling(common_selectors.ulTag).child(common_selectors.liTag).nth(0),
        this.phone_number = Selector(restaurant_selectors.phone)
        this.phone_code = Selector(restaurant_selectors.phoneCode)
        this.book_btn = Selector(restaurant_selectors.bookBtn).child(common_selectors.span).child(common_selectors.span).withText(restaurant_selectors.book)
        this.restaruant_name = Selector(restaurant_selectors.restaurantName)

    }

    async AddRestaurantReview(resturantDetails) {
        // add dining review
        console.log("Start Restaurant Review ")
        await t.click(this.add_review)
        console.log("Add Restaurant Rating")
        await t.click(this.dining_rate.nth(resturantDetails.restaurantDinningReviewNumber))
        console.log("Add restuarant review comment ")
        await common_functions.typeText(this.review_reason, resturantDetails.restaurantDiningReviewComment)
        await t.click(Selector(common_selectors.span).withText(resturantDetails.restaurantDiningReviewComment))
        // submit review
        console.log("Confirm review")
        await t.click(this.confirm_review)
    }

    async BookmarkRestaurant() {
        console.log("Book mark the Restaurant ")
        if (!await this.bookmark_icon.exists) {
            await t.click(this.bookmark_btn)
        }
    }

    async FillBookDetails(book_restaurant_details) {

        await t.click(this.date_dropdown)
        const select_date = Selector("div[aria-label='" + book_restaurant_details.bookdate + "']")
        const select_guest_numbers = Selector("div[aria-label='" + book_restaurant_details.guests + "']")
        await t.click(select_date)
        await t.click(this.guests_dropdown)
        await t.click(select_guest_numbers)
        await t.click(this.select_time)
        await common_functions.typeText(this.phone_code, book_restaurant_details.phone)
        await common_functions.typeText(this.phone_number, book_restaurant_details.phoneCode)
        await t.click(this.book_btn)
        return this.restaruant_name.innerText
    }

}

export default RestaurantPage;
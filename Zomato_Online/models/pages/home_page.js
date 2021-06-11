import { Selector, t } from 'testcafe'
import homepage_selectors from '../../test-helpers/selectors/homepage_selectors.json'
import * as common_functions from '../../test-helpers/utils/common-functions'
import common_selectors from '../../test-helpers/selectors/common_selectors.json'

class HomePage {

  constructor() {
    this.login_btn = Selector(common_selectors.aTag).withText(homepage_selectors.LoginLinkTest)
    this.search_txt = Selector(homepage_selectors.searchText)
    this.signup_btn = Selector(common_selectors.aTag).withText(homepage_selectors.signUplink)
    //this.go_out_for_meal= Selector("div[aclass='s1isp7-1 cxLzvm sc-dZWBBA bBoqAh']").nth(1)
    this.go_out_for_meal=Selector(common_selectors.pTag).withText(homepage_selectors.goOutForaMeal)
  }

  async ClickLogin() {
    console.log("click on login button")
    await t.click(this.login_btn)
  }

  async ClickSignup() {
    console.log("click on Sign up button")
    await t.click(this.signup_btn)
  }

  async ClickGoOutForMeal()
  {
    await t.click(this.go_out_for_meal)
  }

  async SearchForRestaurant(restuarant_name) {
    console.log("Start search for restaruant ")
    await common_functions.typeText(this.search_txt, restuarant_name)
    console.log("Search with restaurant " + restuarant_name)
    const restaurant_result = Selector(common_selectors.pTag).withText(restuarant_name)
    console.log("click on restaurant from search menu result")
    await t.click(restaurant_result)
  }

}

export default HomePage;
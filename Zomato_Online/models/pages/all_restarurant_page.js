import { Selector, t } from 'testcafe'
import allrestaurants_selectors from '../../test-helpers/selectors/allrestaurants_selectors.json'
import * as common_functions from '../../test-helpers/utils/common-functions'
import common_selectors from '../../test-helpers/selectors/common_selectors.json'

class AllRestaurantPage {

    constructor() {

       
        this.book_table=Selector(allrestaurants_selectors.bookTable)

        }

    async ClickBookRestaurant() {
     await t.click( this.book_table)
    }


   

}

export default AllRestaurantPage;
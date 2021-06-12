import { Selector, t } from 'testcafe'
import book_meal_selectors from '../../test-helpers/selectors/book_meal_selectors.json'

class BookMealPage {

    constructor() {
        this.book_table = Selector(book_meal_selectors.bookTable)
    }

    async ClickBookRestaurant() {
        await t.click(this.book_table)
    }
}

export default BookMealPage;
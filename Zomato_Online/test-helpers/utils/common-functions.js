require('dotenv').config()
import { t } from 'testcafe'

export async function assertEqual(actualResult, expectedResult) {
    await t.expect(actualResult).eql(expectedResult)
}
export async function assertNotEqual(actualResult, expectedResult) {
    await t.expect(actualResult).notEql(expectedResult)
}
export async function assertTrue(condition) {
   await   t.expect(condition).eql(true)
}
export async function assertFalse(condition) {
    await t.expect(condition).eql(false)

}
export async function typeText(field, text) {
    await t.typeText(field, text, { paste: true })

}


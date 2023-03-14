import {test, expect, vi} from "vitest"
import {getPostBody} from "../src/network"

// vi.stubGlobal('fetch', async () => {
//     return {
//         json() {
//             return {
//                 body: 'foo'
//             }
//         }
//     }
// })

test('should fetch', async () => {
    const result = await getPostBody(1)

    // expect(result).toMatchInlineSnapshot(`"foo"`)
    // expect(result).toMatchInlineSnapshot(`
    // "quia et suscipit suscipit
    // recusandae consequuntur expedita et cum
    // reprehenderit molestiae ut ut quas totam
    // nostrum rerum est autem sunt rem eveniet architecto"`)
    // expect(result).toMatchInlineSnapshot(`"Mocked"`)
    expect(result).toMatchInlineSnapshot(`"Mocked for 1!"`)
})
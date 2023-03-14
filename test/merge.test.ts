import {test, expect, vi} from "vitest";
import {deepMerge, greeting} from "../src";

test( 'shallow merge', () => {
    const merged = deepMerge(
        {
                name: 'Pepe'
        },
        {
            github: 'loco'
        })

    expect(merged).toEqual({
        name: 'Pepe',
        github: 'loco'
    })
})

test( 'shallow merge with overlaps', () => {
    const merged = deepMerge(
        {
            name: 'Pepe',
            github: 'unknown'
        },
        {
            github: 'loco',
            twitter: 'monkey'
        })

    expect(merged).toEqual({
        name: 'Pepe',
        github: 'loco',
        twitter: 'monkey'
    })
})

test( 'shallow merge with arrays', () => {
    const merged = deepMerge(
        ['vue', 'react'],
        ['svelte', 'solid']
    )

    expect(merged).toEqual([
        'vue', 'react','svelte', 'solid'
    ])
})

test( 'deep merge with overlaps', () => {
    const merged = deepMerge(
        {
            name: 'Pepe',
            accounts: {
                github: 'unknown'
            }
        },
    {
            accounts: {
                twitter: 'monkey'
            }
        })

    expect(merged).toEqual({
        name: 'Pepe',
        accounts: {
            github: 'unknown',
            twitter: 'monkey'
        }
    })
})

// this approach is dangerous because we don't know what is the exact error, we need more control
// test.fails('throws errors on merging two different types', () => {
test('throws errors on merging two different types', () => {
    expect(() => deepMerge(
        ['foo', 'bar'],
        {foo: 'bar'}
    )).toThrowError('Cannot merge two different types')
})

test('greeting', () => {
    const spy = vi.spyOn(console, 'log')

    greeting('World')
    greeting('Pepe')

    expect(spy).toBeCalledTimes(2)
    expect(spy).toBeCalledWith('Hello, World')
})
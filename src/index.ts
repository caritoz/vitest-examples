export function deepMerge(a, b){
    if( Array.isArray(a) && Array.isArray(b) ){
        return [...a, ...b]
    }
    //return Object.assign(a, b)

    if( Array.isArray( a) || Array.isArray( b) || typeof a !== typeof b ){
        throw new Error('Cannot merge two different types')
    }

    const merged = { ...a }
    for( const key of Object.keys(b) ){
        if( typeof a[key] === 'object' || Array.isArray( a[key] ) || typeof a !== typeof b )
            merged[key] = deepMerge(a[key], b[key])
        else
            merged[key] = b[key]
    }

    return merged
}

export function greeting(m: string){
    console.log('Hello, ' + m)
}
import type { isFunction } from './type';

/**
 * @description 判断是否为原始类型
 * @param value any
 * @returns boolean
 * @example
 * isPrimitive('') // true
 * isPrimitive(0) // true
 * isPrimitive(false) // true
 * isPrimitive(Symbol()) // true
 * isPrimitive(BigInt(0)) // true
 * isPrimitive(null) // true
 * isPrimitive(undefined) // true
 * isPrimitive({}) // false
 * isPrimitive([]) // false
 */
export const isPrimitive: isFunction = value => {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'symbol' ||
        typeof value === 'bigint' ||
        value === null ||
        value === undefined
    );
};


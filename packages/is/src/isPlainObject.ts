import type { isFunction } from './type';

/**
 * @description 判断是否为纯对象
 * @param value any
 * @returns boolean
 * @example
 * isPlainObject({}) // true
 * isPlainObject(new Object()) // true
 * isPlainObject(Object.create(null)) // true
 * isPlainObject(Object.create({})) // false
 * isPlainObject(Object.create(Object.prototype)) // false
 * isPlainObject(Object.create(Object.prototype, {})) // false
 * isPlainObject(Object.create(Object.prototype, { a: { value: 1 } })) // false
 * isPlainObject(Object.create(Object.prototype, { a: { value: 1, writable: true } })) // false
 * isPlainObject(Object.create(Object.prototype, { a: { value: 1, writable: true, enumerable: true } })) // false
 * isPlainObject(Object.create(Object.prototype, { a: { value: 1, writable: true, enumerable: true, configurable: true } })) // false
 */

export const isPlainObject: isFunction = value => {
    return (
        Object.prototype.toString.call(value) === '[object Object]' &&
        value.constructor === Object &&
        value.__proto__ === Object.prototype &&
        value.__proto__.__proto__ === null
    );
};


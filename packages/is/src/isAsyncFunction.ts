import type { isFunction } from './type';

/**
 * @description 判断是否为异步函数
 * @param value any
 * @returns boolean
 * @example
 * isAsyncFunction(async () => {}) // true
 * isAsyncFunction(() => {}) // false
 * isAsyncFunction(function() {}) // false
 * isAsyncFunction(function*() {}) // false
 * isAsyncFunction(async function() {}) // true
 * isAsyncFunction(async function*() {}) // false
 * isAsyncFunction(new Function()) // false
 */
export const isAsyncFunction: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object AsyncFunction]';
};


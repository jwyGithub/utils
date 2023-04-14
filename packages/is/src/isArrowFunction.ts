import type { isFunction as isFunctionType } from './type';
import { isFunction } from './isFunction';
import { isUndefined } from './isUndefined';

/**
 * @description 判断是否为箭头函数
 * @param value any
 * @returns boolean
 * @example
 * isArrowFunction(() => {}); // true
 * isArrowFunction(function () {}); // false
 * isArrowFunction(async () => {}); // false
 * isArrowFunction(function* () {}); // false
 * isArrowFunction(async function () {}); // false
 * isArrowFunction(async function* () {}); // false
 * isArrowFunction(new Function()); // false
 */
export const isArrowFunction: isFunctionType = value => {
    return isFunction(value) && isUndefined(value.prototype);
};


import type { isFunction } from './type';

/**
 * @description 判断是否为GeneratorFunction
 * @param value any
 * @returns boolean
 * @example
 * isGeneratorFunction(function* () {}) // true
 * isGeneratorFunction(function* () { yield 1; }) // true
 * isGeneratorFunction(function () {}) // false
 * isGeneratorFunction(() => {}) // false
 */
export const isGeneratorFunction: isFunction = value => {
    return Object.prototype.toString.call(value) === '[object GeneratorFunction]';
};


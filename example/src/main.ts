// import { isString } from '@jiangweiye/utils';

import { isArray } from '@jiangweiye/utils-is';

// const is_string = isString('xxx');

// console.log('is_string', is_string);

// // 给上面所有方法生成测试用例
// const testCases = [
//     {
//         name: 'isString',
//         value: 'xxx',
//         expect: true
//     },
//     {
//         name: 'isString',
//         value: 123,

//         expect: false
//     },
//     {
//         name: 'isArray',
//         value: [1, 2, 3],
//         expect: true
//     },
//     {
//         name: 'isArray',
//         value: 'xxx',
//         expect: false
//     },
//     {
//         name: 'isDate',
//         value: new Date(),
//         expect: true
//     },
//     {
//         name: 'isDate',
//         value: 'xxx',
//         expect: false
//     },
//     {
//         name: 'isNull',
//         value: null,
//         expect: true
//     },
//     {
//         name: 'isNull',
//         value: 'xxx',
//         expect: false
//     },
//     {
//         name: 'isNumber',
//         value: 123,
//         expect: true
//     },
//     {
//         name: 'isNumber',
//         value: 'xxx',
//         expect: false
//     },
//     {
//         name: 'isObject',
//         value: {},
//         expect: true
//     },
//     {
//         name: 'isObject',
//         value: 'xxx',
//         expect: false
//     }
// ];

// // 测试
// testCases.forEach(testCase => {
//     const { name, value, expect } = testCase;

//     const result = (utils as any)[name](value);

//     if (result !== expect) {
//         throw new Error(`测试失败: ${name}(${value}) 应该返回 ${expect}, 但是返回了 ${result}`);
//     }
// });

// console.log('测试通过');


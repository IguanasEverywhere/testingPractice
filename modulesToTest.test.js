import {capitalizeName, reverseString, calculator, caesarCipher, analyzeArray} from './modulesToTest';

test('returns string with first letter capitalized', () => {
  expect(capitalizeName("scott")).toBe("Scott");
});

test('returns reverse of string', ()=> {
  expect(reverseString("Scott")).toBe("ttocS");
});

test('adds two numbers', () => {
  expect(calculator.add(6,3)).toBe(9);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(6,3)).toBe(3);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(6,3)).toBe(18);
});

test('divides two numbers', () => {
  expect(calculator.divide(6,3)).toBe(2);
});

test('caesars the string by 2', () => {
  expect(caesarCipher("!Hello Worldz", 2)).toBe("!jgnnq yqtnfb");
});

test('returns correct object', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({average:4, min: 1, max: 8, length: 6})
});

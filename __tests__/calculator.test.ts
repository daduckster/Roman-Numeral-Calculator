import {convertToRoman} from "../utils/calculatorHelper";

describe('Calculator', () => {
  it('only uses numbers 1-1000', () => {
    expect(() => convertToRoman('1')).not.toThrow();
    expect(() => convertToRoman('1000')).not.toThrow();
    expect(() => convertToRoman('1001')).toThrow();
    expect(() => convertToRoman('0')).toThrow();
    expect(() => convertToRoman('-1')).toThrow();
    expect(() => convertToRoman('-1000')).toThrow();
    expect(() => convertToRoman('hello world')).toThrow();
    expect(() => convertToRoman('')).toThrow();
  })

  it('converts the number 1 to I', () => {
    const input = 1;
    const expected = 'I';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })

  it('converts the number 2 to II', () => {
    const input = 2;
    const expected = 'II';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })

  it('converts the number 3 to III', () => {
    const input = 3;
    const expected = 'III';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })

  it('converts number 5 to V', () => {
    const input = 5;
    const expected = 'V';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })
});
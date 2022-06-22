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

  it('converts number 4 to IV', () => {
    const input = 4;
    const expected = 'IV';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })

  it('converts number 9 to IX', () => {
    const input = 9;
    const expected = 'IX';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })

  it('converts number 23 to XXIII', () => {
    const input = 23;
    const expected = 'XXIII';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })

  it('converts number 57 to LVII', () => {
    const input = 57;
    const expected = 'LVII';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })

  it('converts number 164 to CLXIV', () => {
    const input = 164;
    const expected = 'CLXIV';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })

  it('converts number 478 to CDLXXVIII', () => {
    const input = 478;
    const expected = 'CDLXXVIII';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })

  it('converts number 599 to DXCIX', () => {
    const input = 599;
    const expected = 'DXCIX';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })

  it('converts number 987 to CMLXXXVII', () => {
    const input = 987;
    const expected = 'CMLXXXVII';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })
});
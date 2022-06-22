import {convertToRoman} from "../utils/calculatorHelper";

describe('Calculator', () => {
  it('converts the number 1 to I', () => {
    const input = 1;
    const expected = 'I';
    const result = convertToRoman(input);
    expect(result).toBe(expected);
  })
});
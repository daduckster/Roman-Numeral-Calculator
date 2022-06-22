export function convertToRoman(num: number | string): string {
  if (typeof num !== 'number') {
    num = parseInt(num);
  }

  if (num < 1 || num > 1000 || isNaN(num)) {
    throw new Error('Number must be between 1 and 1000')
  }

  const romanNumbers: string[] = ['V', 'I'];
  const integers: number[] = [5, 1];
  let result: string = '';

  for (let i = 0; i < integers.length; i++) {
    while (integers[i] <= num) {
      result += romanNumbers[i];
      num -= integers[i];
    }
  }
  return result;
}
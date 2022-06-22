export function convertToRoman(num: number): string {
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
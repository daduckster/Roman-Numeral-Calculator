export function convertToRoman(num: number): string {
  const romanNumbers: string[] = ['I', 'II', 'III'];
  const integers: number[] = [1, 2, 3];
  let result: string = '';

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] === num) {
      result = romanNumbers[i];
    }
  }
  return result;
}
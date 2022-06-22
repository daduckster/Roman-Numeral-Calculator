export function convertToRoman(num: number | string): string {
  if (typeof num !== 'number') {
    num = parseInt(num);
  }

  if (num < 1 || num > 1000 || isNaN(num)) {
    throw new Error('Number must be between 1 and 1000')
  }

  // the function goes through the array of integers starting with the highest
  // each time it checks if the user's number is lower or equal than the current number in the array
  // if this is true, it adds the roman numbers at the same exact index to the result string
  // then it calculates num - current number in the array

  // I use this structure of the roman numbers array, because numbers will always be added at the end of the
  // result string
  // Because of that, it is not possible to have a smaller number in front of a bigger number
  // example IV = 4 -> 'I' is smaller than V, but the for-loop will find 'V' first and would then only add the 'I' at the
  // end of the result string
  const romanNumbers: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V','IV', 'I'];
  const integers: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let result: string = '';

  for (let i = 0; i < integers.length; i++) {
    while (integers[i] <= num) {
      result += romanNumbers[i];
      num -= integers[i];
    }
  }
  return result;
}
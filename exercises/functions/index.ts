// TODO: Rework this so that spread operator works
// const sum = (nums: number): number => {
//   const total: number[] = [...nums];
//   if (total.length < 2) {
//     return (values: number) => [...values].reduce((accum, curr) => accum + curr, 0);
//   }
//   return [...nums].reduce((accum, curr) => accum + curr, 0);
// }


const joinStrings = (str1: string, str2: string): string => {
  return str1 + str2;
}

// Good 👍🏻
joinStrings('hello', 'world');

// Bad 👎🏻
joinStrings(10, 'what'); // Argument of type 'number' is not assignable to parameter of type 'string'

// [2, 5, 8, 3, 11], 10
const findPair = (nums: number[], target: number): number[] => {
  const map: object = {};

  for (let index: number = 0; index < nums.length; index++) {
    if (!map[nums[index]]) {
      map[target - nums[index]] = nums[index];
    } else {
      return [nums[index], map[nums[index]]];
    }
  }

  return [];
}

const values: number[] = [2, 5, 8, 3, 11];
const goal: number = 10;

// Good 👍🏻
findPair(values, goal);

// Bad 👎🏻
findPair(values.join(''), goal);

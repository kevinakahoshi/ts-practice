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

const sum = (nums: number): number => {
  const total: number[] = [...nums];
  if (total.length < 2) {
    return (values: number) => [...values].reduce((accum, curr) => accum + curr, 0);
  }
  return [...nums].reduce((accum, curr) => accum + curr, 0);
}

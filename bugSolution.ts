function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, parseInt('10', 10)); // Correct: Parses string to number

function addSafe(a: number, b: string | number): number {
  const numB = typeof b === 'string' ? parseInt(b, 10) : b;
  return a + numB;
}
let result2 = addSafe(5, '10'); //Safe and handles both types correctly
let result3 = addSafe(5,10); //Safe and handles both types correctly
# TypeScript Type Error: Adding Number and String

This repository demonstrates a common type error in TypeScript: attempting to add a number and a string.  The `add` function is defined to accept two numbers, but the call to `add(5, '10')` passes a string as the second argument, resulting in a type error.

## Solution

The solution involves ensuring that both arguments passed to the `add` function are numbers.  This can be achieved through type checking and potentially converting the string argument to a number using `parseInt()` or similar methods.
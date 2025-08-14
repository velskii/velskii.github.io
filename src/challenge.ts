
import { invert } from "jsr:@std/collections"

const challenge = {a: "x", b: "y", c: "z"};

// expect result:
// const result = {x: "a", y: "b", z: "c"};


// normal solution


const result = Object.fromEntries(
  Object.entries(challenge).map(([key, value]) => [value, key])
);

console.log(result); // { x: "a", y: "b", z: "c" }

// with deno's help
const result2 = invert(challenge);

console.log(result2); // { x: "a", y: "b", z: "c" }
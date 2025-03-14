function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a !== "object" || b == null || typeof b !== "object")
    return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual(1, 1)); // true
console.log(deepEqual(1, "1")); // false

let obj = { name: "Alice" };
console.log(deepEqual(obj, obj)); // true

console.log(deepEqual({ name: "Alice" }, { name: "Alice" })); // true

console.log(deepEqual({ name: "Alice" }, { name: "Bob" })); // false

let nested1 = { a: { b: { c: 1 } } };
let nested2 = { a: { b: { c: 1 } } };
let nested3 = { a: { b: { c: 2 } } };

console.log(deepEqual(nested1, nested2)); // true
console.log(deepEqual(nested1, nested3)); // false

console.log(deepEqual(null, {})); // false

console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
console.log(deepEqual([1, 2, 3], [1, 2, 4])); // false

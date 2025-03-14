function arrayToList(arr) {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  return list;
}

function listToArray(list) {
  let arr = [];

  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }

  return arr;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

//Loop version
function nth(list, n) {
  let node = list;
  let index = 0;
  while (node) {
    if (index === n) return node.value;
    node = node.rest;
    index++;
  }
  return undefined;
}

function nthRecursive(list, n) {
  if (!list) return undefined;
  if (n === 0) return list.value;
  return nthRecursive(list.rest, n - 1);
}

let arr = [1, 2, 3];

let list = arrayToList(arr);

let newList = prepend(0, list);

console.log(newList.rest);
console.log(listToArray(newList));
console.log(nth(list, 1));
console.log(nthRecursive(list, 2));

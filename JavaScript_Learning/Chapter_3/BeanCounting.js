function countBs(str) {
  return countChar(str, "B");
}

function countChar(str, ch) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      count++;
    }
  }

  return count;
}

console.log(countChar("bbbBBbbb", "b"));
console.log(countBs("BBbbsbsb"));

function range(start, end, step = 1) {
  let A = [];

  if (step > 0) {
    while (start <= end) {
      A.push(start);
      start += step;
    }
  } else {
    while (start >= end) {
      A.push(start);
      start += step;
    }
  }

  return A;
}

function sum(A) {
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
  }

  return sum;
}

console.log(sum(range(1, 10, 1)));

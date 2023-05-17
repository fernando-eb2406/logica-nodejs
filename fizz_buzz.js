/* Función fizz_buzz() */

function fizzBuzz(N) {
  let arrayResult = [];
  for (let i = 1; i <= N; i++) {
    i % 3 === 0 && i % 5 === 0
      ? arrayResult.push('fizzBuzz')
      : i % 3 === 0
      ? arrayResult.push('Fizz')
      : i % 5 === 0
      ? arrayResult.push('Buzz')
      : arrayResult.push(i);
  }
  return arrayResult;
}

let sizeArray = (Math.random() * 100).toFixed(0);

console.log(fizzBuzz(sizeArray));

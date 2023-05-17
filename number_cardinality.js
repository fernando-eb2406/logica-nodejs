/* Función number_cardinality() */

const numberCardinality = (numberInt) => {
  return numberInt % 10 === 0
    ? 'zero'
    : numberInt % 10 === 5
    ? 'five'
    : numberInt % 2 === 0
    ? 'even'
    : 'odd';
};

let numberInt = (Math.random() * 100).toFixed(0);

console.log(numberInt, numberCardinality(numberInt));

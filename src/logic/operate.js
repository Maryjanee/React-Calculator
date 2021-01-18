import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  if (operation === '+') {
    total = Big(numberOne + numberTwo);
  } else if (operation === '-') {
    total = Big(numberOne - numberTwo);
  } else if (operation === '/') {
    total = Big(numberOne / numberTwo);
  } else if (operation === '*') {
    total = Big(numberOne * numberTwo);
  } else if (operation === '%') {
    if (numberTwo) {
      total = Big((numberOne * 0.01) * numberTwo);
    } else {
      total = Big(numberOne * 0.01);
    }
  } else {
    total = '';
  }
  return total;
};
export default operate;

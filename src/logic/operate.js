import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  const firstNum = Big(numberOne);
  const secondNum = Big(numberTwo);

  if (operation === '+') {
    total = firstNum.plus(secondNum);
  } else if (operation === '-') {
    total = firstNum.minus(secondNum);
  } else if (operation === '÷') {
    total = firstNum.div(secondNum);
  } else if (operation === '*') {
    total = firstNum.times(secondNum);
  } else if (operation === '%') {
    if (secondNum) {
      total = (firstNum.times(0.01)).times(secondNum);
    } else {
      total = firstNum.times(0.01);
    }
  } else {
    total = '';
  }
  return total;
};
export default operate;

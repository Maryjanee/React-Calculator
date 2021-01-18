import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  let firstNum = Big(numberOne);
  let secondNum = Big(numberTwo)
  if (operation === '+') {
    total = Big(firstNum + secondNum);
  } else if (operation === '-') {
    total = Big(firstNum - secondNum);
  } else if (operation === '/') {
    total = Big(firstNum / secondNum);
  } else if (operation === '*') {
    total = Big(firstNum * secondNum);
  } else if (operation === '%') {
    if (secondNum) {
      total = Big((firstNum * 0.01) * secondNum);
    } else {
      total = Big(firstNum * 0.01);
    }
  } else {
    total = '';
  }
  return total;
};
export default operate;

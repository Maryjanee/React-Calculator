import Big from 'big.js';

const operate = (numberOne, numberTwo, operator) => {
  let result;
  const firstNum = new Big(numberOne);
  const secondNum = new Big(numberTwo);

  switch (operator) {
    case '+':
      result = firstNum.plus(secondNum).toString();
      break;
    case '-':
      result = firstNum.minus(secondNum).toString();
      break;
    case '*':
      result = firstNum.times(secondNum).toString();
      break;
    case '÷':
      result = firstNum.div(secondNum).toString();
      break;
    case '%':
      if (secondNum) {
        result = (firstNum.times(0.01)).times(secondNum).toString();
      } else {
        result = firstNum.times(0.01).toString();
      }
      break;
      // case '+/-':
      //   result = firstNum.times(-1).toString();
      //   break;

    default:
      result = '';
      break;
  }

  return result;
};

export default operate;

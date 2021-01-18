import operate from './operate';

const calculate = (obj, buttonName) => {
  const calcData = { ...obj };
  const {total, next} = obj;
  
  if (buttonName === '+/-') {
    calcData.total *= -1;
    calcData.next *= -1;
  } else if (buttonName === 'AC') {
    calcData.total = null;
    calcData.next = null;
  } else if (buttonName === '=') {
    if (total && next) {
      calcData.total = operate(total, next, buttonName);
    }
  } else if (buttonName === '+' || buttonName === '-' || buttonName === 'x' || buttonName === '÷') {
    calcData.total = operate(total, next, buttonName);
  }
  return calcData;
};
export default calculate;

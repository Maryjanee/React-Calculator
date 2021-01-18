import operate from './operate';
const calculate = (obj, buttonName) =>{
 const calcData = {obj};
  if(buttonName === '+/-'){
    calcData.total *= -1;
    calcData.next *= -1
  }else if(buttonName == 'AC'){
  calcData.total = null;
  calcData.next = null;
}else if(buttonName === '='){
  if(calcData.total && calcData.next)
  calcData.total = operate(calcData.total, calcData.next, buttonName) 
}else if(calculate.total){
  calcData.total = calcData.total;
}else if (buttonName === '+' || buttonName === '-' || buttonName === 'x' || buttonName === '÷' ) {
  calcData.total = operate(calcData.total, calcData.next, buttonName)
}
return obj;
}
export default calculate
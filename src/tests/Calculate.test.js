import calculate from '../logic/calculate';

test("Restores all the values to default when AC is pressed", () => {
 	  const state = {
      total: '35',	 
      next: '24',	  
      operation: '+'
  }	 
  const newState = {	  
      total: null,	   
      next: null,	
      operation: null	  
  }	 
  expect(calculate(state, 'AC')).toEqual(newState);
}) 

test("Changes the polarity of numbers passed into it when +/- is pressed ", () => {
    const state = {
        total: '35',
        next: '24',
        operation: '+/-',
      };
    
      const newState = {
        total: '35',
        next: -24,
        operation: '+/-',
      };
    
      expect(calculate(state, '+/-')).toEqual(newState);
})
test("Performs Computation ", () => {
    const state = {
        total: '35',
        next: '24',
        operation: '+',
      };
    
      const newState = {
        total: "59",
        next: null,
        operation: null,
      };
    
      expect(calculate(state, '=')).toEqual(newState);
}) 


test("Returns percentage value when % is pressed", () => {
    const state = {
      total: '35',
      next: '24',
      operation: '+',
    };
  
    const newState = {
      total: '35',
      next: 0.24,
      operation: '+'
    }
   
    expect(calculate(state, '%')).toEqual(newState);
  });
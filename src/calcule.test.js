const sum = require("./sum");
const subtract = require("./subtract");

test('add 1 + 2 to be equal 3', () => { 
  
  expect(sum(1,2)).toBe(3);

});


test('sum 1 + 2 to not equal 3', () => { 

  expect(sum(1,3)).not.toBe(3);

});


test('subtract 5 + 2 to be equal 3', () => { 
  
  expect(subtract(5,2)).toBe(3);

});


test('subtract 5 + 3 to not equal 3', () => { 

  expect(subtract(1,3)).not.toBe(3);

});

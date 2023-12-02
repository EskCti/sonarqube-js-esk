const sum = require("./sum");

test('add 1 + 2 to be equal 3', () => { 
  expect(sum(1,2)).toBe(3);
});


test('sum 1 + 2 to not equal 3', () => { 
  expect(sum(1,3)).not.toBe(3);
});


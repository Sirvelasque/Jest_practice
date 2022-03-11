const Calculator = require('./Calculator')
const string = require('./String_Manipulate')

const reverseString = string.reverseString
const stringLength = string.stringLength
const capitalize = string.capitalize

it('count', () => {
  const testString = "hello"
  const counting = stringLength(testString);

  expect(counting).toBe(5);
});

it('Limit (test 1)', () => {
  const testString = "pizza pizza pizza"
  const counting = stringLength(testString);

  expect(counting).toBe(false);
});

it('Limit (test 2)', () => {
  const testString = "morning"
  const counting = stringLength(testString);

  expect(counting).not.toBe(false);
});

it('Reverse Test', () => {
  const testString = "hello world"
  const reverced = reverseString(testString)
  expect(reverced).toBe('dlrow olleh')
});

describe('Add', () => {
  it('Add test 1', () => {
    const calculate = new Calculator();
    const n1 = 5;
    const n2 = 5;
    const result = calculate.add(n1,n2);
    expect(result).toBe(10)
  });
  it('Add test 2', () => {
    const calculate = new Calculator();
    const n1 = 0;
    const n2 = 0;
    const result = calculate.add(n1,n2);
    expect(result).toBe(0)
  });
  it('Add test 3', () => {
    const calculate = new Calculator();
    const n1 = -2;
    const n2 = 1;
    const result = calculate.add(n1,n2);
    expect(result).toBe(-1)
  });

});

describe('Substract', () => {
  it('Substract test 1', () => {
    const calculate = new Calculator();
    const n1 = 15;
    const n2 = 5;
    const result = calculate.subtract(n1,n2);
    expect(result).toBe(10)
  });
  it('Substract test 2', () => {
    const calculate = new Calculator();
    const n1 = 0;
    const n2 = 0;
    const result = calculate.subtract(n1,n2);
    expect(result).toBe(0)
  });
  it('Substract test 3', () => {
    const calculate = new Calculator();
    const n1 = -2;
    const n2 = 1;
    const result = calculate.subtract(n1,n2);
    expect(result).toBe(-3)
  });

});

describe('Divide', () => {
  it('divide test 1', () => {
    const calculate = new Calculator();
    const n1 = 15;
    const n2 = 5;
    const result = calculate.divide(n1,n2);
    expect(result).toBe(3)
  });
  it('divide test 2', () => {
    const calculate = new Calculator();
    const n1 = 0;
    const n2 = 10;
    const result = calculate.divide(n1,n2);
    expect(result).toBe(0)
  });
  it('divide test 3', () => {
    const calculate = new Calculator();
    const n1 = -4;
    const n2 = 2;
    const result = calculate.divide(n1,n2);
    expect(result).toBe(-2)
  });

});

describe('Multiply', () => {
  it('Multiply test 1', () => {
    const calculate = new Calculator();
    const n1 = 10;
    const n2 = 5;
    const result = calculate.multiply(n1,n2);
    expect(result).toBe(50)
  });
  it('Multiply test 2', () => {
    const calculate = new Calculator();
    const n1 = 0;
    const n2 = 10;
    const result = calculate.multiply(n1,n2);
    expect(result).toBe(0)
  });
  it('Multiply test 3', () => {
    const calculate = new Calculator();
    const n1 = -4;
    const n2 = 2;
    const result = calculate.multiply(n1,n2);
    expect(result).toBe(-8)
  });

});

describe('Capitalize', () =>{
  it('test sam', () => {
    const testString = "sam";
    const result = capitalize(testString);
    expect(result).toBe('Sam');
  })
})
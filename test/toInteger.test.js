//***NOTE: these unit tests were made by ChatGPT,
//all comments and changes added to the ChatGPT's response are marked with "***",
//similar to this comment***

// Import necessary modules
import { expect } from 'chai';
import toInteger from '../src/toInteger.js';

// Describe block for the toInteger function
describe('toInteger', () => {
  // Test case for converting a positive integer to an integer
  it('should handle positive integer input', () => {
    expect(toInteger(42)).to.equal(42);
  });

  // Test case for converting a negative integer to an integer
  it('should handle negative integer input', () => {
    expect(toInteger(-17)).to.equal(-17);
  });

  // Test case for converting a decimal number to an integer
  it('should convert a decimal number to an integer', () => {
    expect(toInteger(3.2)).to.equal(3);
  });

  // Test case for converting Number.MIN_VALUE to an integer
  it('should convert Number.MIN_VALUE to 0', () => {
    expect(toInteger(Number.MIN_VALUE)).to.equal(0);
  });

  /* 
  ***false unit test given by ChatGPT, Infinity should be converted to 1.7976931348623157e+308:***
  // Test case for converting Infinity to an integer
  it('should convert Infinity to a large positive integer', () => {
    expect(toInteger(Infinity)).to.equal(Number.POSITIVE_INFINITY);
  });
  */

  //***correction given by ChatGPT to the previous unit test***
  // Test case for converting Infinity to an integer
  it('should convert Infinity to a finite representation', () => {
    expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
  });

  // Test case for converting a string representing a decimal number to an integer
  it('should convert a string representing a decimal number to an integer', () => {
    expect(toInteger('3.2')).to.equal(3);
  });

  // Test case for converting a string representing an integer to an integer
  it('should convert a string representing an integer to the corresponding integer', () => {
    expect(toInteger('42')).to.equal(42);
  });

  // Test case for converting a string representing a negative integer to an integer
  it('should handle string input representing a negative integer', () => {
    expect(toInteger('-567')).to.equal(-567);
  });

  // Test case for converting a non-numeric value to an integer
  it('should convert a non-numeric value to 0', () => {
    expect(toInteger('abc')).to.equal(0);
  });

  // ***Additional unit tests from a new query:***

  // Test case for converting a negative decimal number to an integer
  it('should convert a negative decimal number to an integer', () => {
    expect(toInteger(-3.8)).to.equal(-3);
  });

  // Test case for converting a string representing a negative decimal number to an integer
  it('should convert a string representing a negative decimal number to an integer', () => {
    expect(toInteger('-3.8')).to.equal(-3);
  });

  // Test case for converting NaN to 0
  it('should convert NaN to 0', () => {
    expect(toInteger(NaN)).to.equal(0);
  });

  // Test case for converting null to 0
  it('should convert null to 0', () => {
    expect(toInteger(null)).to.equal(0);
  });

  // Test case for converting undefined to 0
  it('should convert undefined to 0', () => {
    expect(toInteger(undefined)).to.equal(0);
  });

  // Test case for converting a large positive number to a large positive integer
  it('should convert a large positive number to a large positive integer', () => {
    const largeNumber = 1.7976931348623157e+308;
    expect(toInteger(largeNumber)).to.equal(largeNumber);
  });

  // Test case for converting a large negative number to a large negative integer
  it('should convert a large negative number to a large negative integer', () => {
    const largeNegativeNumber = -1.7976931348623157e+308;
    expect(toInteger(largeNegativeNumber)).to.equal(largeNegativeNumber);
  });

  // Test case for converting 0 to 0
  it('should convert 0 to 0', () => {
    expect(toInteger(0)).to.equal(0);
  });

  // Test case for converting 0.0 to 0
  it('should convert 0.0 to 0', () => {
    expect(toInteger(0.0)).to.equal(0);
  });

  // Test case for converting -0 to 0
  it('should convert -0 to 0', () => {
    expect(toInteger(-0)).to.equal(0);
  });

  // Test case for converting a string with exponential notation to an integer
  it('should convert a string with exponential notation to an integer', () => {
    expect(toInteger('1.23e4')).to.equal(12300);
  });

  // Test case for converting an object to 0
  it('should convert an object to 0', () => {
    expect(toInteger({ key: 'value' })).to.equal(0);
  });

  // Test case for converting an array to 0
  it('should convert an array to 0', () => {
    expect(toInteger([1, 2, 3])).to.equal(0);
  });

  // Test case for converting a value near the upper limit of the representable range
  it('should handle a value near the upper limit of the representable range', () => {
    const nearUpperLimit = 1.7976931348623157e+308 - 1;
    expect(toInteger(nearUpperLimit)).to.equal(nearUpperLimit);
  });

  // Test case for converting a value near the lower limit of the representable range
  it('should handle a value near the lower limit of the representable range', () => {
    const nearLowerLimit = -1.7976931348623157e+308 + 1;
    expect(toInteger(nearLowerLimit)).to.equal(nearLowerLimit);
  });

  // Test case for converting a custom finite value to an integer
  it('should convert a custom finite value to an integer', () => {
    expect(toInteger(42.42)).to.equal(42);
  });

  // Test case for converting a value exceeding the upper limit to the maximum finite value
  it('should handle a value exceeding the upper limit of the representable range', () => {
    const beyondUpperLimit = 1.7976931348623157e+308 + 1;
    expect(toInteger(beyondUpperLimit)).to.equal(1.7976931348623157e+308);
  });

  // Test case for converting a value exceeding the lower limit to the minimum finite value
  it('should handle a value exceeding the lower limit of the representable range', () => {
    const beyondLowerLimit = -1.7976931348623157e+308 - 1;
    expect(toInteger(beyondLowerLimit)).to.equal(-1.7976931348623157e+308);
  });

  //***tests nade by ChatGPT where the given value to test was given ***
  // Test case for converting a mix of string and number to an integer
  it('should handle a mix of string and number input', () => {
    expect(toInteger('42abc')).to.equal(0);
  });

  // Test case for converting a large number (1,000,000) to an integer
  it('should handle large number with commas as separators', () => {
    expect(toInteger('1,000,000')).to.equal(1000000);
  });

  // Test case for converting a large number (1.000.000) with periods as separators
  it('should handle large number with periods as separators', () => {
    expect(toInteger('1.000.000')).to.equal(1000000);
  });

  // Test case for converting a large number (1 000 000) with spaces as separators
  it('should handle large number with spaces as separators', () => {
    expect(toInteger('1 000 000')).to.equal(1000000);
  });

  // Test case for converting a string "1,2" to an integer
  it('should handle a string "1,2" with comma and decimal point', () => {
    expect(toInteger('1,2')).to.equal(1);
  });

  // Test case for converting a string "-1,2" with negative sign
  it('should handle a string "-1,2" with negative sign', () => {
    expect(toInteger('-1,2')).to.equal(-1);
  });

  // Test case for converting a string "   10" with leading spaces
  it('should handle a string "   10" with leading spaces', () => {
    expect(toInteger('   10')).to.equal(10);
  });

  // Test case for converting a string "   10  " with leading and trailing spaces
  it('should handle a string "   10  " with leading and trailing spaces', () => {
    expect(toInteger('   10  ')).to.equal(10);
  });

  // Test case for converting a string "   -10" with leading spaces and negative sign
  it('should handle a string "   -10" with leading spaces and negative sign', () => {
    expect(toInteger('   -10')).to.equal(-10);
  });

  // Test case for converting a string "   abc" with leading spaces and non-numeric characters
  it('should handle a string "   abc" with leading spaces and non-numeric characters', () => {
    expect(toInteger('   abc')).to.equal(0);
  });

  
});

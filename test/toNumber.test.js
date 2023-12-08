import assert from 'assert';
import toNumber from '../src/toNumber.js';

//const assert = require('assert');
//const toNumber = require('../src/toNumber.js');

// Test cases
describe('toNumber.js', () => {


  it('should return the number 3.2', () => {
    assert.strictEqual(toNumber(3.2), 3.2);
  });
  it('should return the number 5e-324', () => {
    assert.strictEqual(toNumber(Number.MIN_VALUE), 5e-324);
  }); 
  it('should return the number Infinity', () => {
    assert.strictEqual(toNumber(Infinity), Infinity);
  }); 
  
}
);
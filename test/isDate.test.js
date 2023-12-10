import { expect } from 'chai';
import isDate from '../src/isDate.js';

describe('isDate', () => {

    it('should return true for a new date object', () => {
        expect(isDate(new Date())).to.equal(true);
     });

     it('should return treu for Date constructed with parameters', () => {
        const date = new Date(25,213);
        expect(isDate(date)).to.equal(true);
     });

     it('should return true for date obejct constructed with string, that is not a valid date', () => {
        expect(isDate(new Date("this is not a date"))).to.equal(true);
     });

     it('should return false for null', () => {
        expect(isDate(null)).to.equal(false);
     });

     it('should return false for empty input', () => {
      expect(isDate()).to.equal(false);
      });

     it('should return false for undefined', () => {
        expect(isDate(undefined)).to.equal(false);
     });

     it('should return false for string', () => {
        expect(isDate("2010-01-03")).to.equal(false);
     });

     it('should return false for integer', () => {
        expect(isDate(2001)).to.equal(false);
     });

     it('should return false for date like input', () => {
      expect(isDate(2001-12)).to.equal(false);
      });
     
     it('should return false for array with date object', () => {
        expect(isDate([new Date()])).to.equal(false);
     });

     it('should return false for plain object with date object', () => {
        expect(isDate({key: new Date()})).to.equal(false);
     });

});
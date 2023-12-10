//NOTE: some of the tests were done by ChatGPT,
//tests after the comment "By ChatGPT" are made by ChatGPT"

import { expect } from 'chai';
import defaultTo from '../src/defaultTo.js';

describe('defaultTo', () => {

    it("should return the given input when it is of type Integer, zero", () => {
        expect(defaultTo(0,10)).to.equal(0);
     });

    it("should return the given input when it is of type Integer", () => {
        expect(defaultTo(1, 10)).to.equal(1);
     });

    it("should return the given input when it is of type String", () => {
        expect(defaultTo("test","default")).to.equal("test");
     });

    it("should return the given input when it is an empty String", () => {
        expect(defaultTo("","default")).to.equal("");
     });

    it("should return the given input when it is an empty Array", () => {
        const emptyArray = [];
        expect(defaultTo(emptyArray,"default")).to.equal(emptyArray);
     });

    it("should return the given input when it is an Array with value of null", () => {
        const arrayWithNull = [null];
        expect(defaultTo(arrayWithNull,"default")).to.equal(arrayWithNull);
     });

    it("should return the given input when it is an empty Map", () => {
        const emptyMap = {};
        expect(defaultTo(emptyMap,"default")).to.equal(emptyMap);
     });

    it("should return the given input when it is an empty Set", () => {
        const emptySet = new Set();
        expect(defaultTo(emptySet,"default")).to.equal(emptySet);
     });

    it("should return the given input when the default is NaN", () => {
        expect(defaultTo("input", NaN)).to.equal("input");
     });

    it("should return the given input when the default is null", () => {
        expect(defaultTo("input", null)).to.equal("input");
     });

    it("should return the given input when the default is undefined", () => {
        expect(defaultTo("input", undefined)).to.equal("input");
     });

    it("should return the default when the default is undefined and input is null", () => {
        expect(defaultTo(null, undefined)).to.equal(undefined);
     });

    it("should return the default when the default is null and input is NaN", () => {
        expect(defaultTo(NaN, null)).to.equal(null);
     });

    it("should return the default when the default is NaN and input is null", () => {
        expect(defaultTo(null, NaN)).to.NaN;
     });


    //By ChatGPT
    it('should return the default value when the input is null', () => {
        expect(defaultTo(null, 42)).to.equal(42);
    });
    
    it('should return the default value when the input is undefined', () => {
        expect(defaultTo(undefined, 'default')).to.equal('default');
    });
    
    it('should return the default value when the input is NaN', () => {
        expect(defaultTo(NaN, 'default')).to.equal('default');
    });
    
    it('should return the input value when the input is a boolean (true)', () => {
        expect(defaultTo(true, false)).to.equal(true);
    });
    
    it('should return the input value when the input is a boolean (false)', () => {
        expect(defaultTo(false, true)).to.equal(false);
    });
    
    it('should return the input value when the input is an object', () => {
        const obj = { key: 'value' };
        const defaultValue = { defaultKey: 'defaultValue' };
        expect(defaultTo(obj, defaultValue)).to.equal(obj);
    });
    
    it('should return the input array when the input is an array', () => {
        const inputArray = [1, 2, 3];
        const defaultValue = [4, 5, 6];
        expect(defaultTo(inputArray, defaultValue)).to.equal(inputArray);
    });



});
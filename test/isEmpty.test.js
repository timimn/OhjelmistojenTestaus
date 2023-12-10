//NOTE: some of the tests were done by ChatGPT,
//tests after the comment "By ChatGPT" are made by ChatGPT"

import { expect } from 'chai';
import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {

    it("should return true for null", () => {
        expect(isEmpty(null)).to.equal(true);
    });

    it("should return true for NaN", () => {
        expect(isEmpty(NaN)).to.equal(true);
    });

    it("should return true for undefined", () => {
        expect(isEmpty(undefined)).to.equal(true);
    });

    it("should return true for Boolean true", () => {
        expect(isEmpty(true)).to.equal(true);
    });

    it("should return true for Boolean false", () => {
        expect(isEmpty(false)).to.equal(true);
    });

    it("should return true for Integer 1", () => {
        expect(isEmpty(1)).to.equal(true);
    });

    it("should return true for Integer -1", () => {
        expect(isEmpty(-1)).to.equal(true);
    });

    it("should return true for Double 1.0", () => {
        expect(isEmpty(1.0)).to.equal(true);
    });

    it("should return true for empty String", () => {
        expect(isEmpty("")).to.equal(true);
    });

    it("should return true for empty Array", () => {
        expect(isEmpty([])).to.equal(true);
    });

    it("should return true for empty Map", () => {
        expect(isEmpty({})).to.equal(true);
    });

    it("should return false for String of length > 0", () => {
        expect(isEmpty("1")).to.equal(false);
    });

    it("should return false for non empty Array", () => {
        expect(isEmpty([1,2,3])).to.equal(false);
    });

    it("should return false for non empty Array that has a value of null", () => {
        expect(isEmpty([null])).to.equal(false);
    });

    it("should return false for non empty Map", () => {
        expect(isEmpty({a: "1"})).to.equal(false);
    });

    //By ChatGPT
    it("should return true for empty Set", () => {
        expect(isEmpty(new Set())).to.equal(true);
    });
    
    it("should return false for non-empty Set", () => {
        expect(isEmpty(new Set([1, 2, 3]))).to.equal(false);
    });
    
    it("should return true for empty Object with prototype properties", () => {
        const obj = Object.create({ prop: 'value' });
        expect(isEmpty(obj)).to.equal(true);
    });
    
    it("should return true for empty Buffer", () => {
        expect(isEmpty(Buffer.alloc(0))).to.equal(true);
    });
    
    it("should return false for non-empty Buffer", () => {
        expect(isEmpty(Buffer.from("test"))).to.equal(false);
    });
    
});
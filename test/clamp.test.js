import { expect } from 'chai';
import clamp from '../src/clamp.js';

describe('clamp', () => {

    //given number should be returned
    it("should return the given number when it is within the limits, lower and upper are positive", () => {
        expect(clamp(8, 5, 10)).to.equal(8);
    });

    it("should return the given number when it is within the limits, lower and upper bounds are negative", () => {
        expect(clamp(-4, -10, -1)).to.equal(-4);
    });

    it("should return the given number when it is within the limits, lower is negative and upper positive, given is positive", () => {
        expect(clamp(5, -10, 10)).to.equal(5);
    });

    it("should return the given number when it is within the limits, lower is negative and upper positive, given is negative", () => {
        expect(clamp(-5, -10, 10)).to.equal(-5);
    });

    it("should return the given number when it is within the limits, lower is negative and upper positive, given is zero", () => {
        expect(clamp(0, -10, 10)).to.equal(0);
    });

    it("should return the given number when it is within the limits, lower bound is zero", () => {
        expect(clamp(10, 0, 100)).to.equal(10);
    });

    it("should return the given number when it is within the limits, upper bound is zero", () => {
        expect(clamp(-1, -5, 0)).to.equal(-1);
    });

    it("should return the given number when it is within the limits, upper bound is NaN", () => {
        expect(clamp(-1, -5, NaN)).to.equal(-1);
    });

    it("should return the given number when it is within the limits, upper bound is null", () => {
        expect(clamp(-1, -5, null)).to.equal(-1);
    });

    it("should return the given number when it is within the limits, upper bound is undefined", () => {
        expect(clamp(-1, -5, undefined)).to.equal(-1);
    });

    it("should return the given number when it is within the limits, lower bound is NaN", () => {
        expect(clamp(1, NaN, 10)).to.equal(1);
    });

    it("should return the given number when it is within the limits, lower bound is null", () => {
        expect(clamp(1, null, 10)).to.equal(1);
    });

    it("should return the given number when it is within the limits, lower bound is undefined", () => {
        expect(clamp(1, undefined, 10)).to.equal(1);
    });

    it("should return the given number when it is within the limits, lower bound is not numeric", () => {
        expect(clamp(1, "abc", 10)).to.equal(1);
    });

    it("should return the given number when it is within the limits, given has decimals", () => {
        expect(clamp(8.5, 8, 9)).to.equal(8.5);
    });

    it("should return the given number when it is within the limits, upper has decimals", () => {
        expect(clamp(8, 7, 8.1)).to.equal(8);
    });

    it("should return the given number when it is within the limits, upper is Infinity", () => {
        expect(clamp(8, 7, Infinity)).to.equal(8);
    });

    it("should return the given number when it is within the limits, lower is -Infinity", () => {
        expect(clamp(-1, Infinity, Infinity)).to.equal(-1);
    });


    //lower bound should be returned
    it("should return the lower bound when given number is less than the lower bound, lower is negative", () => {
        expect(clamp(-14, -10, 14)).to.equal(-10);
    });

    it("should return the lower bound when given number is less than the lower bound, lower is negative, upper negative", () => {
        expect(clamp(-14, -10, -1)).to.equal(-10);
    });

    it("should return the lower bound when given number is less than the lower bound, lower is negative, upper is zero", () => {
        expect(clamp(-14, -10, 0)).to.equal(-10);
    });

    it("should return the lower bound when given number is less than the lower bound, lower is zero", () => {
        expect(clamp(-1, 0, 10)).to.equal(0);
    });

    it("should return the lower bound when given number is less than the lower bound, lower is positive, given is positive", () => {
        expect(clamp(5, 10, 100)).to.equal(10);
    });

    it("should return the lower bound when given number is less than the lower bound, lower is positive, given is negative", () => {
        expect(clamp(-5, 10, 100)).to.equal(10);
    });

    it("should return the lower bound when given number is less than the lower bound, lower is positive, given is zero", () => {
        expect(clamp(-5, 10, 100)).to.equal(10);
    });

    it("should return the lower bound when given number is less than the lower bound, lower and give are the same", () => {
        expect(clamp(-5, -5, 100)).to.equal(-5);
    });

    it("should return zero when given number is negative and lower bound is NaN", () => {
        expect(clamp(-5, NaN, 100)).to.equal(0);
    });

    it("should return zero when given number is negative and lower bound is null", () => {
        expect(clamp(-5, null, 100)).to.equal(0);
    });

    it("should return zero when given number is negative and lower bound is undefined", () => {
        expect(clamp(-5, undefined, 100)).to.equal(0);
    });

    it("should return zero when given number is negative and lower bound is not numeric", () => {
        expect(clamp(-5, "abc", 100)).to.equal(0);
    });

    it("should return the lower bound when given number is less than the lower bound, lower has decimals", () => {
        expect(clamp(0, 0.01, 1)).to.equal(0.01);
    });

    it("should return the lower bound when given number is less than the lower bound, given has decimals", () => {
        expect(clamp(0.2, 1, 2)).to.equal(1);
    });

    it("should return the lower bound when given number is less than the lower bound, given is -Infinity", () => {
        expect(clamp(-Infinity, 1, 2)).to.equal(1);
    });

    it("should return the lower bound when given number is less than the lower bound, given and lower are -Infinity", () => {
        expect(clamp(-Infinity, -Infinity, 2)).to.equal(-Infinity);
    });

    //upper bound should be returned
    it("should return the upper bound when given number more than upper bound, upper and lover positive", () => {
        expect(clamp(15, 5, 10)).to.equal(10);
    });

    it("should return the upper bound when given number is more than upper bound, upper positive, lower negative", () => {
        expect(clamp(50, -50, 10)).to.equal(10);
    });

    it("should return the upper bound when given number is more than upper bound, upper positive, lower zero", () => {
        expect(clamp(50, 0, 10)).to.equal(10);
    });

    it("should return the upper bound when given number is more than upper bound, upper zero", () => {
        expect(clamp(5, -55, 0)).to.equal(0);
    });

    it("should return the upper bound when given number is more than upper bound, upper negative, given negative", () => {
        expect(clamp(-5, -55, -3)).to.equal(-3);
    });

    it("should return the upper bound when given number is more than upper bound, upper negative, given positive", () => {
        expect(clamp(100, -55, -10)).to.equal(-10);
    });

    it("should return the upper bound when given number is more than upper bound, upper negative, given zero", () => {
        expect(clamp(0, -55, -10)).to.equal(-10);
    });

    it("should return the upper bound when given number is the same as the upper bound", () => {
        expect(clamp(0, -55, 0)).to.equal(0);
    });

    it("should return zero when given number is positive and upper bound is NaN", () => {
        expect(clamp(10, -55, NaN)).to.equal(0);
    });

    it("should return zero when given number is positive and upper bound is null", () => {
        expect(clamp(10, -55, null)).to.equal(0);
    });

    it("should return zero when given number is positive and upper bound is undefined", () => {
        expect(clamp(10, -55, undefined)).to.equal(0);
    });

    it("should return zero when given number is positive and upper bound is not numeric", () => {
        expect(clamp(10, -55, "abc")).to.equal(0);
    });

    it("should return the upper bound when given number is more than upper bound, upper has decimals", () => {
        expect(clamp(4, 1, 3.6)).to.equal(3.6);
    });

    it("should return the upper bound when given number is more than upper bound, given has decimals", () => {
        expect(clamp(4.4, 1, 4)).to.equal(4);
    });

    it("should return the upper bound when given number is more than upper bound, given is Infinity", () => {
        expect(clamp(Infinity, 1, 4)).to.equal(4);
    });

    it("should return the upper bound when given number is more than upper bound, given and upper are Infinity", () => {
        expect(clamp(Infinity, 1, Infinity)).to.equal(Infinity);
    });

    it("should handle equal lower and upper bounds, the given number is within the bounds", () => {
        expect(clamp(10, 10, 10)).to.equal(10);
    });

    it("should handle equal lower and upper bounds, the given number is not within the bounds", () => {
        expect(clamp(1, 10, 10)).to.equal(10);
    });

});
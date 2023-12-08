import add from "../src/add.js";
import assert from "assert";
import { expect } from "chai";

describe("add", () => {
    it("should return the sum of two numbers.", () => {
        assert.strictEqual(add(1, 2), 3);
    });
    it("should return the sum of two numbers with one negative numbers.", () => {
        assert.strictEqual(add(-2, 3), 1);
    });
    it("should return the sum of two numbers with both negative numbers.", () => {
        assert.strictEqual(add(-2, -3), -5);
    });
    it("should return the sum of two numbers with one zero", () => {
        assert.strictEqual(add(0, 3), 3);
    });
    it("should return the sum of two numbers with both zeros", () => {
        assert.strictEqual(add(0, 0), 0);
    });
    
});
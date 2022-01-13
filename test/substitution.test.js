// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("Checking if input is valid", () => {
    it("should return decode string", () => {
       
    })
})

describe("substitution", () => {
    it("should encode a message by using the given substitution alphabet",() => {
        const expected = 'jrufscpw';
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("should have all unique parameters",() => {
        const actual = substitution("You are an excellent spy", "abcabcabcabcabcabcabcabcab");
        expect(actual).to.be.false;
    });
})

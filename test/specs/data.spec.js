const Data = require('../../app/data.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('addition', function() {
    let test, spy;

    beforeEach(() => {
        test = new Data();
        spy = chai.spy.on(test, 'addition');
    });

    afterEach(() => {
        test = null;
    });


    it('should add 2 value and return result', function() {
        expect(test.addition('hello ', true)).to.be.equal('hello true');
    });
    it('should add 2 value and return result', function() {
        expect(test.addition('hello ', false)).to.be.equal('hello false');
    });
    it('should add 2 value and return result', function() {
        expect(test.addition('hello ', '')).to.be.equal('hello ');
    });
    it('should add 2 value and return result', function() {
        expect(test.addition('hello', 5)).to.be.equal('hello5');
    });
    it('should add 2 value and return result', function() {
        expect(test.addition('hello', -2)).to.be.equal('hello-2');
    });
    it('should add 2 value and return result', function() {
        expect(test.addition('hello', 0)).to.be.equal('hello0');
    });
    it('should add 2 value and return result', function() {
        expect(test.addition(2, true)).to.be.equal(3);
    });
    it('should add 2 value and return result', function() {
        expect(test.addition(2, false)).to.be.equal(2);
    });
    it('should be called once', function() {
        test.addition(1);
        expect(spy).to.have.been.called(1);
    });



});

describe('testMultiple', function() {
    let test, spy;

    beforeEach(() => {
        test = new Data();
        spy = chai.spy.on(test, 'testMultiple');
    });

    afterEach(() => {
        test = null;
    });
    it('should multiple 2 value and return result', function() {
        expect(test.testMultiple('hello ', true)).to.be.equal(true);
    });
    it('should multiple 2 value and return result', function() {
        expect(test.testMultiple('hello ', false)).to.be.equal(true);
    });
    it('should multiple 2 value and return result', function() {
        expect(test.testMultiple('hello ', ' ')).to.be.equal(true);
    });
    it('should multiple 2 value and return result', function() {
        expect(test.testMultiple('hello ', 2)).to.be.equal(true);
    });
    it('should multiple 2 value and return result', function() {
        expect(test.testMultiple('hello ', -1)).to.be.equal(true);
    });
    it('should multiple 2 value and return result', function() {
        expect(test.testMultiple('hello ', 0)).to.be.equal(true);
    });
    it('should be called once', function() {
        test.testMultiple(1);
        expect(spy).to.have.been.called(1);
    });
});
describe('testMultipleBool', function() {
    let test, spy;

    beforeEach(() => {
        test = new Data();
        spy = chai.spy.on(test, 'testMultipleBool');
    });

    afterEach(() => {
        test = null;
    });
    it('should multiple 2 value and return result', function() {
        expect(test.testMultipleBool(5, true)).to.be.equal(5);
    });
    it('should multiple 2 value and return result', function() {
        expect(test.testMultipleBool(8, false)).to.be.equal(0);
    });
    it('should be number', function() {
        expect(test.testMultipleBool(2, true)).to.be.a('number');
    });
    it('should be called once', function() {
        test.testMultipleBool(1);
        expect(spy).to.have.been.called(1);
    });

});




describe('testDivide', function() {
    let test, spy;

    beforeEach(() => {
        test = new Data();
        spy = chai.spy.on(test, 'testDivide');
    });

    afterEach(() => {
        test = null;
    });
    it('should divide 2 value and return result', function() {
        expect(test.testDivide('hello ', true)).to.be.equal(true);
    });
    it('should divide 2 value and return result', function() {
        expect(test.testDivide('hello ', false)).to.be.equal(true);
    });
    it('should divide 2 value and return result', function() {
        expect(test.testMultiple('hello ', ' ')).to.be.equal(true);
    });
    it('should divide 2 value and return result', function() {
        expect(test.testDivide('hello ', 2)).to.be.equal(true);
    });
    it('should divide 2 value and return result', function() {
        expect(test.testDivide('hello ', -1)).to.be.equal(true);
    });
    it('should divide 2 value and return result', function() {
        expect(test.testDivide('hello ', 0)).to.be.equal(true);
    });
    it('should be called once', function() {
        test.testDivide(1);
        expect(spy).to.have.been.called(1);
    });
})


describe('testDivideBool', function() {
    let test, spy;

    beforeEach(() => {
        test = new Data();
        spy = chai.spy.on(test, 'testDivideBool');
    });

    afterEach(() => {
        test = null;
    });

    it('should divide 2 value and return result', function() {
        expect(test.testDivideBool(5, true)).to.be.equal(5);
    });

    it('should divide 2 value and return result', function() {
        expect(test.testDivideBool(8, false)).to.be.equal(0);
    });
    it('should be called once', function() {
        test.testDivideBool(1);
        expect(spy).to.have.been.called(1);
    });

});

describe('stringConversion', function() {
    let test, spy;

    beforeEach(() => {
        test = new Data();
        spy = chai.spy.on(test, 'stringConversion');
    });

    afterEach(() => {
        test = null;
    });

    it('should return string when called with number true', function() {
        expect(test.stringConversion(true)).to.be.equal('true');
    });
    it('should return string when called with number true', function() {
        expect(test.stringConversion(2)).to.be.equal('2');
    });
    it('should return string when called with number true', function() {
        expect(test.stringConversion('hello')).to.be.equal('hello');
    });
    it('should be called once', function() {
        test.stringConversion(1);
        expect(spy).to.have.been.called(1);
    });

});

describe('numberConversion', function() {
    let test, spy;

    beforeEach(() => {
        test = new Data();
        spy = chai.spy.on(test, 'numberConversion');
    });

    afterEach(() => {
        test = null;
    });
    it('should divide 2 value and return result', function() {
        expect(test.numberConversion('8', '2')).to.be.equal(4);
    });
    it('should divide 2 value and return result', function() {
        expect(test.numberConversion('2', 1)).to.be.equal(2);
    });
    it('should divide 2 value and return result', function() {
        expect(test.numberConversion(30, '5')).to.be.equal(6);
    });
    it('should be called once', function() {
        test.numberConversion(1);
        expect(spy).to.have.been.called(1);
    });

});

describe('boolConversion', function() {
    let test, spy;

    beforeEach(() => {
        test = new Data();
        spy = chai.spy.on(test, 'boolConversion');
    });

    afterEach(() => {
        test = null;
    });

    it('should return true when called with number true', function() {
        expect(test.boolConversion("0")).to.be.equal(true);
    });
    it('should return true when called with number true', function() {
        expect(test.boolConversion(" ")).to.be.equal(true);
    });
    it('should return true when called with number true', function() {
        expect(test.boolConversion(1)).to.be.equal(true);
    });
    it('should return false when called with number true', function() {
        expect(test.boolConversion(0)).to.be.equal(false);
    });
    it('should return true when called with number true', function() {
        expect(test.boolConversion("hello")).to.be.equal(true);
    });
    it('should return false when called with number true', function() {
        expect(test.boolConversion("")).to.be.equal(false);
    });
    it('should be called once', function() {
        test.boolConversion(1);
        expect(spy).to.have.been.called(1);
    });


});
const Array = require('../../app/array.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('array', function() {
    let test, spy;

    beforeEach(() => {
        test = new Array();
        spy = chai.spy.on(test, 'array');
    });

    afterEach(() => {
        test = null;
    });

    it('should be equal', function() {
        expect(test.array()).to.not.equal('movie')
    });
    it('should be called once', function() {
        test.array()
        expect(spy).to.have.been.called();
    });

});

describe('array1', function() {
    let test, spy;

    beforeEach(() => {
        test = new Array();
        spy = chai.spy.on(test, 'array1');
    });

    afterEach(() => {
        test = null;
    });

    it('should be equal', function() {
        arr1 = ['manufact1', 'manufact2', 'manufact3']
        expect(test.array1(arr1)).to.eql(['manufact1', 'manufact2', 'manufact3']);
    });
    it('should have length 3', function() {
        arr1 = ['manufact1', 'manufact2', 'manufact3']
        expect(test.array1(arr1)).to.have.length(3)
    });
    it('should have length 3', function() {
        arr1 = ['manufact1', 'manufact2', 'manufact3']
        expect(test.array1(arr1)).to.be.an('array');
    });


    describe('array2', function() {
        let test, spy;

        beforeEach(() => {
            test = new Array();
            spy = chai.spy.on(test, 'array2');
        });

        afterEach(() => {
            test = null;
        });

        it('should be equal', function() {
            arr2 = ['jon', 'jane', 'john']
            expect(test.array2(arr2)).to.be.not.equal('jon');
        });
        it('should be equal', function() {
            arr2 = ['jon', 'jane', 'john']
            expect(test.array2(arr2)).to.be.equal('hello jon');
        });


    });

    describe('array3', function() {
        let test, spy;

        beforeEach(() => {
            test = new Array();
            spy = chai.spy.on(test, 'array3');
        });

        afterEach(() => {
            test = null;
        });

        it('should be true', function() {
            arr3 = [1, 2, 3]
            expect(test.array3(arr3)).to.be.true;
        });
        it('should be not be false', function() {
            arr3 = [1, 2, 3]
            expect(test.array3(arr3)).to.not.be.false;
        });
    });

    describe('array4', function() {
        let test, spy;

        beforeEach(() => {
            test = new Array();
            spy = chai.spy.on(test, 'array4');
        });

        afterEach(() => {
            test = null;
        });

        it('should be array', function() {
            arr4 = [1, 5, 2, 9]
            expect(test.array4(arr4)).to.be.an('array')
        });
        it('should be include', function() {
            arr4 = [1, 5, 2, 9]
            expect(test.array4(arr4)).to.include(5)
        });
        it('should have length 4', function() {
            arr4 = [1, 5, 2, 9]
            expect(test.array4(arr4)).to.have.length(4)
        });
        it('should be equal', function() {
            arr4 = [1, 5, 2, 9]
            expect(test.array4(arr4)).to.eql([9, 5, 2, 1])
        });
    });

    describe('array5', function() {
        let test, spy;

        beforeEach(() => {
            test = new Array();
            spy = chai.spy.on(test, 'array5');
        });

        afterEach(() => {
            test = null;
        });

        it('should be cequal', function() {
            arr5 = [1, 6, 7, 8, 3, 4, 5, 6]
            expect(test.array5(arr5)).to.eql([6, 7, 8, 4, 5, 6]);
        });
        it('should be array', function() {
            arr5 = [1, 6, 7, 8, 3, 4, 5, 6]
            expect(test.array5(arr5)).to.be.an('array')
        });
    });

    describe('array6', function() {
        let test, spy;

        beforeEach(() => {
            test = new Array();
            spy = chai.spy.on(test, 'array6');
        });

        afterEach(() => {
            test = null;
        });

        it('should be equal', function() {

            expect(test.array6([2, 25, 36, 12, 3], 12)).to.be.equal(3);
        });
        it('should not be equal', function() {

            expect(test.array6([2, 25, 36, 12, 3], 12)).to.not.be.equal(5);
        });
    });

    describe('loop', function() {
        let test, spy;

        beforeEach(() => {
            test = new Array();
            spy = chai.spy.on(test, 'loop');
        });

        afterEach(() => {
            test = null;
        });

        it('should be cequal', function() {
            arr = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5']
            expect(test.loop()).to.be.equal('a');
        });
        it('should be cequal', function() {
            arr = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5']
            expect(test.loop()).to.not.be.equal(2);
        });
    });

    describe('showPrime', function() {
        let test, spy;

        beforeEach(() => {
            test = new Array();
            spy = chai.spy.on(test, 'showPrime');
        });

        afterEach(() => {
            test = null;
        });

        it('should include', function() {
            expect(test.showPrime(11)).to.not.equal(4);
        });

    });

    describe('showOdd', function() {
        let test, spy;

        beforeEach(() => {
            test = new Array();
            spy = chai.spy.on(test, 'showOdd');
        });

        afterEach(() => {
            test = null;
        });

        it('should include', function() {
            expect(test.showOdd(11)).to.not.equal(4);
        });
        it('should be called once', function() {
            test.showOdd(1);
            expect(spy).to.have.been.called(1);
        });

    });
});
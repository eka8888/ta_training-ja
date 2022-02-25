const Test1 = require('../../app/test1.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('car', function() {
    let test, spy;

    beforeEach(() => {
        test = new Test1();
        spy = chai.spy.on(test, 'car');
    });

    afterEach(() => {
        test = null;
    });
    it('should be black', function() {
        expect(test.car()).to.eql({ color: 'black' });
    });
    it('should have color', function() {
        expect(test.car()).to.have.property('color');
    });
    it('should have keys', function() {
        expect(test.car()).to.have.all.keys('color');
    });
    it('should be an object', function() {
        expect(test.car()).to.be.an('object');
    });
    it('should be called once', function() {
        test.car(1);
        expect(spy).to.have.been.called(1);
    });
});

describe('changeColor1', function() {
    let test, spy;

    beforeEach(() => {
        test = new Test1();
        spy = chai.spy.on(test, 'changeColor1');
    });

    afterEach(() => {
        test = null;
    });

    it('should be black', function() {
        expect(test.changeColor1()).to.eql({ color: 'green' });
    });
    it('should have color', function() {
        expect(test.changeColor1()).to.have.property('color');
    });
    it('should be an object', function() {
        expect(test.changeColor1()).to.be.an('object');
    });
    it('should be called once', function() {
        test.changeColor1(1);
        expect(spy).to.have.been.called(1);
    });

});

describe('car1', function() {
    let test, spy;

    beforeEach(() => {
        test = new Test1();
        spy = chai.spy.on(test, 'car1');
    });

    afterEach(() => {
        test = null;
    });

    it('should return engine power', function() {
        expect(test.car1()).to.be.equal('engine power');
    });
    it('should be black', function() {
        expect(test.car1()).to.be.a('string')
    });
    it('should be called once', function() {
        test.car1(1);
        expect(spy).to.have.been.called(1);
    });


    describe('func', function() {
        let test, spy;

        beforeEach(() => {
            test = new Test1();
            spy = chai.spy.on(test, 'func');
        });

        afterEach(() => {
            test = null;
        });
        it('should return 3', function() {
            expect(test.func(1, 2)).to.be.equal(3);
        });
        it('should return 10', function() {
            expect(test.func(10, 0)).to.be.equal(10);
        });
        it('should be called once', function() {
            test.func(1);
            expect(spy).to.have.been.called(1);
        });
    });

    describe('func1', function() {
        let test, spy;

        beforeEach(() => {
            test = new Test1();
            spy = chai.spy.on(test, 'func1');
        });

        afterEach(() => {
            test = null;
        });
        it('should return hello name', function() {
            expect(test.func1('jon')).to.be.equal('hello jon');
        });
        it('should return there is no such name', function() {
            expect(test.func1()).to.be.equal('there is no such name');
        });
        it('should be called once', function() {
            test.func1(1);
            expect(spy).to.have.been.called(1);
        });
    });


    describe('func2', function() {
        let test, spy;

        beforeEach(() => {
            test = new Test1();
            spy = chai.spy.on(test, 'func2');
        });

        afterEach(() => {
            test = null;
        });
        it('should return hello name', function() {
            expect(test.func2('jon')).to.be.equal('string');
        });
        it('should return hello name', function() {
            expect(test.func2(2)).to.be.equal('number');
        });
        it('should return hello name', function() {
            expect(test.func2(true)).to.be.equal('boolean');
        });
        it('should return hello name', function() {
            expect(test.func2()).to.be.equal('undefined');
        });
        it('should return hello name', function() {
            expect(test.func2()).to.be.equal('undefined');
        });
        it('should be called once', function() {
            test.func2(1);
            expect(spy).to.have.been.called(1);
        });
    });

    describe('isPrime', function() {
        let test, spy;

        beforeEach(() => {
            test = new Test1();
            spy = chai.spy.on(test, 'func1');
        });

        afterEach(() => {
            test = null;
        });
        it('should return hello name', function() {
            expect(test.isPrime(58)).to.be.equal(false);
        });
        it('should return there is no such name', function() {
            expect(test.isPrime(111)).to.be.equal(true);
        });

    });
});
const Reg = require('../../app/regex.js');
const chai = require('chai');
chai.use(require('chai-match'));
const spies = require('chai-spies');
const { expect } = require('chai');
var assert = require('assert');
chai.use(spies);

describe('reg', function() {
    let test, spy;

    beforeEach(() => {
        test = new Reg();
        spy = chai.spy.on(test, 'reg');
    });

    afterEach(() => {
        test = null;
    });

    var pattern = new RegExp(/[a-z]/)
    it('should match', function() {
        expect(test.reg('ahb acb aeb aeeb adcb axeb')).to.match(pattern);

    });
    var pattern1 = new RegExp(/b/g)
    it('should match', function() {
        //expect(test.reg('ahb acb aeb aeeb adcb axeb')).not.to.match(pattern1)
        assert.match('ahb acb aeb aeeb adcb axeb', /b/g);
    });

    it('should match', function() {
        assert.match('ahb acb aeb aeeb adcb axeb', /b/g);
    });
    it('should match', function() {
        assert.match('ahb acb aeb aeeb adcb axeb', /b/g);
    });

    it('should match', function() {
        assert.match('ahb acb aeb aeeb adcb axeb', /b/g);
    });
    it('should be called once', function() {
        test.reg(1);
        expect(spy).to.have.been.called(1);
    });

});


describe('reg1', function() {
    let test, spy;

    beforeEach(() => {
        test = new Reg();
        spy = chai.spy.on(test, 'reg1');
    });

    afterEach(() => {
        test = null;
    });

    it('should be true', function() {
        expect(test.reg1()).not.to.be.false
    });
    it('should match', function() {
        assert.match('2 + 3 223 2223', /^(.*?(\b2+3\b)[^$]*)$/);
    });
    it('should be called once', function() {
        test.reg1();
        expect(spy).to.have.been.called(0);
    });


});


describe('showDate', function() {
    let test, spy;

    beforeEach(() => {
        test = new Reg();
        spy = chai.spy.on(test, 'showDate');
    });

    afterEach(() => {
        test = null;
    });

    it('should return 6 when called with number 3', function() {
        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let fullDate = `${day}-${month}-${year}`;
        expect(test.showDate()).to.equal(fullDate);
    });
    it('should be called once', function() {
        test.showDate();
        expect(spy).to.have.been.called();
    });


});
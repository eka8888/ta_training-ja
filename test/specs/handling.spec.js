const Handl = require('../../app/handling.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('handl', function() {
    let test, spy;

    beforeEach(() => {
        test = new Handl();
        spy = chai.spy.on(test, 'handl');
    });

    afterEach(() => {
        test = null;
    });

    it('should be true', function() {
        expect(test.handl()).to.be.eql('let must be declared')
    });

});

describe('handl1', function() {
    let test, spy;

    beforeEach(() => {
        test = new Handl();
        spy = chai.spy.on(test, 'handl1');
    });

    afterEach(() => {
        test = null;
    });

    it('should be true', function() {
        expect(test.handl1()).to.be.eql('cannot be divided by zero')
    });

})
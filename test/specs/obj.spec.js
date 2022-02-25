const Obj = require('../../app/obj.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('obj', function() {
    let test, spy;

    beforeEach(() => {
        test = new Obj();
        spy = chai.spy.on(test, 'obj');
    });

    afterEach(() => {
        test = null;
    });

    it('should add 2 value and return result', function() {
        expect(test.obj()).to.equal(true);
    });

    it('should be called once', function() {
        test.obj();
        expect(spy).to.have.been.called();
    });

});
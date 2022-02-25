class Data {
    constructor() {

    };


    addition(val, val1) {
        let result
        return result = val + val1
    }

    testMultiple(val, val1) {
        let result = val * val1
        var valueIsNaN = isNaN(result);
        return valueIsNaN
    }
    testMultipleBool(val, val1) {
        let result
        return result = val * val1

    }
    testDivide(val, val1) {
        let result = val / val1
        var valueIsNaN = isNaN(result);
        return valueIsNaN
    }
    testDivideBool(val, val1) {
        let result
        return result = val * val1

    }

    stringConversion(val) {
        val = String(val);
        return val

    }
    numberConversion(val, val1) {
        let result = val / val1
        return result
    }
    boolConversion(val) {
        return Boolean(val)
    }

}
module.exports = Data;
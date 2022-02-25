class Handl {
    constructor() {

    };

    handl() {
        try {
            return a
                //let a = 3
        } catch {
            return ('let must be declared')
        }
    }

    handl1() {

        try {
            let x = 1 / 0
            throw "cannot be divided by zero";
        } catch (err) {
            return err
        }
    }

};

module.exports = Handl;
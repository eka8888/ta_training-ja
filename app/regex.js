class Reg {
    constructor() {

    };

    reg(str, regex) {
        //return str.match(regex)
    }

    reg1() {
        var str = '2 + 3 223 2223';
        console.log(/^(.*?(\b2+3\b)[^$]*)$/.test(str))
    }

    showDate() {
        let date = new Date()
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let fullDate = `${day}-${month}-${year}`;
        return fullDate
    }


};

module.exports = Reg;
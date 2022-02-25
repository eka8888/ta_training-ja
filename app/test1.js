class Test1 {
    constructor() {

    };

    car() {
        return { color: 'black' }
    }

    changeColor1() {
        const user = { color: 'black' }
        user['color'] = 'green'
        return user
    }

    car1() {
        const user = { color: 'black' }
        user['power'] = function() {
            return `engine power`
        }
        return user.power()

    }

    func(pear, apples) {
        return pear + apples
    }

    func1(name) {
        if (name) {
            return 'hello ' + name
        } else {
            return 'there is no such name'
        }

    }

    func2(par1) {

        return typeof par1
    }

    isPrime(num) {


        for (var i = 2; i < num; i++) {

            if (num % i !== 0) {
                return true;
            } else {
                return false;
            }
        }
    }

}
module.exports = Test1;
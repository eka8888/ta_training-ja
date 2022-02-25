class Array {
    constructor() {

    };

    array() {
        let arr = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5']
        return arr.forEach(el => console.log(el))
    }
    array1(arr1) {
        return arr1.join(' ').split(' ')
    }
    array2(arr2) {
        for (let i of arr2) {
            return 'hello ' + i
        }
    }
    array3(arr3) {
        return Boolean(arr3)
    }
    array4(arr4) {
        return arr4.sort((a, b) => b - a)
    }
    array5(arr5) {
        return arr5.filter(el => el > 3)
    }
    array6(arr6, n) {
        return arr6.indexOf(n)
    }

    loop() {
        for (let i = 20; i > 10; i--) {
            return 'a';
        }
    }

    showPrime(n) {
        for (let i = 0; i <= n; i++) {
            let prime = 0;
            for (let j = 1; j <= n; j++) {
                let testRes = i % j;
                if (testRes === 0) {
                    prime = prime + 1;
                }
            }
            if (prime === 2) {
                console.log(i);
            }
        }
    }

    showOdd(n) {
        for (let i = 0; i <= n; i++) {
            if (i % 2 !== 0) {
                console.log(i)
            }
        }
    }
}
module.exports = Array;
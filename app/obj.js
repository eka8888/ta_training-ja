class Obj {
    constructor() {

    };



    obj() {
        const animal = {
            move: true
        }

        const cat = {}
        cat.__proto__ = animal;
        return cat.move
    }
}
module.exports = Obj;

class Person {

    #_id;    

    constructor(name, age) {
        this._name = name;
        this._age = age;
        this.#_id = 1235;
        this.log();
    }

    get name() {
        return this.name;
    }

    get id() {
        return this.#_id;
    }

    log() {
        console.log("Name: "+this._name+"  Age: "+this._age+"  ID: "+this.id);
    }
    
}



var P = new Person("Marcus", 32);
P._id = 88888;
P.log();


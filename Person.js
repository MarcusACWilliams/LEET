
class Person {

    #_id;    
    #_name;
    #_first;
    #_last;

    constructor(name, age) {
        this.name = name;
        this._age = age;
        this.#_id = 1235;
        this.log();
        Object.seal(this);
    }

    get name() {
        return this.#_name;
    }
    set name(val) {
        this.#_name = val;
    }

    get id() {
        return this.#_id;
    }

    log() {
        console.log("Name: "+this.name+"  Age: "+this._age+"  ID: "+this.id);
    }
    


}

/*
var P = new Person("Marcus", 32);
P._id = 88888;
//P.#_id = 55555;
console.log(P._id);

P.test = 10;
console.log(P.test);
//console.log(P.#_id);
P.log();

P._name = "Tom";
console.log(P.name);

var key = Object.keys(P);

key.forEach( k => {
    console.log(k);
});

var props = Object.getOwnPropertyNames(P);

var rem = 54mod(4)
var quo = ((54-rem)4) 
*/
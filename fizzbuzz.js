/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var i = 1;
    var ret = [];
    var s;

    console.log("Boom!");
    s = '';
    while (i <= n) {

        if (i % 3 == 0) {
            s = s + "fizz";
        }
        if (i % 5 == 0) {
            s = s + "buzz";
        }
        i++;

        //ret.push(s);

    }

    //console.log(rando(1, 2));
    console.log(s);
    return;
};

function rando(a, b) {
    return a + b;
}

var add = (
    function () {
        var counter = 0;

        return {
            increment: function () {
                counter += 1;
                console.log(counter);
                return counter
            },

            decrement: function () {
                counter -= 1;
                console.log(counter);
                return counter
            }
        };
    })();

function Person(first, last, age) {
    var first = Namer(first);
    var last = Namer(last);
    var age = age;

    Object.defineProperty(this, "name", {
        get: function () {
            return first.value + " " + last.value;
        },
        set: function (n) {
            spl = n.split(" ");
            first = Namer(spl[0]);
            last = Namer(spl[1]);
        }
    });
};

const Namer = function(name) { 
    var ret = new tName(name);
    return ret;
};

function tName(name) {
    var value;    //Private Variable

    // Validation Logic here
    if(name == null || name == "") {
        console.log("null name error");
        throw 'Name cannot be NULL or Empty!';  
    }
        value = name; // Set private variable after validation
    
    // Define get/set
    Object.defineProperty(this, 'value', {
        get: function () {
            return value;
        },
        set: function (value) {
            return new tName(value);// Set returns a new object that invokes the validation logic
        }
    });

    return this;
}


var reverse = function (word) {

    console.log("Reversing!!!");
    //Get Word size
        //start length-1
    var wordMaxIndex = word.length-1;
    var reversedWord = "";

    //count to 0
    for(wordMaxIndex;wordMaxIndex>=0;wordMaxIndex--){
        //print char
        reversedWord = reversedWord.concat(word.charAt(wordMaxIndex).toString());
    }
    console.log(reversedWord);
    return    

}

var reverseRecurse = function(word, index=0) {
    if(word.charAt(index) == ""){
        return "";
    }
    //var reversedWord ="";
    var reversedWord = reverseRecurse(word, index+1);
    
    reversedWord = reversedWord.concat(word.charAt(index));
    if(index == 0){
        console.log(reversedWord);
    }
    return reversedWord;
}

var fib = function (nthFibNumber){
    let dictionary = new Map()
    dictionary.set(0,0)
    dictionary.set(1,1)
    dictionary.set(2,1)
    if(nthFibNumber<=2){
        console.log(dictionary.get(nthFibNumber));
        return;
    }
    let currentFibNumber = 3
    while(currentFibNumber<=nthFibNumber){
        dictionary.set(currentFibNumber,dictionary.get(currentFibNumber-1)+dictionary.get(currentFibNumber-2)  )
        currentFibNumber++;
    }    
    console.log(dictionary.get(nthFibNumber));
    return;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
};

var reverseLL = function () {

}

// Name.prototype.namecheck = function () {
//     if (this.name == null || this.name.trim() == "") {
//         console.log("null name error");
//         throw 'Name cannot be NULL or Empty!';
//     } else
//         console.log("Name check passed");
//     return this.name;
// };

//var x = Name('Marcus').setName();
//console.log(Name('Yen'));
//var a = new tName();
//var b = new tName();


var mom = new Person("Tylla", "Williams", 22);
var wife = new Person("test", "test", 22);

//console.log(mom.name);
mom.name = 'Wendy Williams';
//console.log("Mom's new name: " + mom.name);
fib(0);
fib(1);
fib(2);
fib(3);
fib(4);
fib(5);
fib(6);
fib(7);
fib(8);
//reverse("today");
//reverseRecurse("today");
//fizzBuzz(10);

//add.increment();
//add.increment();
//add.decrement();
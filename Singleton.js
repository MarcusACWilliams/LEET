/*
1)Global(static) Reference 2) A way to retrieve(getInstance) that reference 3) Protection of original instance
*/
var Highlander = (function Highlander(test_name = "Marcus") {
    
    var _highlander;
    var name;
    
    if(Highlander == null || Highlander == undefined) {
        _highlander = new Highlander();
        _highlander.name = name;
        console.log("I am " + name + "!");
        return _highlander;
    }

    var getInstance = function() {

            _highlander = this;
            this.name = name;
            

            return _highlander; 
    };


        console.log("There can only be ONE!");
        return _highlander;
    
})();

//Highlander.prototype.newHighlander = getInstance;



//var t = this.Highlander.test;
var lander = new Highlander("Yen");
console.log("I am " + lander.name + "!");
var nextLander = new Highlander("Henry");
console.log("I am " + nextLander.name + "!");
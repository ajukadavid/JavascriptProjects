//FACADE PATTERN

//provides an interface wich shields clients from complex functionality
//"hiding" code

var Mortgage = function(name) {
    this.name = name;
}

Mortage.prototype = {
    applyFor: function(amount){
        //access multiple subsystems...
        var result = "approved";
        if (!new Bank().verify(this.name, amount)){
            result = "denied";
        }else if (!new Credit().get(this.name)){
            result = "denied";
        }else if (!new Background().check(this.name)){
            result = "denied";
        }
        return this.name + " has been " + result + " for a " + amount + " mortgage ";
    }
    
}
var Bank = function(){
    //...
}

var Credit = function(){
    //...
}
var Background = function(){
    //...
}

//Mortgage
//applyFor
//set
//getter
//buy
//sell

function run() {
    var mortage = new Mortage("David");
    var result = Mortgage.applyFor("$500")

    console.log( result )
}

run();
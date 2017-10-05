
//Singleton Pattern

//Can only have one instance, you need to manage the single instance

var mySingleton = (function(){
//instance stores a reference to the singleton
var instance;

function init(){
    //Singleton

    function privateMethod(){
        console.log("i am private");
    }
    var privateVariable = "im also private";

    var privateRandomNumber = Math.random();

    return {
        publicmethod: function(){
            console.log("public method");
        },
        publicProperty: "im a public property",
        getRandomNumber: function(){
            return privateRandomNumber;
        }
    }
}
            return {
                getInstance : function(){
                    if(!instance){
                        instance = init();
                    }
                    return instance;
                }
            };
})();
var singleA = mySingleton.getInstance();
//We don't want to access new  mySingleton()
var singleB = mySingleton.getInstance();
console.log( singleA );
console.log( singleB );
console.log( singleA.getRandomNumber() == singleB.getRandomNumber() );


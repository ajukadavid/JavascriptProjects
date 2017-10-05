//Constructor Pattern

//create object
//set and get propeerties
//Constructor


//var newObject = {}

//
// Ways to cdreate objects in javascript
//
// var newObject =  Object.create( Object.prototype );

// var newObject = new Object();

//1.

// set
// newObject.somekey = "hello";

// get
// var value = newObject.somekey;

// console.log( newObject );
// console.log (value );

// //2
// newObject["somekey"] = "hello";

// //get
// var value = newObject["somekey"];

// console.log( value )


//4


//set
// Object.defineProperty( newObject, "somekey", {
//     value : "hello",
//     writable : true,
//     enumerable: true,
//     configurable: true,
// })

// var defineProp = function(obj, key, value){
//     var config = {
//         value: value,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
//     Object.defineProperty( obj, key, config)
// }
 
//get

// var person = Object.create(Object.prototype);

// defineProp( person, "car", "something");

// console.log( person );

//4

//set
//Object.defineProperties( newObject , {
//     "somekey" : {
//         value: "hello",
//         writable: true,

//     }
// })
//
//Get
//
// var value = newObject.somekey;

// console.log( newObject );
// console.log( value );


function Car(model, year, miles){
     this.model = model;
     this.year = year;
     this.miles = miles;

     this.toString = function(){
         return this.model + " has done "+ this.miles + " miles ";

     }
}
    var civic = new Car("honda", 2009, 200)
    var range = new Car("Range Rover", 2017, 100);

    console.log( civic.toString() );
    console.log( range.toString() );
    console.log(range.miles)

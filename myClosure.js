var obj = {
    num: 2
}

function addToThis(a, b, c){
    return this.num + a + b + c;
};

console.log(addToThis.call(obj, 1, 2, 3)); 
//functionName.call(object, functionArguments)

var arr = [1,2,3];
// the .apply method uses an array and returns the value

console.log(addToThis.apply(obj, arr))


var bound = addToThis.bind(obj);
// the .bind method bounds both the array and object to the same variable
console.log(bound(1,2,3))

/*
var object = {
    property: value
}

function functionName(arg1, arg2, argN){

}

functionName.call(obj, arg1, arg2, argN)

functionName.apply(obj [arg1, arg2, arg3])

var bound = functionName.bind(obj);

bound(arg1, arg2, arg3);
*/

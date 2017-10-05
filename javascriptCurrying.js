// function add(a){
//     return function(b){
//         return a + b;
//     }
// };

// var addToFive = add(5);
// console.log(addToFive())

//example 2

// "use strict"

// var avg = function(...n){
//     let tot = 0;
//     for(let i=0; i <n.length; i +=1){
//         tot +=n[i];
//     }
//     return tot/n.length;

// }
// function spiceUp(fn, ...n){
//     return function(...m){
//       return fn.apply(this, n.concat(m))
//     }
// }

// var doavg = spiceUp(avg, 1,2,3);
// console.log(doavg(4,5,6));

//example 3

// sayWhat = function(a){
//     return function(b){
//         return function(c){
//             console.log("saying " + a + " to " + b + " using " + c) 
//         }
//     }
// }
// sayWhat(`hello`)(`to friends`)(`javascript`);

// var sayHi = sayWhat(`hi`);
// var sayHiToMe = sayHi(`me`);
// var sayHiToMeUsingNothing = sayHiToMe(`nothing`);









function person(name){
    return function(age){
        return function(height){
            console.log("mr " + name + "is as old as " + age + "and is as tall as " + height);

        }
    }
}
person("david")(23)(13.5);
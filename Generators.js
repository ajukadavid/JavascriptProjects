// let i = [1,2,3,4];

// let iterator = i[Symbol.iterator]();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// function *generator(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// };
// let iterator = generator();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// function* infiniteMaker(){

//     let i = 0;
//     while(true){
//         yield i;
//         i++;
//     }
// }

// let iterator = infiniteMaker();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// function *generator(){
//     yield 1;
//     yield* anotherGenerator();
//     yield 3;
//     return 'hello';
// };

// function *anotherGenerator(){
//     yield 2;
// }

// let iterator = generator();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

function *generate(){
    yield 1;
    yield *func1;
    yield 3;
    return "hello";
};

function func1(num){
    num = 2;
    return num;
}

let iterator = generate();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")   //Maps are known for giving unique values not duplicate I"India" is give twice but it prints only once


// console.log(map);

for (const key of map) {
    console.log(key);    // Give the output in form of array ex: [ ]
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);   // Give the output sepeately Key:- Object "ex: IN:- India"
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
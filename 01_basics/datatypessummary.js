// primitive  call by value types
// 7 categories
// String ,Number,Boolean,null, undefined,symbol, BigInt

const score = 100;
const scorevalue = 100.3;
const isloggedin= true;
const outsideTemp = null;
 
let useremail; // undefined

 const id = Symbol('123')
 const anotherid = Symbol('123')

 console.log(id ===anotherid);  // false  as symbol is used for uniqueness therefore id and anotherid variable hold different symbols 
 // even though they are witten as '123'  they are different

//  const bignumber = 3334343435343434n // bigInt

// Reference types (Non primitive)  call by reference
// arrays , objects , functions

const heroes = ["shaktiman","naagraj","doga"] //arrays
 
let obj = {     // object 
    name:"yash",
    age : "21"
}

const myfunction = function(){  // function
    console.log("helloworld");
}

console.log(typeof outsideTemp);  // datatype of null variable is object
console.log(typeof myfunction); // function object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\

// memory -> stack and heap 
// stack (primitive) , heap (Non - primitive)

let myname = "yash kaushik"

let anothername = myname
anothername = "yash kumar kaushik"
console.log(anothername);
console.log(myname);

let user1 = {
    email : "user@google.com",
    upi : "user@ybl"
}

let user2 = user1  // refernce to user1
console.log(user2); //{ email: 'user@google.com', upi: 'user@ybl' }

user2.email = "user2@google.com"
console.log(user2.email); //user2@google.com

console.log(user1.email); //user2@google.com
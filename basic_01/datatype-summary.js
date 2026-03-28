// primitive

// 7 type: String , Number,  Boolean, Null,undefined,Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345654578784322n

// Reference (Non primitive)

// Array , Objects , Functions

const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "manish",
    age: 22,

}

const myFunction = function(){
    console.log("hello world");
    
}
 console.log(typeof anotherId );

//  +++++++++++++++++++++++++
//   stack (primitive), Heap(Non-primtive)
let myyoutubename = "manishmauryadotcom"
let anothername= myyoutubename
anothername = "chaiaurcode"

console.log(myyoutubename);

console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}

let userTow = userOne

userTow.email = "manish@google.com"

console.log(userOne.email);
console.log(userTow.email);


 
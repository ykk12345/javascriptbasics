const name = "yash"
const repocount = 20

// old syntax to concat the string 
console.log(name + repocount +"value");

// mordern syntax is by string interpolation technique
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

// string declaration
const gameName  = new String("yashkk")  // here string is an object with key value pair i.e 
/* 
0: "y" 
1: "a"
2: "s"
3: "h"
4: "k"
5 : "k"
this way it gives us many string methods and length 
*/

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

console.log(gameName.substring(0,3));
// we can also use slice and it can take -ve value also but substring can't take -ve value 

const newstring1 = "  yash  "
console.log(newstring1); 
console.log(newstring1.trim()); //Removes the leading and trailing white space and line terminator characters from a string.

const url = "https://kaushikyash.com/yash%20kaushik"

 console.log(url.replace('%20','-'));

console.log(url.includes('hello'));
console.log(gameName.split('-'));
//end

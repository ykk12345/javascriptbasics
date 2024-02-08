// console.log(2>1);  true
// console.log(2>=1);  true
// console.log(2<1); false
// console.log(2==1); false
//  console.log(2 != 1); //true

// console.log("2" >1);  // true as "2" is converted in number by the javascript 
// console.log("02" > 1); 
// console.log(null > 0);  // false
// console.log(null == 0); // false
// console.log(null >=0);  // true 

// the reason is that an equality check == and comparisons > < >= <= works 
// differently.
// comparisons convert null to a number, treating it as 0.
// that's why (3) null >=0  is true and (1) null > 0 is false.

// console.log(undefined == 0);  // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false

// strict check === it checks the data types also and don't do the conversions 

console.log("2"===2); // false
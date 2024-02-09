/*JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects encapsulate an integral number that represents 
milliseconds since the midnight at the beginning of January 1, 1970,
 UTC (the epoch). */

 // Dates

 let myDate = new Date()  // gives the date at that instance
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toLocaleString());
//  console.log(typeof myDate);

//  let mycreatedDate = new Date(2023,0,23)
//  console.log(mycreatedDate);

//let mycreatedDate = new Date("2023-01-14")
let mycreatedDate = new Date("01-14-2023")
// console.log(mycreatedDate.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp); 
// console.log(mycreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth());
newDate.toLocaleString('default',{
    weekday:"long",
    
})
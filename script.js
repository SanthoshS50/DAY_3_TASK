// Question_1 : How to compare two JSON have the same properties without order?

/* a. let obj1 = { name: "Person 1", age:5 };
   b. let obj2 = { age:5, name: "Person 1"  }; */

   
//To compare two JSON objects that have the same properties but may not be in the same order, you can follow these steps:

/* 1. Convert both Objects to JSON.
   2. Compare both the JSON to check for equality */

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Convert the JSON objects to strings

let JSON1 = JSON.stringify(obj1);
let JSON2 = JSON.stringify(obj2);

if (JSON1 === JSON2) {
    console.log("The JSON objects are equal.");
} else {
    console.log("The JSON objects are not equal.");
}

//---------------------------------------------------------------------------------------//

// Question_2 : Use the rest countries' API URL -> https://restcountries.com/v3 1/all  and display all the country flags in the console

//Step 1 : Create a XHR Object
var Request = new XMLHttpRequest();

//Step 2 : Opening a Connection to the Server
Request.open("GET","https://restcountries.com/v3.1/all",true)

//Step 3 : Initiating a bridge to the Server / Sending a Request
Request.send();

//Step 4 : Server Response
Request.onload = function(){
    var data = Request.response;
    //console.log(data);
    var Result = JSON.parse(data);
    //console.log(Result);
    for (i=0;i<Result.length;i++){
        console.log(Result[i].flag)
    }
}

//---------------------------------------------------------------------------------------//

//Question_3 : Use the same rest countries and print all countries names, regions, sub-region and populations

//Step 1 : Create a XHR Object
var Request1 = new XMLHttpRequest();

//Step 2 : Opening a Connection to the Server
Request1.open("GET","https://restcountries.com/v3.1/all",true)

//Step 3 : Initiating a bridge to the Server / Sending a Request
Request1.send();

//Step 4 : Server Response
Request1.onload = function(){
    var data1 = Request1.response;
    //console.log(data);
    var Result1 = JSON.parse(data1);
    //console.log(Result1);
    for (i=0;i<Result1.length;i++){
        console.log(Result1[i].name)
        console.log(Result1[i].region)
        console.log(Result1[i].subregion)
        console.log(Result1[i].population)
    }
}

//---------------------------------------------------------------------------------------//
'use strict';
console.log('up and running');

//fetch api
//argument passes in maybe local resorce like a local json, or a url-type
//will return a promise, use .then() method for a resolve and .catch() for reject
//the promise is only rejected if we get network error/like we can't reach api or we're offline
//if i misspell the url at all, it'll still say resolved and print the response, but the response is 404 not found, if we wanna make it so that it doesn't do that, we can put an if else statement in the .then
//like below, we aren't able to see the actual data we're looking for! The data is in the JSON, so we can use that JSON method on the response object, because response is an object, to get the actual data we're looking for
//so instead of the code below, we'll do the code below that
// fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
//     console.log('resolved', response);
// }).catch((err)=>{
//     console.log('rejected', err);
// });

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    console.log('resolved', response);
    //response.json returns a promise
    //promises usually take a second to do and can either be rejected or resolved
    //since we're using the return keyword, the overall value of this fetch method is gonna be this response.json() data, because of this, we can chain a .then()
    return response.json();
    //we can take the data we get back from the json method so the above gives back a promise that, when resolved, gives us the data we went out to fetch
}).then(data =>{
    console.log(data);
}).catch((err)=>{
    console.log('rejected', err);
});

//NOTE: REMEMBER THESE 3 STEPS
//1. FETCH THE DATA
//2. TAKE RESPONSE AND RETURN RESPONSE.JSON WHICH RETURNS A PROMISE
//3. CHAIN ON A .THEN, TAKING THE DATA RETURNED FROM RESPONSE.JSON AND DOING SOMETHING WITH IT, WE CAN ALSO CATCH AN ERROR AT THE END!
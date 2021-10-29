## What is Promise?
    Promises are alternatives to callbacks. They provide a way to write async code and handle more errors effectively.
    According to the definition,
        A promise is an abstraction for asynchronous programming. It’s an object that proxies for the return value or the exception thrown by a function that has to do some asynchronous processing.
            - Kris Kowal on JSJ

    Promises offer us with a cleaner and more efficient way of handling async code.
    Instead of offering a callback, a promise possesses its own methods that you call to tell the promise. But what will happen when it fails or succeed.
    Promise offers the following methods:
        then(…) - when a successful result is available
        catch(…) - when something goes wrong.

## States in Promise
    A promise can exist in one of three different states:
        Pending - The initial state of a promise.
        Fulfilled - The state of a promise signifying a successful operation.
        Rejected - The state of a promise signifying a failed operation.
## Facts
    A Promise is settled, in other words, the computation it denotes has ended if it is either rejected or fulfilled.
    A Promise can be settled only once and then it remains settled. Subsequent attempts to settle has no effect.

## How to Create Promise
    The creation of a Promise object is done via the Promise constructor by calling new Promise(). This takes a function as an argument and it gets passed to two callbacks:
        one for notifying when the operation is successful (resolve)
        one for notifying when the operation has failed (reject).
        Syntax:
            `var myPromise = new Promise(function(resolve, reject){   
               ....  
            });`
    
## Chaining Promises
    getAsyncData().then returns a new promise (say Q). It means that you can keep the Promise-based control flow going by invoking then() on Q:
        Q is resolved with what is returned by either resolve or reject.
        Q is rejected if either resolve or reject throw an exception.
        Eg:
            // Callback approach
            async1(function(){
                async2(function(){
                    async3(function(){
                        ....
                    });
                });
            });
            
            // Promise approach
            var task1 = async1();
            var task2 = task1.then(async2);
            var task3 = task2.then(async3);
            
            task3.catch(function(){
              /*Solve your thrown errors 
               from task1, task2, task3 here*/
            })
            
            // Promise approach with chaining
            async1(function(){..})
                .then(async2)
                .then(async3)
                .catch(function(){
                  // Solve your thrown errors here
                })
                   

## Bluebird : Introduction
    Bluebird is a feature rich Promise library for JavaScript.
    The feature of this Bluebird is that it allows you to promisify other modules so that we can use them asynchronously.
    Promisify is a concept that ensures that every callback function used must return some kind of value.
    To install the Bluebird module and use within the node the following command is used
        $npm install bluebird

## Async/await
    Async/await is one of the latest features making into Nodejs like promises. Async/await makes the code look synchronous.
    Async function declarations return an AsyncFunction object.
    These are built on Promises.
    These are similar to Generators these function's execution can be stopped at any time.
    They return a Promise whereas generators generate { value: any, done: Boolean } object.

    ## Difference with Promise
        Instead of using Promise.then() to resolve your promise to a value, prefixing await to promise makes your code to pause until the value is available. Then proceeds execution as the value were synchronous. This should be enclosed inside an async function.

    ## Why Async/Await ?
        The reasons for growing popularity of async/await include :
            The code written is concise and clean than that of using promises and callbacks.
            There are better error handling capabilities.
            The intermediate values produced by promises which are needed for nesting can be avoided making the code simple.
            One major concern of promises error stakes can be easily pointed to the function containing them using async/await.
            The killer advantage of async/await is its easy debugging capabilities.

## Common Async/Await Design Patterns
    Retrying Failed Requests
    Processing a MongoDB Cursor
    Multiple Requests in Parallel

## Retrying Failed Requests
    
## ECMAScript
ECMAScript is a language specification standardized by European Computer Manufacturers Association(ECMA).

## ECMAScript Defines
    Language Syntax – parsing rules, keywords, statements, declarations, operators, etc.
    Types – boolean, number, string, object, etc.
    Prototypes and Inheritance
    Standard Library of built-in objects and functions

## Block Scope Variables
    Block is a group of zero or more statements delimited by a pair of curly brackets {}.
    Block scope variables are the ones that exist only within the innermost block that surrounds them.
    In JavaScript, var is used to create variables. ES6, introduces 2 other keywords for declaring Block scope variables.
    1.let
    2.const

    ## Let vs Var
        let doesn't allow properties to be added to the global (window) object.
        let provides Block scope rather than function /global scope.
        let doesn't allow re-declaring a variable in global situation

    ## const
        const keyword is also used to declare Block Scope variables in ES6. These variables can not be changed once declared unlike let or var.

        Const make objects immutable, but it's value can still be modified. To prevent the modification and make object immutable, use the freeze() function.
            eg:const x = { name: "Abc", age: 20 };
                x.age = 25;
                console.log(x);
                //{ name: 'Abc', age: 25 }
                const x = Object.freeze({ name: "Abc", age: 20 });
                x.age = 25;
                console.log(x);
                //{ name: 'Abc', age: 20 }
    
## Parameters and Arguments
    Parameters (or formal parameters) are given in the function declaration, whereas Arguments (or actual parameters) are passed to the function.

    ## Default Parameters
    Default parameters are the parameters with an initialised value.
    Invoking a function without passing any arguments, would assume default values and process the request.
        Eg: Example in JavaScript
                function foo(a, b) {
                    console.log(a, b);
                }        
                foo();           // undefined undefined
                foo(5, 10)  // 5 10

            Example in ES6:
                function foo(a = 10, b = 20) {
                    console.log(a, b);
                }
                foo();            // 10 20
                foo(5, 10);  // 5 10
    ## Rest Parameter
        Rest allows indefinite number of parameters in one single array. Notation ...<paramname> is used to define Rest Parameter.
        Example in JavaScript
            function sum() {
            var args = Array.prototype.slice.call(arguments);
            // converts args to array
            var result = 0;
            args.forEach(function (args) {
            result += args;
            } );
            return result;
            }

        Example in ES6
            //args is rest parameter
             function sum(...args) {
                var result = 0;
                args.forEach(function(args) { result += args; } )
                return result;
            }

        Output:
            let [x,y,z] = [1, 2, 3];
            let add = sum(x, y, z);
            console.log(add);  // output: 6

    ## Spread Operator
        Spread Operator ( ...) is used to spread an array elements into parameters.

        Usage in code: ...array_variable_name
        Example in Javascript
            function sum(x, y, z) {
             return x+y+z;
            }
            let args = [1, 2, 3];
            let add = sum.apply(null, args); 
            console.log(add);
        Example in ES6
            function sum(x, y, z) {
                return x+y+z;
            }
            let args = [1, 2, 3];
            let add = sum(...args);
            console.log(add);  

        ## Using Spread Operator
            Spread Operator can be used for
                Concatenation of arrays
                    var parts = ["shoulder", "knees"];
                    var bodyParts = ["head", ...parts, "and", "toes"]; 
                    console.log(bodyParts)
                    Output : ["head","shoulder","knees","and","toes"]
                Math Functions
                    let numbers = [9, 4, 7, 1];
                    console.log(Math.max(...numbers));
                    Output : 9
                Destructuring arrays and objects.
                    let [x, y, ...z] = [1,2,3,4,5,6];           
                    //would mean x = 1, y = 2, z = [3,4,5,6]
                    let {x, y, ...z} = {x: 1, y: 2, z: 3, a: 4};    
                    //would mean x = 1, y = 2, z = { z: 3, a: 4 }   
    ## Destructuring Arrays
        Taking array elements directly into variables:
        var [one, two, three, four] = ["chennai", "mumbai", "goa", "cochin"];  
        //console.log(one);  => chennai
        Skipping values and taking second array element in variable two:
        var [,two,,]=["chennai", "mumbai", "goa", "cochin"];
        //console.log(two);  => mumbai
        Destructuring Nested Arrays:
        const [one, two, three] = [ 1,  [2,3],  [4,5] ];    
        //one=> 1 two=> [2,3], three=>[4,5]

    ## Destructuring Objects
        In Objects, variables can be skipped using commas.
        Example of taking object elements directly into variables:
            var {firstName:first,lastName:last,...details}={
                    firstName:  "Neha",
                    lastName:   "Singh",
                    age:     40,
                    city:   "chennai",
                    phone:   980000000
            }
        console.log (first , details);
        //output: Neha {age: 40, city: "chennai", phone: 980000000}
    
    ## Destructuring Nested Objects
        Declaration below would assign values a = 1, b = 2 and c = { four: 4, five: 5}
        const {one: a, two: b, three: c}  = { one: 1, two: 2, three: { four: 4, five: 5} } ;   
       
        For readability we can use one:one instead of one:a. Declaration below would assign:
        one = 1, two = 2 and three = { four: 4, five: 5}
        const {one: one, two: two, three: three}  = { one: 1, two: 2, three: { four: 4, five: 5} } ;
        
        Similarly, the declaration below will assign:
        one = 1, two= 2 and three= 3

        const {one, two, three} = { one: 1, two: 2, three: 3 };
        Default values can also be used in destructuring
        const {one, two, three, four=4} = { one: 1, two: 2, three: 3 };

## Arrow Functions
    Arrow functions in ES6 are the modified and abbreviated syntax of JavaScript functions.
    These functions make use of => token and hence known as Fat Arrow functions.
    Also, Arrow functions are less verbose than the traditional function expressions.
    Arrow function is lexical scope

    ## Function Definition
    JavaScript functions with multiple, single and no parameters
        var add = function(x, y) { return x+y; }
        var square = function(x) { return x*x;}
        function sub() => { return expression; } 
    ES6 Equivalent
        var add = (x, y) => { return x+y; }
        var square = (x) => { return x*x; }
            OR
        var square = x => { return x*x; } 
        //Parantheses are optional for single parameter 
        var sub  = () => expression 
        //return and {} are optional for function with single statement

    ## Function Expression
    Arrow functions can also be used as function expressions to return object literals. The function body should be wrapped in parantheses () to achieve this.

    Example in JavaScript
        var bio = function(name, age, country) {
            return {name: name, age: age, country: country};              
        };
    Example in ES6
        var bio = (name, age, country) => ({name: name, age: age, country: country}) 

## Template Literals
    Template string makes it easy to create strings that are longer and have lot of dynamic content (variables) with exact amount of spaces, line breaks and indentation.

    Template literals allows to:
        Create complex strings easily.
        Evaluate an expression in templates.
        Build complex html and xml templates (template functions).
    Instead of single quotes or double quotes, ES6 uses BACKTICK or OPENQUOTE ( " ` " ) character to create template literals.

    ## Creating complex strings
        Creating multiline strings no longer requires slash n (\n)
        Creating a multiline string in JS:
            let bio = "Wendy Harper \n Software Engineer - TCS \n 3 Years in Web development"
        Creating the same in ES6
            let bio = `Wendy Harper
                       Software Engineer - TCS
                       3 Years in Web development` 
    
    ## Evaluating Expressions
        The literal is delimited by backticks and the interpolated expressions inside the literal are delimited by ${variable }.
        Template literals always produce strings.
        Example of interpolation of Expressions:
            let fN = `Wendy`;
            let lN = `Harper`;
            console.log(`My name is ${fN} ${lN}`);  
        Alternatively we can also use more complex object.
            let person = {
                fN: `Wendy`,
                lN: `Harper`,
                name: function() {
                    return `My name is ${this.fN} ${this.lN}`;
                }
            };
            person.name();
        Output in both cases would be: My name is Wendy Harper
        
    ## Creating HTML Templates
        Without using any templating libraries such as moustache or handlebars, we can create templates using template literals, which can be reused.

        const wendy = {  "id": 1,
                         "firstName": "Wendy", 
                         "lastName":  "Harper",
                         "city":      "Tulsa"
                    }

        function bio(person) {
        return `<p>
            <h1>
                <span>${person.firstName}</span>
                <span>${person.lastName}</span>
             </h1>
                <address>${person.city}</address>
            </p>`
        }
        bio(wendy)
        Output:

         <p>
            <h1>
                <span>Wendy</span>
                <span>Harper</span>
            </h1>
            <address>Tulsa</address>
        </p>
    
## Class in ES6

    Class is just syntactical sugar over JavaScript prototype based inheritance.

    ES6 classes provide simple and clear syntax for creating objects and deal with inheritance.

    Class Definition Includes:
        Class Declaration:
            class ArithmeticOperations {
                constructor(x, y){
                     this.x = x;
                     this.y = y;
                }
                multiply() {
                     return this.x * this.y;
                }
            }                                               
        Class Expression:
            let ArithmeticOperations = class {
                 // same as class definition above
            }

    ## Types of Methods
        Constructor: is a special method for initializing and creating objects with a class. A class can have at the most one constructor.

        Static Methods: are method on constructor function itself. They can be created using static keyword. They cannot be invoked using instances.
            Example:
                class Food {
                  static describe () {
                    console.log("Food is a data type for storing macronutrient information.");
                  }
                }
                Food.describe();  
        Prototype Methods: are any methods which are not constructor or static method.

    ## Inheritance - SubClassing
        extends keyword can be used to make a class a subclass(child) of another class.
        Eg:
            class ArithmeticOperations {
                    constructor(x, y){
                         this.x = x;
                         this.y = y;
                    }
                    multiply() {
                         return this.x * this.y;
                    }
                } 
            class Addition extends ArithmeticOperations {
                sum() {
                    return this.x + this.y;
                }
            }
            let operation = new Addition(2, 3);
            operation.sum();      // 5
            operation.multiply()  //  6
    
    ## Inheritance - SuperClassing
        Parent class methods can be invoked using super keyword.
        Eg:
            class DoubleAdd extends Addition {
                doubleAdd() {
                    return 2 * super.sum();
                }
            }
            var x = new DoubleAdd(2, 3);
            x.doubleAdd();      //  10
    
## Maps and Sets
    ## Maps
        Maps are objects that associate a key to a value.
        Maps allows both primitives and objects as key and value. But object allows only string keys.
        refer:
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
            https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map

    ## Set
        It is a collection of unique values.
        Values can be primitive or objects.
    
    ## WeakSet and WeakMap
        WeakSet and WeakMap are similar to Set and Map respectively except that:
            Values are easily garbage collected in WeakSet or WeakMap.
            They cannot be iterated.
            Set references are strong pointers, while WeakSet references are weak pointers and vice versa for map.
            Accepts only objects as keys, no primitives.
            Few methods such as: .values(), .keys, .entries, and .size do not work.
    
## Symbols
    Symbols are new unique, immutable, primitive data type just like Number, String, and Boolean. They were originally meant to provide private properties.

        Symbol() function can be used to create symbols.
            const mySymbol = Symbol(); 
        Symbol can not be instantiated using new keyword.
             var sym = new Symbol(); // TypeError
        Each time the Symbol() function is called, a new unique symbol is returned.
            let symbol1 = Symbol();
            let symbol2 = Symbol();   
            console.log( symbol1 === symbol2 );  //false   

    ## Global Scope Symbols
        Symbol() function will not create a global symbol that is available in the whole codebase.

        To create global scope Symbols, use following methods.
            'Symbol.for()'
            'Symbol.keyFor()'
        These methods can be used to set and retrieve symbols from the global symbol registry.

        Symbol.for(key) method searches for existing symbols with the given key and returns it, if found. Otherwise, it creates a new symbol in the global symbol registry with this key and then returns the symbol.

            Symbol.for('bar') === Symbol.for('bar'); 
            // true, both are same

            Symbol('bar') === Symbol('bar');  
            // false, as Symbol() creates new Symbol each time it is called

        Symbol.keyFor(key) method is essentially opposite of Symbol.for(key).
            Instead of passing a key to get a symbol, pass a symbol to get a key.
                var sym1 = Symbol("desc");    
                // Local symbol      
                var sym2 = Symbol.for("desc");   
                // Global symbol  

                console.log(Symbol.keyFor(sym1));   
                // undefined  
                console.log(Symbol.keyFor(sym2));   
                // desc    
    ## Symbols as Object Keys
        Symbols can be used as object keys to have (semi) private properties in JavaScript.
            // Defining symbol 
            let email = Symbol(); 
            // Defining object "user"
            let user = {      
                name:"praveen", 
                age : 30, 
            //Symbol as key in array 
                [email] : "praveen@gmail.com" 
             };  

        Symbols are visible if accessed directly:
             console.log(user[email]);  
            // praveen@gmail.com

    ## Accessing Object Symbols
        Iterating Object.keys() and Object.getOwnPropertyNames(), using for loop or methods, would list just the name and age.
            Email will not be displayed as it is private.

            for (var i in user) { console.log(i);}
            Object.keys(user); 
            Object.getOwnPropertyNames(user); //Output:["name","age" ]

    ## Accessing Object Symbols
        Symbols in Objects can be accessed via Object.getOwnPropertySymbols or Reflect.ownKeys, thus making them public for all to see.

            Object.getOwnPropertySymbols() returns an array of symbol-based keys

             Object.getOwnPropertySymbols(user);  
             //Output:  [ Symbol() ]
            Reflect.ownKeys() will return an array of all keys & symbols.

             Reflect.ownKeys(user)    
             //Output: [ "name", "age", Symbol() ]
    
## Promise
    Promise is a design pattern that is useful in asynchronous programming.
    Promise in ES6 is an implementation of this pattern with functions (or methods) that return results asynchronously.
    A promise is in one of the following 3 states
        Pending
        Resolved
        Rejected
    
    ## Creating a Promise
        A Promise has two functions:
            resolve
            reject
        Creating a Promise
            var promise = new Promise( function (resolve, reject) { 
                if (condition) {
                    resolve(value);   // success
                } else {
                    reject(reason);   // failure
                }
            });
    ## Consuming Promise
        A Promise has then and catch methods, which are used when the promise is fullfilled or rejected
        Handling only resolve
            promise.then(
                function(value) { // resolve code }
            );
        Handling only reject
            promise.then(                                                            
                null, 
                function(reason) { // reject code }      
            );
                        (OR)
            promise.catch(
                function(reason) { // reject code }      
            );
        Handling both reject and resolve
            promise.then(
                function (value) { // resolve code  },
                function (reason) { // reject code }
            ); 

    ## Chaining
        Chaining Promises then() always returns a Promise, which enables chaining of method calls:
            asyncFunc()
            .then(function (value1) {
                return 123;
            })
            .then(function (value2) {
                console.log(value2);    // 123
            });
        Chaining Errors: There can be one or more then() method calls that don’t provide an error handler. Then the error is passed on until there is an error handler.
            asyncFunc1()
            .then(asyncFunc2)
            .then(asyncFunc3)
            .catch(function (reason) {
                 // Something went wrong in asyncFunc2 or asyncFunc3
            });
    ## Promise.all
        Promise.all can be used to trigger multiple asynchronous calls, at the same time and notify once all results come in.
        Syntax:
            Promise.all(promise1, promise2, ...)
        It returns array containing results of all promises when all are resolved. And a reject with the value, if any one of the promise gets rejected.
            Promise.all([firstAction(), secondAction()])
            .then(function() {
                finalAction();
            });
            finalAction() will be invoked only when firstAction() and secondAction() promises are resolved.

## modules
    Module is a file that contains all the code related to a specific functionality.
    These files export functions for other modules to consume.
    The functions or variables defined in a module are not visible outside unless they are explicitly exported.

    ## Exports
        Use the keyword export to export certain variables from a module,
        ES6 Modules gives a fine grain control to import / export just what is required for a particular module.
        Example module that exports functions: common_methods.js
            function sum(a, b) {
                return a+b;
            }
            function difference(a, b) {
                return a-b;
            }
            export { sum, difference }  // separate methods using comma
            export { sum as add, difference as minus } // aliasing

    ## Imports
        Use import keyword to consume the exported variables in a different module.

        Example of a module that imports functions: app.js
            Importing all methods:
            import { sum, difference } from 'common_methods'  
            console.log(sum(2, 3));         // 5
            console.log(difference(5, 2));  // 3
            Importing only certain methods:
            import { sum } from 'common_methods' 
            Importing modules as objects
            import 'common_methods' as utils;
            console.log(utils.sum(2, 3));         // 5
            console.log(utils.difference(5, 2));  // 3
    
    ## Default Exports
        Default exports are one of the main ways to export modules. However, a file can have only one default export.
            var utils = {
                sum:  function(a, b) {
                    return a+b;
                }
                difference:  function (a, b) {
                     return a-b;
                }
            }
            export default utils;
         ** app.js**
            import utils from 'common_methods';
            console.log(utils.sum(2, 3));         // 5
            console.log(utils.difference(5, 2));  // 3
            export default utils;                           
            // Re-exports the imported module
    
## Generators
    Generators are also functions. However, unlike functions, we can pause the execution and later resume the code execution using a generator function.
    Generators also allow us to turn asynchronous code into synchronous-looking code.
    Syntax:
        function* name(params) { }
        function *name(params) { }
        function*name(params) { }

    ## Creating Generator Function
        function *foo() {
                yield 'hi';
                yield 'dude';
        }
        let iterator = foo();
        iterator.next(); //Object {value: "hi", done: false}
        iterator.next(); //Object {value: "dude", done: false}
        iterator.next(); //Object {value: undefined, done: true}
        Calling a generator function does not execute its body immediately. An iterator object for the function is returned instead.
        Calling next() on iterator object will execute the code till it finds the first yield expression and pauses it.
        Calling next() again on iterator object will execute untill the next yield expression and pauses again.

    ## Yield Multiple Values
        yield can be used to recursively iterate over an iterable.
            function *foo() {
            yield* ['hi', 'hello'];
            }

            let iterator = foo()
            iterator.next(); // Object {value: "hi", done: false}
            iterator.next(); // Object {value: "hello", done: false}
            iterator.next(); // Object {value: undefined, done: true}
    
    ## Return in Generators
        function *foo() {
            yield 'hi';
            yield 'dude';
            return "bye";
        }

        let iterator = foo();
        iterator.next();  // Object {value: "hi", done: false}
        iterator.next();  // Object {value: "dude", done: false}
        iterator.next();  // Object {value: "bye", done: true}
        iterator.next();  // Object {value: undefined, done: true}

    ## Yielding Other Generators
        Not only primitives, we can also yield other generator functions. Example:
            function *foo() {
                yield* ['hi', 'hello'];        
            }
            function *bar() {
                yield* foo();
                yield "bye";        
            }
            let iterator = bar()
            iterator.next();  // Object {value: "hi", done: false}
            iterator.next();  // Object {value: "hello", done: false}
            iterator.next();  // Object {value: "bye", done: false}
            iterator.next();  // Object {value: undefined, done: true}
    
    ## Generator with arguments
        function* person() {
            let age = yield 'Age please';
            console.log(age);                                                    
            let location = yield 'Your age is ' + age + 'Your location please....';
            console.log(location);
            return location;
        }
        let iterator = person();
        iterator.next();    
        // Object {value: "Age please", done: false}
        iterator.next(10);  
        // Object {value: "Your age is 10 
        //              Your location please....", done: false}
        iterator.next('LA') 
        //   Object {value: "LA", done: true}

## Transpiling
    Transpiling is a specific term for taking source code written in one language and transforming into another language.
    As not all browsers support all ES6 features, ES6 code is converted into ES5 so it can be read by all browsers.

    ## Popular Transpiling Tools
        Few of the popular transpiling tools are: Babel.js, Webpack, Closure and Traceur.

        In this course, we will be focusing on Babel. Babel offers better readibility and understandability of the ES5 code it generates, after transpiling and makes the work of any JavaScript developer easy.

    ## Sample of how Transpiling Works
        Function to add any number of integer arguments Code in ES6:
            let additionResult=(...arr)=>{
                var sum=0;
                for(var i=0; i<arr.length; i++){
                sum+=arr[i];
                }
            return sum;
            }
        Code Transpiled by Babel into ES5:
            var additionResult = function additionResult() {
                for (var _len = arguments.length, 
                     arr = Array(_len), _key = 0; 
                     _key < _len; _key++) {
                        arr[_key] = arguments[_key];
                }
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
            return sum;
            };
        Output of both these functions would be same. additionResult(1,2,7,5,6); // output: 21

    ## Using Babel
        Add below script code in <head> section of HTML page.
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.js"></script>
        //source: https://cdnjs.com/libraries/babel-core

        Rename "text/javascript" to "text/babel"
        <script type="text/babel">
         var nameBuilder = (firstName="Michael", lastName="Jackson") => {
          console.log(` ${firstname} ${lastName} `);
         }
        </script>
        This approach enables in-browser transformation without a need to install anything.
        However, it converts whole code into ES5 during runtime of project, which might make the application slow.

    
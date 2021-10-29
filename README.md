## Express Framework
    Express.js is web-application framework that provides support for rendering
        Web application
        Web APIs
    Express.js along with Node.js provides both frontend and backend functionality.
    Express.js is used to render both -
        Static Content (Html/text)
        ***Dynamic Content (which changes at serverend)***.

## Express features
    Adds web server functionality to Node.js.
    Easier to build websites and applications.
    Robust routing mechanism so that your applications can pass along different types of requests easily.
    Middleware supportive (easy adoption of different Template engines).

## Installing Express
    $ npm install express --save

## usage
    After installing express, we can use it by following syntax:
        Eg:
            var express=require('express');
            var app=express();//this will create application instance
            app.get("/",function(request,response){

            })//app will have get method (and other methods) with 2 params .1 is path and 2 is function with request and response 
            app.listen(8000,function(){console.log("listening on port 8000")}); //listen will take 2 params. 1 is port number and next one is callback function.

## running the code
    $node app.js
        with this command, it'll run the server
    
## Important
    request and response of express were inherited from Node.
    reference:
        https:github.com/strongloop/express
    
    With response.send() the data will be converted to json which is same as response.json() for objects and arrays
    response.redirect('/redirect_path') //takes 2 args, 2 is to where the response should redirect and 1 is status code which is optional

## Request and Response
    Express uses a callback function whose parameters are request and response objects.

    app.***get***('/', function (req, res) { app.***post***('/', function (req, res) { app.***delete***('/', function (req, res {

    Request Object − The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.

    Response Object − The response object represents the HTTP response that an Express app sends when it gets an HTTP request.

## static routing with express
    If we have to do static routing with Node..we have to follow each static content a different route, with Express static routing was easy
    Eg: app.use(express.static('/public'));//we can create public folder and any static file we try to access we have to include same path 

## What is Package.json file ?
    All npm packages contain a file, usually in the project root, called package.json, which file holds various metadata relevant to the project.

    This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies.

    package.json can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data all of which can be vital to both npm and to the end users of the package.

## Why Template Engine ?
    The template engine helps to use static template files in your application.
    At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.

## Different Template Engines
    The Express application generator uses Jade as its default, but it also supports several others.
    Other template engines that work with Express are Pug, Mustache, Handlebars and EJS
    Note: Jade has been renamed to Pug. You can continue to use Jade in your app, and it will work fine. However if you want the latest updates to the template engine, you must replace Jade with Pug in your app.

## Jade working
    we install jade with $npm install jade --save
    Jade is a template engine, which is used in Node mostly
    in express we use following syntax:
        app.set('view engine','jade);//setting up view engine as Jade
        app.render('index',{'title': "myTitl"});//we changed sendFile to render . as we are using render, Node will look for view engine setting and use that template engine(Here in this case Jade). we need to create view directory and place index.jade file

    Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for Node.
    Indentation with white space is vital protocol used by jade to identify the syntaxed.
    Renamed to Pug now.

## Jade Editor
    You can use Jade editor to validate the code for this section. And this is quite simple.
    All you need to do is add plugin jade editor to your Chrome.

    In Jade, we can use extends and include to make things like modules.
    we can use #{} and = sign to access the variables
    we can use - to make variables
    we can use for if 

    ## Pros
        No closing tags and White space significant indentation
        Extensive layout inheritance and Macros support
        Built-in support for Markdown, CoffeeScript and others
        Available implementations in php, scala, ruby, python and java.
    ## Cons
        JavaScript in-lining can get cumbersome for more than one line
        Requires a small runtime to use precompiled templates on the client
        Not suitable for non-HTML output formats
        No streaming support and somewhat requires high learning curve

## Handlebars Template Engine
    Handlebars provides the power necessary to let you build semantic templates and is largely compatible with Mustache templates
    syntax:
        var hbs=require('express-handlebars');
        app.engine('hbs',hbs({extname: 'hbs',defaultLayout: 'layout',layoutsDir: __dirname+'/views/'}))
        //here first param is internal name and extname is extension(.hbs) and defaultLayout which will be applied to all layouts by default and layoutsDir is where we store our view
        app.set('view engine','hbs');

## EJS -Embedded JavaScript Template
    to get a variable we use <%=variable%>
    to use a normal flow of code use <% code %>
    syntax:
        <script src="ejs.production.js"></script>
        <script src="jQuery.js"></script>
        <script>
        $(document).ready(function(){
            var data={name:"chanu,age:"21"};
            var str=$("testTemplate").html();
            var rendered = new EJS({text:str}).render(data);
            console.log(rendered);
            $("#resultDiv").html(rendered);
        })
        </script>
        <script id="testTemplate" type="text/x-ejs-template">
            <h1>Hello <%= name></h1>
            You are  <%= age> years old!
        </script>

    ## installing
        $npm install ejs

## Get and Post Routing
    POST and GET are two common HTTP Request used for building REST API’s.
    GET request are meant to fetch data from specified resource and POST are meant to submit data to a specified resource.
    Express allows you to handle GET and POST request using the instance of express
    GET: Create instance of express and call get method. GET request can be cached and remains in browser history, hence not used for sensitive data (passwords, ATM pins etc).
    POST: Used to pass some data to the for further action.

## app object methods
    Routing HTTP requests - app.METHOD and app.param
    Configuring middleware - app.route
    Rendering HTML views - app.render
    Registering a template engine - app.engine

refer: https://senchalabs.org/connect

## Middleware Components
    express.bodyParser - extensible request body parser
    express.methodOverride - faux HTTP method support
    express.cookieParser - cookie parser
    express.session - session management support with bundled MemoryStore
    express.static - streaming static file server supporting Range and more
    express.directory - directory listing middleware"

## If route was not present
    we can make a redirect to a response if the route is not present
    Syntax:
        app.use((req,res)=>{
            res.send(404,'Page not Found');
        })

## If we would like to restrict
   Syntax: 
   app.get('/get',(req,res,next)=>{if(condition){
       let some=new Error('Not Authorized');
       next(err);}
   }
   app.use((err,req,res,next)=>{
       res.send(404,err.message);
       next();
   })

## setting up MySql db
    $npm install --save mysql

## Best practices 
    Callback hell caused by poor coding practices could be overcome easily by ensuring

    i) Keeping code shallow
        Make code easier to read through descriptive function names.
        When exceptions happen you will get stack traces that reference actual function names instead of "anonymous"
        Allows to move the functions and reference them by their names

    ii) Modularize
        Write small modules that each do one thing, and assemble them into other modules that do a bigger thing
        Easier for new developers to understand -- they won't get bogged down by having to read through all of the functions at one shot.
        Can get modules reused in other places without duplicating code and can easily be shared on github or npm.

    iii) Handle every single error
        Handle every single piece of error within the code.
        Don't nest functions. Give them names and place them at the top level of your program
        Code linters could be configured to help you remember to handle callback errors. The simplest one to use is called standard


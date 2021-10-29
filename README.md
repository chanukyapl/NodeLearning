## Node js
    Allows you to build scalable network application using JavaScript on server-side.
    underneath the covers of Node you’re going to find the v8 JavaScript runtime. this is the same run time that is used in your Chrome browser on your client side What node does is provides a wrapper around this engine providing additional functionality for building network applications. really fast.
## Why is it fast ??

    Well if you look under the covers of node and this runtime you would find its all written in C which obviously is very fast.

## So what can you build with node?
    You could build a webSocket server
    You can also do a file upload client.

## Important
    Node Js is not a web framework it’s not going to replace rails it’s not going to replace Django. It’s very low level network communication we’re talking about here. There are libraries that people have written that sit on top of node to be a web framework but notice its most basic level its not that.Node is also not for beginners because we are talking about network communication .Node is also not a multi thread application. When we write our applications with node, we write them as if we are dealing with a single threaded server. Before we get into some actual node code we need to make sure everybody knows the difference between blocking code and non-blocking code.

## Blocking code VS Non-Blocking code
    First we read from the file system ,we can actually print out the contents until we’ve read out all the contents from the file ,so it’s kind of blocking here
    Eg:
        var content=fs.readFileSync('/etc/hosts');
        console.log(contents);
    What would a non-blocking version of this code look like? Well we might read the file from the file system. When ever were complete with that ,print out the contents from the file.
    Eg:
        fs.readFile('/etc/hosts', function(err,contents){
            console.log(contents);
        })

## Hello world!
    var http=require('http');// taeking the module
    http.createServer(function(request,response){
        response.writeHead(200);//status code in header
        response.write("Hello World!");//response body
        response.end();//closing connection
    }).listen(8080);//listen for connection on this port
    ## Event loop
        here in this scenario, request event got registered and node continuously check for the event.
        Ans Known events are request, connection, close.

## Why JavaScript
    "JavaScript has certain characteristics that make it very different than other dynamic languages, namely that it has no concept of threads. Its model of concurrency is completely based around events." -Ryan Dahl

## Advantage of using node.js
    Provides an easy way to build scalable network programs
    Easy to install and run locally
    Generally fast
    Great concurrency
    Asynchronous everything
    Almost never blocks
    Unified programming language and data type

## REPL
    REPL stands for Read Eval Print Loop and it represents a computer environment like a Windows console or Unix/Linux shell where a command is entered and the system responds with an output in an interactive mode.

        Read − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.
        Eval − Takes and evaluates the data structure.
        Print − Prints the result.
        Loop − Loops the above command until the user presses ctrl-c twice
## REPL Commands
    Ctrl + c − terminate the current command.
    Ctrl + c twice − terminate the Node REPL.
    Ctrl + d − terminate the Node REPL.
    Up/Down Keys − see command history and modify previous commands.
    Tab Keys − list of current commands.
    .help − list of all commands.
    .break − exit from multiline expression.
    .clear − exit from multiline expression.
    .save filename − save the current Node REPL session to a file.
    .load filename − load file content in current Node REPL session.

## NPM
    Node Package Manager (NPM) provides two main functionalities:

        Online repositories for node.js packages/modules which are searchable on search.nodejs.org
        Command line utility to install Node.js packages, do version management and dependency management of Node.js packages.
    NPM comes bundled with Node.js installables after v0.6.3 version. There is a simple syntax to install any Node.js module:
        $ npm install <Module Name>
    We can use npm ls command to list down all the locally installed modules.

## Node.js as single thread
    For async processing, Node.js was done as an experiment. It is believed that better performance and scalability can be achieved by async processing on a single thread under typical web load than the typical thread based implementation.

## Node.js over Java
    Node.js is quickly gaining attention as it is a loop-based server for JavaScript. Node.js gives user the ability to write the JavaScript on the server, which has access to things like HTTP stack, file I/O, TCP and databases.

## Global Objects and Timers
    __filename -> gives whole path along with filename where file resides in system.
    __dirname -> gives whole path excluding filename where file resides in system.
    setTimeout(callback,time) ->global function
    setInterval(callback,time) ->global function

## Modules and Events

    import or require
    ## fs module
        Its an In-built module to access files
        Syntax:
            var fs=require('fs');
        Async file reading
            fs.readFile('file.txt',(error,data){
                if(error)console.log(error);
                else{
                    console.log('data'+data.toString());
                }
            })
        sync file reading-> we can not block i.e we can not use callbacks
            fs.readFileSync('file.txt')
            console.log('data'+data.toString());
## streams
    Types of streams.There are four types of streams:
        Readable - For read operation
        Writable - For write operation
        Duplex - For both read and write operation
        Transform - When the output is computed based on the input
        
## Piping in Node
    Piping is a mechanism to connect output of one stream to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream. There is no limit on piping operations.
    Syntax: .pipe()
    Eg: readableStream.pipe(writableStream);

## Chaining in Node
    Chaining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.


var events=require('events');
var emitter=new events.EventEmitter();

emitter.on('eventName',callbackfn);
emitter.emit('eventName');
emitter.on('eventwithargs',callbackfnsec);
emitter.emit('eventwithargs',{user:"Chanukya"});

function callbackfn(){
    console.log("THis is first event");
    setTimeout(()=>{console.log("Delay of 1 sec")},1000);
}
function callbackfnsec(user){
    console.log("THis is second event with args and delay in first event");
    console.log(`Args are ${user.user}`);
}
console.log("We can conclude that its async");
//complete event driven apps
//An event is nothing but it's any king of action that you do on your computer

//objs in Node.js can fire those events
// var fs = require("fs");

// fs.unlink('input.txt', function(err){
//     if(err) throw err
//     console.log('Input text file got deleted')
// })

const { EventEmitter } = require("events");
var events = require("events");
//create, fire, and listen
var eventEmmiter = new events.EventEmitter();

//Creating an event handler
var myFirstEventHandler = function () {
  console.log("Starting my first event handling");
};
// Assigning eventhandler to an event
eventEmmiter.on("MyFirstEventRunning", myFirstEventHandler());
//fire the MyFirstEventRunning event
// eventEmmiter.emit('MyFirstEventRunning')
eventEmmiter.emit("someEvent");
//listner 1

var listner1 = function listner1() {
  console.log("listner1 executed");
};
var listner2 = function listner2() {
  console.log("listner2 executed");
};
//bind
EventEmitter.on("connection", listner1);
//console.log("

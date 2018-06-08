/*
var server = require("./server");

server.start();
*/

/*
var server = require("./server");
var router = require("./router");

server.start(router.route); // DI
*/

var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);

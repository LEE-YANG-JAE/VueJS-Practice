/*
// Node.js에 기본 내장되어 있는 http 모듈을 로드한다
var http = require("http");

// http 모듈의 createServer 메소드를 호출하여 HTTP 서버 생성
var server = http.createServer();
server.listen(8888);
*/

/*
// Node.js에 기본 내장되어 있는 http 모듈을 로드한다
var http = require("http");

// http 모듈의 createServer 메소드를 호출하여 HTTP 서버 생성
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"}); // (1)
  response.write("Hello World");  // (2)
  response.end();                 // (3)
}).listen(8888);
*/

/*
var http = require("http");

// callback function / js_basics.js 참조
function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.");
*/

/*
var http = require("http"); // node.js의 내부모듈

function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
*/

/*
var http = require("http");
var url = require("url");

http.createServer(function(request, response){
  var pathname = url.parse(request.url).pathname;
  console.log("Path name is " + pathname);

  var query = url.parse(request.url, true).query;
  console.log("Request parameter is ", query);

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(
    "<h1>Path name is " + pathname + "</h1>" +
    "<h1>Request parameter is " + JSON.stringify(query) + "</h1>");
  response.end();
}).listen(8888);

console.log("Server has started.");
*/

/*
var http = require("http");
var url = require("url");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
*/

/*
var http = require("http");
var url = require("url");

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
*/

/*
var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    // handle은 pathname와 request handler의 관계를 담고 있는 객체
    route(handle, pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
*/

/*
var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    response.writeHead(200, {"Content-Type": "text/plain"});
    var content = route(handle, pathname)
    response.write(content);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
*/

/*
var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
*/

var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
      postDataChunk + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });

  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
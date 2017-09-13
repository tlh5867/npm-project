/*...*/

const $ = require("jquery");
const data = require("./data");
const math = require("./math");






const hello = () =>console.log("hello world from webpack!");

hello();

console.log(data.whichSideOfTheForce);
console.log(data.arnie);


$("body")
    .html("<h1>Hello from jQuery</h1>")
    .css("background-color","gray")
;

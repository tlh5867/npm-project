/*...*/

    const $ = require("jquery");
    import data from "./data";
    // const data = require("./data");
    const math = require("./math");
    const hey = require("./say_hello");
    const sayHi = require("/say_hello");



    const hello = () =>console.log("hello world from webpack!");


    hello();

    console.log(data.whichSideOfTheForce);
    console.log(data.arnie);
    console.log ()

    $("body")
        .html("<h1>Hello from jQuery</h1>")
        .css("background-color","gray")
    ;

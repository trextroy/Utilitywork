var Helloworld = (function () {
    function Helloworld(message) {
        this.message = message;
    }
    Helloworld.prototype.sayHi = function () {
        return ("Hello " + this.message);
    };
    return Helloworld;
}());
var hello = new Helloworld("world");
console.log(hello);
console.log(hello.sayHi());
//ctrl+shift+p ==  build with typescript
//enter build param value..
//how to check the output in console ?
//set syntax for the project 


class Helloworld {
	message: string;
	constructor(message:string) {
		this.message = message;	
	}
	sayHi(){
		return ("Hello " + this.message);
	}
}
let hello = new Helloworld("world");
console.log(hello);
console.log(hello.sayHi());

//ctrl+shift+p ==  build with typescript
//enter build param value..
//how to check the output in console ?
//set syntax for the project 


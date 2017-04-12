/*

without generics 

function cars(name:string):string { }
or 
function cars(name:any):any { }

*/

//with generics
//Key is to mention T in <> to define generics 
function cars<T>(arg:T):T {

}




function identity<T>(arg: T): T {
    return arg;
}


//here we have myIdentity variable. Its type is function. This function accepts 
//arguments of type U which return identity object of type U. 
let myIdentity: <U>(arg: U) => U = identity;



	


















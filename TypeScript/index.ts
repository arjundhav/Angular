var a: number = 20
console.log(a);

var b: string = "hello world !!";
console.log(b);

var c: any[] = [1, 2, 'Arjun', true]
console.log(c);

function abc(): void {
    console.log('ABC')
}
abc()

function xyz(a: number, b: number):number {
    return a * b
}
var v = xyz(2, 3)
console.log(v)

function any(a: number, b: string): any {
    return a + b
}
var n = any(2, ' Arjun')
console.log(n)

var h: string|undefined|number=''; //generic datatype

//var i!:string="";    undefined var
 
//Type Assertion : mechanism which tells the compiler about the type of a variabl
var j:any=20;
var k=j as string;
console.log(k);
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

// Rest Operator
function addNum(...num){
    var sum=0;
    for(var i=0;i<num.length;i++){
        sum+=num[i];
    }
    console.log("Sum is "+sum);
}
addNum(1,2,3);

// Spread Operator
var arr1=[1,2,3];
var arr2=[4,5,6];
var arr3=[...arr1,...arr2];
console.log(arr3);

// Access Modifiers
class Employee{
    public empCode:number;
    private empName:string;
    protected empSalary:number;
    constructor(code:number,name:string,salary:number){
        this.empCode=code;
        this.empName=name;
        this.empSalary=salary;
    }
    getSalary():void{
        document.write(`${this.empName}`+ ' with id '+ `${this.empCode}`+' is a Employee with salary '+ `${this.empSalary}`);
    }

    let emp=new Employee(1,"Arjun",10000);
    console.log(emp.empCode);
    console.log(emp.empName);
    console.log(emp.empSalary);
    console.log(emp.getSalary());
}
console.log(emp.empName);

// protected
class p1{
    protected id:number;
}
class p2{
    constructor(protected id:number,protected name:string,protected age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    getDetails():void{
        document.write(`<br> ${this.name}`+' with ID ' + `${this.id}`' is '+ `${this.age}`+' years old');
    }

    let p = new p2(2,"AJ",24)
    console.log(p.id);
    console.log(p.getDetails());
}


import {Demo} from './demo'

class ABC{
    constructor(private demo:Demo){
        let d=new Demo();
        console.log(d.details);
    }

}
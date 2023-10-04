//2)Circle - Class
//Convert the UML diagram to Typescript class. - use number for double
let pi = 3.1412
class circle {
    constructor(redius,color){
        this.redius = redius;
        this.color = color;
    }
    getredius(){
        return this.redius;
    }
    getcolor(){
        return this.color;
    }
    getarea(){
        return pi*this.redius*this.redius;
    }
    getcircumference(){
        return  2*pi*this.redius;
    }
}
let c = new circle(1.0,"red");
console.log(c.getredius());
console.log(c.getcolor());
console.log(c.getarea());
console.log(c.getcircumference());
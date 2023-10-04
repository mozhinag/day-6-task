//write a class to calculate the uber price.
let price = 35;
class uberprice {
    constructor(kilometer){
        this.kilometer = kilometer;
    }
    getcal(){
        return price*this.kilometer;
    }
}
let u = new uberprice("60");
console.log(u.getcal()+"Rs");
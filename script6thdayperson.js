//Write a “person” class to hold all the details.
class person {
    constructor (name,age,qualification,language,address){
        this.name = name;
        this.age = age;
        this.qualification = qualification;
        this.language = language;
        this.address = address;
    }
}
var p = new person("Rani","21","BA","tamil","Ooty");
console.log(p.name,p.age,p.qualification,p.language,p.address);

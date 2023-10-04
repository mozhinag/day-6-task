
//1)https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class movie {
    constructor (title,studio,rating) {
        this. title = title;
        this.studio = studio;
        this.rating = rating;
    }

getpg(){
    return this.rating;
}
}
let a=new movie("Casino Royale","Eon Productions","PG13");
console.log(a.getpg());



 
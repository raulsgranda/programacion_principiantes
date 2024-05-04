export let person = {
    name: 'Raul',
    age: 30,
    isActive: true,
    hobbies:['basketball', 'soccer'],
    toString() {
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objectString);
    }

}
//console.log(person.name.toUpperCase);
//person.toString();

let car={
    doors: 5,
    color:'red',
    drive:'left'
}

let smartTv={
    country:'Japan',
    FullHd: true,
    size: 55
    }

let youtubeVideo={
    language: 'spanish',
    duration:60,
    quality: 1080
}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);
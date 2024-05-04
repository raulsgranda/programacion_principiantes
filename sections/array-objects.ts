
interface Person{

    name: string;
    age: number;
    isActive: boolean;

}

export let fernando: Person={
    name: 'Fernando',
    age: 36,
    isActive: false
}

let honorio:Person={
    name: 'Honorio',
    age: 95,
    isActive: true
}

let juan: Person={
    name: 'Juan',
    age: 20,
    isActive: false
}

let people: Person[] = [fernando, honorio, juan];



for (let i= 0; i < people.length; i++){
    let person = people[i];
    console.log(person.name + ' ' + person.age);
}



export let employees: string[] = ['Fernando','Melisa','Eduardo'];
// let flowers:string []= ['Rosa','Girasol','Lirio','Rosa azul'];
export let salaries:number []= [1500, 2400, 3200]
//if (people[3] ) {
    
 //   console.log(people[3]);
//}

// for (let i= 0; i < flowers.length; i++) {
    // console.log(flowers[i]);
// }

for (let i= 0;  i < employees.length; i++) {
    let employee=employees[i];
    let salary=salaries[i];
    console.log(employee + ' tiene un salario de '+ salary);
}

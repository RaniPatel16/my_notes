// "use strict";
// const a = 1234;
// console.log(a);


type User={id:number,
    name:string,
    address?:strinng

}
const user1:user={
    id:12345,
    name:"rani",
}


function getValue(user: any, key: string) {
    return user[key];
}

const user = {
    name: "Rani",
    age: 20,
    city: "Idar"
};

console.log(getValue(user, "name")); // Rani
console.log(getValue(user, "age"));  // 20
console.log(getValue(user, "city")); // Idar
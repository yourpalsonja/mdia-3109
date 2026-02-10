type Age = number | string;
type ArrayWithABunchOfStuff = (string | number)[] | number[][];

let someArray: ArrayWithABunchOfStuff = [
    [1, 2, 3],
    [4, 5, 6],
];

interface AnotherPerson {
    name: string;
    age?: Age;
}

type Person = {
    name: string;
    age?: Age;
};

function details(person: Person) {
    console.log(person.name + " is " + person.age + "!");
}

let billieDog = {
    name: "Billie",
    age: 16,
};

let teenieDog = {
    name: "Teenie",
    age: "six",
};

details(teenieDog);
details(billieDog);
details({ name: "sonja", age: "fourty" });

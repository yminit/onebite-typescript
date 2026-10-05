// keyof 연산자
interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "이정환",
    age: 28,
};

getPropertyKey(person, "name");

// typeof 연산자
type Person2 = typeof person;

function getPropertyKey2(person: Person2, key: keyof Person2) {
    return person[key];
}

const person2 = {
    name: "이정환",
    age: 28,
};

getPropertyKey2(person2, "name");
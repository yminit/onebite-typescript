// 타입단언
type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "김철수";
person.age = 40;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "발발이",
    color: "brown",
    breed: "진도",
} as Dog;

// 타입 단언의 규칙
let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; // number, string 서로 겹치는 값이 없음. 서로 슈퍼타입, 서브타입이 아님.
// let num4 = 10 as unknown as string; // 다중 단언

// const 단언
let num5 = 10 as const;
let cat = {
    name: "야옹",
    color: "yellow",
} as const;

// Non Null 단언
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "김철수",
};

// const len: number = post.author?.length;
const len: number = post.author!.length;

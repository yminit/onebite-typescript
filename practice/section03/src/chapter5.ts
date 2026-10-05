// 타입 추론
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "김철수",
    profile: {
        nickname: "hahahoho",
    },
    urls: ["https://naver.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// function func(param) {

// }

function func(message = "hello") {
    return "hello";
}

let d; // 암묵적 any 타입
d = 1; // number 타입으로 진화!
d.toFixed();
// d.toUpperCase();

d = "hello";
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = "hello";

let arr = [1, "string"];

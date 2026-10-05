// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    loaction: string;
};

let user: User = {
    id: 1,
    name: "김철수",
    nickname: "철수야놀자",
    birth: "2026.01.01",
    bio: "안녕",
    loaction: "경기도",
};

let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "철수야놀자",
    birth: "2026.01.01",
    bio: "안녕",
    loaction: "경기도",
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};

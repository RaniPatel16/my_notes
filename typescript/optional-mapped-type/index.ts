type User = {
    id: number;
    name: string;
    password: string;
    email: string;
    address: Address;
};


type Address = {
    line1: string;
    line2: string;
    pincode: number;
    state: string;
    country: string;
};



type Optional<T> = {
    [K in keyof T]?: T[K];
};


type OptionalUser = Optional<User>;


type OptionalAddress = Optional<Address>;


const user: OptionalUser = {
    name: "Rani",
    email: "rani@gmail.com"
};


const address: OptionalAddress = {
    state: "Gujarat",
    country: "India"
};


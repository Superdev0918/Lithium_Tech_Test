export interface ILogin {
    email: string;
    password: string;
}

export interface IRegister {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}

export interface IUser {
    id: string;
    email: string;
}


export interface IDecoded {
    id: string;
    email: string;
    iat: number;
    exp: number;
}

export interface ICollection {
    id: string,
    name: string
}

export interface ICollections {
    collections: ICollection[]
}

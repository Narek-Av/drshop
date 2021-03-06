export interface IUser {
  name: string;
  email: string;
  password: string;
  username: string;
  id?: string;
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
}

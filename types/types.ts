export interface IUsers {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
        street: String;
        suit: String;
        city: String;
        zipCode: String;
    }
  
}
export interface ITodos {
    id: string;
    userId: string;
    title: string;
    completed:boolean;
    
}
export interface IPosts {
    id: string;
    userId: string;
    title: string;
    body:boolean;
    
}
export interface IComments {
    id: string;
    postId: string;
    name: string;
    Email: string;
    body:boolean;
    
}
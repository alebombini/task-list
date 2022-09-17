export interface Task {
    id?: number; //cuando creamos una task tiene que ir con una ID que podria no venir
    text: string;
    day: string;
    reminder: boolean;
}
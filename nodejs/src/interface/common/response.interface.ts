// export interface Ires<T> {
//     message: string,
//     metadata: T | T[]
// }

export interface Ires<T = any> {
    message: string;
    metadata?: T;
    statusCode?: number;
    reasonStatusCode?: string,
    totalItem?: number
    option?: any;
}

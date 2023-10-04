export interface RequestOptions {
    endpoint: string,
    method: string,
    options?: object,
    body?: any
    isFile?: boolean
}
export interface Post { 
    userId: number,
    id: number,
    title: string,
    body: string
}
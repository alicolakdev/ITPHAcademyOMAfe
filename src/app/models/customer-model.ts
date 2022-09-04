export interface CustomerDTO {
    id: number;
    name: string;
    surname: string;
    username: string;
    roleid: number ;
    projects:Array<string>;
}
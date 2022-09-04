import { TaskDTO } from "./task-model";

export interface ProjectDetailDTO {
    id: number;
    name: string;
    customerId: number;
    customer: object;
    tasks: Array<TaskDTO>;
}
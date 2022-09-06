import { CommentDTO } from "./comment-model";

export interface TaskDTO {
    id: number;
    description: string;
    startDate: string ;
    endDate: string;
    isDone: boolean;
    projectId: number;
    project:string;
    user:string;
    userId:number;
    comments: Array<CommentDTO>;
}
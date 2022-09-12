import { CommentDTO } from "./comment-model";
import { TaskDTO } from "./task-model";
import { UserDTO } from "./user-model";

interface ProjectDetailDTO {
    id: number;
    name: string;
    customerId: number;    
    tasks: Array<TaskDTO>;
    comments: Array<CommentDTO>
}

interface ProjectDetailDTO{
    customer: UserDTO;
}

export {ProjectDetailDTO}
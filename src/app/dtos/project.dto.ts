import { Todo } from "./todo.dto";

export interface Project {
    id?: number;
    name: string;
    createdAt?: Date;
    Todos?: Todo[];
}

export interface ProjectListResponse {
    message: string;
    data: Project[];
}

export interface ModificationSuccess {
    message: string;
    data: any;
}

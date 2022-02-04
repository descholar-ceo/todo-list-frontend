export interface Todo {
    id: number,
    projectId: number,
    priority: number,
    description: string,
    title: string,
    completed: boolean,
    createdAt: Date,
    dueDate: Date,
}

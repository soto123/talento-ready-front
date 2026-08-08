export enum TaskStatus {
    COMPLETED = "COMPLETED",
    INPROGRESS = "INPROGRESS",
    CANCEL = "CANCEL",
}

export interface Task {
    id: string;
    title: string;
    description: string;
    date: Date;
    status: TaskStatus;
}
import type { Task } from "../models/task"; '../models/task';
export function generateTaskCardHtml( task: Task): string{
    return `
        <div>
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <span>Status: ${task.status}</span>
        </div>
    `
};
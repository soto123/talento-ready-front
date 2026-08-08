import type { Task } from "../../models/task"; '../models/task';
import { TaskStatus }  from "../../models/task";
import './TaskCard.css';

function getStatusConfig(status: TaskStatus){
    switch (status){
        case TaskStatus.COMPLETED:
            return{
                label: "Completado",
                color: "Green"
            };
        default:
            return{
                label: "Pendiente",
                color: "yellow"
            };
    }
}

export function generateTaskCardHtml( task: Task): string{
    const statusConfig = getStatusConfig(task.status);
    return `
        <div class="card-task">
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <span style="color:${statusConfig.color}">Status: ${statusConfig.label}</span>
        </div>
    `
};
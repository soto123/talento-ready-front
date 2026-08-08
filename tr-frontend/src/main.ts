import { type Task,TaskStatus } from "./models/task";

const appContainer = document.getElementById('app');

const taskList: Task[] = [
  {
    id: '1',
    title: "Tarea 1",
    description: "Crear un modelo",
    date: new Date(),
    status: TaskStatus.COMPLETED
  },
  {
    id: '2',
    title: "Tarea 2",
    description: "Crear un Listado de tareas logico",
    date: new Date(),
    status: TaskStatus.COMPLETED
  },
  {
    id: '3',
    title: "Tarea 3",
    description: "Mostrar el modelo con un componente",
    date: new Date(),
    status: TaskStatus.INPROGRESS
  },
];

const taskContainer = document.createElement("ul");
taskContainer.innerHTML = taskList.reduce((acc, task)=>{
  return (
    acc + `<li>${task.title} - ${task.status}</li>`
  );
},'');

if(appContainer){
  appContainer.innerHTML =`
    <h1>Talento Ready</h1>
  `;
  appContainer.appendChild(taskContainer);
}
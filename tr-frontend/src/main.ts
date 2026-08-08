import { generateTaskCardHtml } from "./components/TaskCard";
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

if(appContainer){
  const taskGridHtml = taskList.map(
    (task) => generateTaskCardHtml(task),
  ).join('');
  appContainer.innerHTML =`
    <h1>Talento Ready</h1>
    <main id="contenedor-tareas">
      ${taskGridHtml}
    </main>
  `;
}
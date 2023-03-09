import { Task } from '../models/task.model';

export const getTasks = async (): Promise<Task[]> => [
  { id: 1, title: 'Tarea 1', owner: 'Pepe', isComplete: false },
  { id: 2, title: 'Tarea 2', owner: 'Ernestina', isComplete: false },
];

import React, { useEffect, useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TasklistComponent = () => {
 
  const defaultTask1 = new Task('Ejemplo 1', 'Descripción por defecto 1',false, LEVELS.NORMAL);
  const defaultTask2 = new Task('Ejemplo 2', 'Descripción por defecto 2',false, LEVELS.URGENT);
  const defaultTask3 = new Task('Ejemplo 3', 'Descripción por defecto 3',false, LEVELS.BLOCKING);
  
  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask1,defaultTask2,defaultTask3]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Modificación de tarea");
    setLoading(false);
    return () => {
      console.log("Eliminación de tarea");
    }
  }, [tasks]);
  
  const completeTask = (task) => {
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    // Actualiza el estado del componente con la nueva lista de tareas, y cuando lo hace, actualiza la iteracion del map
    setTasks(tempTasks);
  }

  const deleteTask = (task) => {
    console.log('Elimina esta tarea: ', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index,1);
    setTasks(tempTasks);
  }

  const addTask = (task) => {

    console.log('Añade esta tarea: ', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }



  return (
    <div>
      <div className='col-12'>
        <div className='card'>
        { /* Card header */}
          <div className='card-header p-3'>
            <h5>Tus Tareas:</h5>
          </div>
          { /* Card body */}
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
            <table className='table table-striped'>
              <thead>  
                <tr>
                  <th scope='col'>Titulo</th>
                  <th scope='col'>Descripción</th>
                  <th scope='col'>Prioridad</th>
                  <th scope='col'>Acciones</th>
                </tr>
              </thead>
              <tbody>
                { tasks.map((task, index) => {
                  return (
                    <TaskComponent key={index} task={task} complete={completeTask} remove={deleteTask}/>
                  )
                })}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <TaskForm add={addTask}/>
    </div>
  );
};

export default TasklistComponent;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';

const TaskComponent = ({task, complete, remove}) => {

  useEffect(() => {
    console.log("Tarea creada");
    return () => {
      console.log(`Tarea ${task.name} será eliminada`)
    };
  }, [task]);

  // Retorna una medalla dependiendo del nivel de la tarea
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return(
        <h6 className='mb-0'>
          <span className='badge bg-primary'>
            {task.level}
          </span>
        </h6>);
    
      case LEVELS.URGENT:
        return(
          <h6 className='mb-0'>
            <span className='badge bg-warning'>
              {task.level}
            </span>
          </h6>);

      case LEVELS.BLOCKING:
        return(
          <h6 className='mb-0'>
            <span className='badge bg-danger'>
              {task.level}
            </span>
          </h6>);

      default:
        break;
    }
  }
      // Retorna iconos dependiendo de la completitud de la tarea
  function taskCompletedIcon() {
    if(task.completed){
      return(<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>);
    }
      else{
        return(<i onClick={() => complete(task)}  className='bi-toggle-off task-action' style={{color: 'gray'}}></i>);
      }
    }

  
  return (
    <tr className='fw-normal'>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        {/* Ejecuta la funcion que retorna un elemento medalla */}
        {taskLevelBadge()}

      </td>
      <td className='align-middle'>
        {/* Ejecuta la funcion que retorna un icono distinto dependiendo si fue completada o no la tarea */}
        {taskCompletedIcon()}
        <i onClick={() => remove(task)} className='bi-trash task-action' style={{color: 'tomato', fontSize: '20px'}}></i>
      </td>    
    </tr>
  );
};


TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};


export default TaskComponent;

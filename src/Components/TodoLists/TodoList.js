import React, { useState } from 'react'
import List from './List';
const TodoList = () => {
    const [task,setTask] = useState("");
    const [todos,setTodos] = useState([]);

    const onChangeHandler = e =>{
        setTask(e.target.value)
    }
    const onSubmitHandler= e =>{
        e.preventDefault();
        const newTodos = [...todos,task];
        setTodos(newTodos);
        setTask("");
    }
    const deleteHandler = (indexValue) => {
      const newTodos = todos.filter((todo,index) => index!== indexValue);
      setTodos(newTodos);
    }
  return (
    <center>
        <div className="card">
        <div className="card-body">
        <h3 className='card-title'>Todo Management Application</h3>
        <form onSubmit={onSubmitHandler}>
        <input type="text" name="task" value={task} onChange={onChangeHandler}/> &nbsp;&nbsp;
        <input type='Submit' value="Add" name='Add'/><br/>
       
      </form>
      <List todoList={todos} deleteHandler={deleteHandler}/>
      </div>
      </div>
    </center>
  )
}

export default TodoList

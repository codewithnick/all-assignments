import React from 'react';
import Todo from './Todo';  
import axios from 'axios';
import { Container, Icon, Typography,Box } from '@mui/material';
function TodoContainer() {
  const [todos, setTodos] = React.useState([]);
  React.useEffect(() => {
    axios({
        method: 'get',
        url:'http://localhost:3000/todos',
        headers: { 'Content-Type': 'application/json' },
        data:{}
    }).then((response)=>{
        if(response.status==200)
        {
          console.log(response)
          setTodos(response.data);
        }
        else
        {
            alert('Error');
            console.error(response);
        }
    })
  },[]);
  function removeTodo (id) {
    axios({
        method: 'delete',
        url:`http://localhost:3000/todos/${id}`,
        headers: { 'Content-Type': 'application/json' },
        data:{}
    }).then((response)=>{
      if(response.status==200)
      setTodos(todos.filter((todo) => todo.id !== id))
      else
      {
          alert('Error');
          console.error(response);
      }
    });
  }

    return (
      <>
        <Container sx={{ margin: 1, p: 1, display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center' }}>
          {todos.map((todo) => {
            return <Todo key={todo.id} title={todo.title} 
                    description={todo.description} 
                    deleteTodo={()=>removeTodo(todo.id)}
                    />;
          })}
        </Container>
      
    </>
    )
}
export default TodoContainer;
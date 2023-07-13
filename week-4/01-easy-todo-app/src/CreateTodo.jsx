import { Card, TextField ,Button} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function CreateTodo() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const navigate=useNavigate();
    const onChangeTitle=e=>{
        setTitle(e.target.value);
    }
    const onChangeDescription=e=>{
        setDescription(e.target.value);
    }
    const handleSubmit=e=>{
        e.preventDefault();
        axios({
            method: 'post',
            url:'http://localhost:3000/todos',
            headers: { 'Content-Type': 'application/json' },
            data:{
                title,
                description
            }
        }).then((response)=>{
            if(response.status===201)
            navigate('/');
            else
            {
                alert('Error');
                console.error(response);
            }
        });
    }
  return (
    <>
        <Card sx={{mt:3,p:3,boxShadow:2}}>
            <h1>Create Todo</h1>
            <form onSubmit={handleSubmit}>
              <TextField 
              margin="normal"
              required
              fullWidth
              id="Title"
              label="Title"
              name="Title"
              autoComplete="Title"
              autoFocus
              onChange={onChangeTitle}
               ></TextField>
                <TextField 
              margin="normal"
              required
              fullWidth
              id="Description"
              label="Description"
              name="Description"
              autoComplete="Description"
              autoFocus
              onChange={onChangeDescription}
               ></TextField>

               <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add TODO
            </Button>
            </form>

        </Card>
    </>
  );
}
export default CreateTodo;
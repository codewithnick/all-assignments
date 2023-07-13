import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import {Card, Container, Icon, Typography,Box } from '@mui/material';
function Todo(props) {
    // Add a delete button here so user can delete a TODO.
    return (
      <Card bgcolor='whitesmoke' sx={{width:'450px',height:'150px', justifyContent:'center',p:3,m:1, borderRadius:'10px' }}>
        <Box borderBottom='1px solid gray' display='flex' justifyContent='center' alignItems={'center'}>
          <Typography variant='h3' fontFamily='monospace' sx={{textTransform:'capitalize'}}>{props.title}</Typography>
          <DeleteForeverOutlinedIcon sx={{ml:'auto',color:'	#3A3A3A'}} alignItems='center' fontSize='large' onClick={()=>{props.deleteTodo(props.id)}} >  
          </DeleteForeverOutlinedIcon>
        </Box>        
        <Typography variant='h4' textAlign='center'  fontFamily='sans-serif' noWrap>
          {props.description}
        </Typography>
      </Card>)
  
}
export default Todo;
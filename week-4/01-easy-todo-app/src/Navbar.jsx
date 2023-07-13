import { Container, Icon, Typography,Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavbarComponent() {
  const navigate = useNavigate();
  return (
  <>
    <Box width={'80%'} boxShadow={'1'} sx={{
        justifyContent: 'space-around',
        textAlign: 'center',
        bgcolor: 'background.paper',
        display: 'flex',
        alignItems: 'center',
        p: 2
    }}
    >
        <Icon onClick={()=>navigate('/')}>I</Icon>
        <Typography onClick={()=>navigate('/')} variant='h5' fontFamily='monospace' sx={{ textTransform: 'capitalize' }}>Todo App</Typography>
        <Typography onClick={()=>navigate('/create')} variant='h5' fontFamily='monospace' sx={{ textTransform: 'capitalize' }}>Create</Typography>
    </Box>
  </>)
}
function Navbar(props){
    return(
    <NavbarComponent></NavbarComponent>
    )
};
export default Navbar;

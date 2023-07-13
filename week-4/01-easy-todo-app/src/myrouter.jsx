import {Route,Routes,BrowserRouter} from 'react-router-dom';
import TodoContainer from './Todocontainer';
import CreateTodo from './CreateTodo';
function MyRouter(){
    return (
        <>
            <Routes>
                <Route exact path="/" element={<TodoContainer />} />
                <Route exact path="/create" element={<CreateTodo />} />
            </Routes>
        </>
    )
}
export default MyRouter;
import Login from './componet/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from './componet/Register';
import Home from './componet/home/Home';
import {  useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {

  const {currentUser}=useContext(AuthContext);

  const RequireAuth=({children})=>{
    if(!currentUser){
      return <Navigate to="/"/>
    }
    return children;
  }
  

  return (
    <main>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='register' element={<Register/>}></Route>
          <Route path='/chat' element={
              <RequireAuth>
                  <Home/>
              </RequireAuth>
          }></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;

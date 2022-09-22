import Login from './componet/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from './componet/Register';
import Home from './componet/home/Home';


function App() {
  return (
    <main>
      <Router>
        <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}></Route>

        </Routes>
      </Router>
    </main>
  );
}

export default App;

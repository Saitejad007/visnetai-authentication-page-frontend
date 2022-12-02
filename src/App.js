import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route exact path='/signup' element={<Signup/>} />
      <Route exact path='/resetpwd' element={<ResetPassword/>} />
    </Routes>
  );
}

export default App;

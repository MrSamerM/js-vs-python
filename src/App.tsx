import './App.css'
import { Routes, Route } from 'react-router-dom';
import Login from './features/login/Login'
import Signup from './features/signup/SignUp'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App

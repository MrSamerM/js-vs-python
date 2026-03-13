import './App.css'
import { Routes, Route } from 'react-router-dom';
import Game from './features/game/Game'
import Login from './features/login/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Game />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App

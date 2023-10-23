import '/bibliotecas/bootstrap/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import RecoverPassword from './components/RecoverPassword'
import CreateAccount from './components/CreateAccount'
import Home from './components/Home'



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/recoverpass" element={ <RecoverPassword /> } />
      <Route path="/create-account" element={ <CreateAccount /> } />
      <Route path="/home" element={ <Home /> } />
    </Routes>
      
     
    </>
  )
}

export default App

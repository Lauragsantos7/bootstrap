import '/bibliotecas/bootstrap/css/bootstrap.min.css'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import RecoverPassword from './components/RecoverPassword'
import CreateAccount from './components/CreateAccount'



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/recoverpass" element={ <RecoverPassword /> } />
      <Route path="/create-account" element={ <CreateAccount /> } />
    </Routes>
      
     
    </>
  )
}

export default App

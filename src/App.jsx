import { BrowserRouter,Routes,Route } from "react-router-dom"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import SendMoney from "./pages/SendMoney"
import { useState } from "react"

function App() {

  const [id,setId] = useState('');
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Signup/>}/>
          <Route path="/signin" element = {<Signin/>}/>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/dashboard" element = {<Dashboard id = {id} setId = {setId}/>}/>
          <Route path="/sendmoney" element = {<SendMoney id = {id} setId={setId}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

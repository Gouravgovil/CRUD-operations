import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import Createusers from './Createuser'
import Updateusers from './Updateuser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} ></Route>
          <Route path='/create' element={<Createusers />} ></Route>
          <Route path='/update/:id' element={<Updateusers />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

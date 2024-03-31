import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Team from './pages/team';
import Vendors from './pages/vendors';
import Errorage from './pages/errorpage';
import Bills from './pages/bill';
import './App.css'


function App() {

  

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/vendors' element={<Vendors />} />
          <Route path='/contact' element={<Team />} />
          <Route path='/bill' element={<Bills/>} />
          <Route path='*' element={<Errorage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

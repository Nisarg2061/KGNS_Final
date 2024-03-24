import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import team from './pages/team';
import vendor from './pages/vendors';
import add_vendor from './pages/add_vendor';
import './App.css'
import VendorList from './vendorlist'
import VendorForm from './vendorform'

function App() {

  const [vendor, setVendor] = useState([{}])

  useEffect(() => {
    fetchVendor()
  }, [])

  const fetchVendor = async () => {
    const response = await fetch("http://127.0.0.1:5000/vendors")
    const data = await response.json()
    setVendor(data.vendor)
    console.log(data.vendor)
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
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

  return <>
    <VendorList vendor={vendor}/>
    <VendorForm/>
  </>
}

export default App

import Header from "../components/header";
import { useEffect, useState } from 'react';
import Footer from "../components/footer";
import VendorList from './vendorlist';
import VendorForm from './vendorform';


export default function Vendors() {
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
        <>
            <Header/>
            <VendorList vendor={vendor}/>
            <VendorForm/>
            <Footer/>
        </>
    )
}
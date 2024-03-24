import Header from "../components/header";
import { useEffect, useState } from 'react';
import Footer from "../components/footer";
import VendorList from './vendorlist';
import VendorForm from './vendorform';


export default function Vendors() {
    const [vendor, setVendor] = useState([{}])
    const [isModalOpen, setIsModalOpen] = useState(false)


  useEffect(() => {
    fetchVendor()
  }, []);

  const fetchVendor = async () => {
    const response = await fetch("http://127.0.0.1:5000/vendors")
    const data = await response.json()
    setVendor(data.vendor)
    console.log(data.vendor)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openCreateModal = () => {
    if (!isModalOpen) setIsModalOpen(true)
  }

    return (
        <>
            <Header/>
            <VendorList vendor={vendor}/>
            <br />
            <button onClick={openCreateModal}>Add New Vendor</button>
            { isModalOpen && <div className="modal">
                <div className="modal_content">
                  <span className="close" onClick={closeModal}>&times;</span>
                <VendorForm/>
                </div>
              </div>
              }
            
            <Footer/>
        </>
    )
}
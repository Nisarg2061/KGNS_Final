import Header from "../components/header";
import Footer from "../components/footer";
import BillItem from "./BillItem";
import BillForm from "./billform";
import { useEffect, useState } from "react";

export default function Mater(){
    const [maters, setMaters] = useState([{}])
    const [isModalOpen, setIsModalOpen] = useState(false)


  useEffect(() => {
    fetchMaters()
  }, []);

  const fetchMaters = async () => {
    const response = await fetch("http://127.0.0.1:5000/bills")
    const data = await response.json()
    setMaters(data.maters)
    console.log(data.maters)
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
            <BillItem maters={maters}/>
            <br />
            <button onClick={openCreateModal}>Add Item</button>
            { isModalOpen && <div className="modal">
                <div className="modal_content">
                  <span className="close" onClick={closeModal}>&times;</span>
                <BillForm/>
                </div>
              </div>
              }
            
            <Footer/>
        </>
    )
}
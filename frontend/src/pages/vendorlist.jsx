import React from "react"

const VendorList = ({vendor, updateVendor, updateCallback}) => {
    const onDelete = async (id) => {
        try{
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/vendor/delete_vendor/${id}`, options)
            if(response.status == 200){
                updateCallback()
            }else{
                console.error("Failed to delete")
            }
        } catch(error){
            alert(error)
        }
    }

    return <div>
        <h1 className="list_h">
            Vendor List
        </h1>
        <table className="table_ven">
            <thead>
            <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {vendor.map((vendor) => (
                    <tr key={vendor.id}>
                        <td>{vendor.id}</td>
                        <td>{vendor.name}</td>
                        <td>{vendor.email}</td>
                        <td>{vendor.mobile}</td>
                        <td>
                            <button onClick={() => updateVendor(vendor)}>Edit</button>
                            <button onClick={() => onDelete(vendor.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default VendorList
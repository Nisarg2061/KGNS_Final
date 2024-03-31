import React from "react"

const VendorList = ({vendor, updateVendor, updateCallback}) => {
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
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default VendorList
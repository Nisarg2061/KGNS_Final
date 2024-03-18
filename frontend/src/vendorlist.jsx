import React from "react"

const VendorList = ({vendor}) => {
    return <div>
        <h2>
            Vendor List
        </h2>
        <table className="table_ven">
            <thead>
            <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {vendor.map((vendor) => (
                    <tr key={vendor.id}>
                        <td>{vendor.id}</td>
                        <td>{vendor.name}</td>
                        <td>{vendor.email}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}

export default VendorList
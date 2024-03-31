import { useState } from "react";

const VendorForm = ({ existingVendor = {}, updateCallback}) => {
    const [name, setName] = useState(existingVendor.name || "");
    const [email, setEmail] = useState(existingVendor.email || "");
    const [mobile, setMobile] = useState(existingVendor.mobile || "");

    const updating = Object.entries(existingVendor).length !== 0

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            name,
            email,
            mobile
        }

        const url = "http://127.0.0.1:5000/vendors/" + (updating ? `edit/${existingVendor.id}` : "add")
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if(response.status !=201 && response.status!=200){
            const data = await response.json()
            alert(data.message)
        }
        else{
            updateCallback()
        }
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <br />
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <br />
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <br />
                <label htmlFor="mobile">Mobile:</label>
                <input type="text" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
            <br />
            <button type="submit">Edit Info</button>
        </form>
    );
};

export default VendorForm

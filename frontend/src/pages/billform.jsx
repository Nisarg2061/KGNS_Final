import { useState } from "react";

const BillForm = ({ addCallback }) => {
    const [description, setDescription] = useState("");
    const [hsn_sac, setHsnSac] = useState("");
    const [gst_rate, setGstRate] = useState("");
    const [quantity, setQuantity] = useState("");
    const [rate, setRate] = useState("");
    const [unit, setUnit] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            description,
            hsn_sac,
            gst_rate,
            quantity,
            rate,
            unit
        };

        const url = "http://127.0.0.1:5000/bills/add";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(url, options);
        if (response.status !== 201) {
            const data = await response.json();
            alert(data.message);
        } else {
            addCallback();
            setDescription("");
            setHsnSac("");
            setGstRate("");
            setQuantity("");
            setRate("");
            setUnit("");
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <br />
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <br />
                <label htmlFor="hsn_sac">HSN/SAC:</label>
                <input type="text" id="hsn_sac" value={hsn_sac} onChange={(e) => setHsnSac(e.target.value)} />
            </div>
            <div>
                <br />
                <label htmlFor="gst_rate">GST Rate:</label>
                <input type="text" id="gst_rate" value={gst_rate} onChange={(e) => setGstRate(e.target.value)} />
            </div>
            <div>
                <br />
                <label htmlFor="quantity">Quantity:</label>
                <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <div>
                <br />
                <label htmlFor="rate">Rate:</label>
                <input type="text" id="rate" value={rate} onChange={(e) => setRate(e.target.value)} />
            </div>
            <div>
                <br />
                <label htmlFor="unit">Unit:</label>
                <input type="text" id="unit" value={unit} onChange={(e) => setUnit(e.target.value)} />
            </div>
            <br />
            <button type="submit">Add Bill</button>
        </form>
    );
}

export default BillForm
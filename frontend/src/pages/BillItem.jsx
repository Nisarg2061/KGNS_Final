import React from "react";

const BillItem = ({bills}) => {

    return <div>
    <div className="bill_div">
    <h1>KGNS AGARBATTI MANUFACTURING</h1>
    <p>(A PMEGP unit under KVIC)</p>
    <p>P.No.20, Mahavishnu Nagar, Nagar Rachana Society, Mouza Narsala, Nagpur-440 034.</p>
    <p>Email : kgnsagarbatti01@gmail.com (M) +91 9890069556/ 8446499531</p>

    <h2>TAX INVOICE</h2>
    <p>Invoice Date : 01.05.2023 Pay by Date : 01.06.2023</p>
    </div>

    <table className="table_bill">
        <thead>
        <tr>
            <th>BILL TO</th>
            <th>INVOICE NO</th>
            <th>Delivery Note</th>
            <th>Items Delivered</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>M/s AAI BABA Enterprises28. Chandra Nagar, Old Pardi Naka,Nagpur-440035</td>
            <td>KGN's-0005</td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
    </table>
        
    <br />

    <table className="table_bill">
        <thead>
        <tr>
            <th>Sl.No.</th>
            <th>Description of Goods</th>
            <th>HSN/SAC</th>
            <th>GST Rate</th>
            <th>Quantiry (KG)</th>
            <th>Rate</th>
            <th>Unit</th>
            <th>Amount</th>
        </tr>
        </thead>
        <tbody>
            {bills.map((bills) => (
                <tr key={bills.id}>
                    <td>{bills.id}</td>
                    <td>{bills.description}</td>
                    <td>{bills.hsn_sac}</td>
                    <td>{bills.gst_rate}</td>
                    <td>{bills.quantity}</td>
                    <td>{bills.rate}</td>
                    <td>{bills.unit}</td>
                    <td>{bills.amount}</td>
                </tr>
            ))}
        </tbody>
    </table>

    <div className="bill_div_1">
    <h3>TERMS AND CONDITIONS</h3>
    <ol>
        <li>Goods once sold will not be taken back or Exchanged.</li>
        <li>18% interest will be charged if payment is not made within 30 days.</li>
        <li>All disputes are subject to NAGPUR jurisdiction only.</li>
    </ol>
    </div>
</div>

}

export default BillItem
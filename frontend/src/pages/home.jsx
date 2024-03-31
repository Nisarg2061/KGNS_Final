import Header from "../components/header";
import Footer from "../components/footer";

export default function Home(){
    return (
        <>
            <Header/>
            <body>
            <main>
        <div>
            <div>
                <a href="/vendors" className="index_a">
                    <div className="index_div">
                        <h1>View Vendor List</h1>
                    </div>
                </a>
                <a href="#" className="index_a">
                    <div className="index_div">
                        <h1>View Inventory</h1>
                    </div>    
                </a>
            </div>
            <div>
                <a href="#" className="index_a">
                    <div className="index_div">
                        <h1>Generate Bill</h1>
                    </div>
                </a>
                <a href="#" className="index_a">
                    <div className="index_div">
                        <h1>View History</h1>
                    </div>
                </a>
            </div>
            <a href="/contact" className="index_a">
                <div className="index_div_conc">
                    <h2>Contact Team</h2>
                </div>
            </a>
        </div>
    </main>
            </body>
            
            <Footer/>
        </>
    )
}

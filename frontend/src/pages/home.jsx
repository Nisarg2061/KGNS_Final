import Header from "../components/header";
import Footer from "../components/footer";

export default function Home(){
    return (
        <>
            <Header/>
            <main>
        <div>
            <div>
                <a href="/vendors" class="index_a">
                    <div class="index_div">
                        <h1>View Vendor List</h1>
                    </div>
                </a>
                <a href="#" class="index_a">
                    <div class="index_div">
                        <h1>View Inventory</h1>
                    </div>    
                </a>
            </div>
            <div>
                <a href="#" class="index_a">
                    <div class="index_div">
                        <h1>Generate Bill</h1>
                    </div>
                </a>
                <a href="#" class="index_a">
                    <div class="index_div">
                        <h1>View History</h1>
                    </div>
                </a>
            </div>
            <a href="/contact" class="index_a">
                <div class="index_div_conc">
                    <h2>Contact Team</h2>
                </div>
            </a>
        </div>
    </main>
            <Footer/>
        </>
    )
}

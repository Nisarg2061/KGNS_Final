import Header from "../components/header";
import Footer from "../components/footer";

export default function Errorage(){
    return(
        <>
        <Header />
        <body className="b_error">
        <h1 className="list_h">404 Not Found</h1>
        </body>
        <Footer />
        </>
    )
}
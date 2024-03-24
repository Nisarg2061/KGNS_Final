export default function Header() {
    return(
        <div className="index_bar">
            <p>
                <a href="/" className="index_nav">
                home
                </a>
                <a href="/vendors" className="index_nav">
                Vendors
                </a>
                <a href="/inventory" className="index_nav">
                Inventory
                </a>
                <a href="/bill" className="index_nav">
                Bill
                </a>
                <a href="/history" className="index_nav">
                History
                </a>
                <a href="/contact" className="index_nav">
                Team
                </a>
            </p>
            <hr />
        </div>
    )
}
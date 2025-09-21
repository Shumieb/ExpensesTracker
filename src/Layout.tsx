import { Outlet } from "react-router"
import Header from "./components/header"
import Footer from "./components/footer"

function Layout() {
    return (
        <div className="bg-sky-50">
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
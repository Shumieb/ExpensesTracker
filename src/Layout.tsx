import { Outlet } from "react-router"
import Header from "./components/Nav/header"
import Footer from "./components/Nav/footer"

function Layout() {
    return (
        <div className="bg-sky-100">
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout
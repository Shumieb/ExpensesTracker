import { NavLink, useLocation } from "react-router"

const Header = () => {

    let location = useLocation()

    return (
        <header className={`${(location.pathname.includes("/expenses")) ? "bg-sky-100" : "bg-white"}`}
        >
            <section className="flex justify-between items-center w-[90%] mx-auto py-4">


                <NavLink to="/"
                    className="text-2xl hover:underline decoration-sky-900">
                    Expenses Tracker
                </NavLink>
                <ul className="flex justify-between items-center gap-4 text-xl">
                    <li>
                        <NavLink
                            to="/"
                            className="hover:underline decoration-sky-900"
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/expenses"
                            className="hover:underline decoration-sky-900"
                        >Expenses</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="hover:underline decoration-sky-900"
                        >About</NavLink>
                    </li>
                </ul>
            </section>
        </header>
    )
}

export default Header

import { NavLink } from "react-router"

const Header = () => {
    return (
        <header className="flex justify-between items-center w-[80%] mx-auto py-4 mb-5">
            <NavLink to="/" className="text-2xl hover:underline decoration-sky-900">Expenses Tracker</NavLink>
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
        </header>
    )
}

export default Header

import { Link } from "react-router"

const Header = () => {
    return (
        <header className="flex justify-between items-center w-[80%] mx-auto py-4 mb-5">
            <Link to="/" className="text-2xl hover:underline decoration-pink-900">Expenses Tracker</Link>
            <ul className="flex justify-between items-center gap-4 text-xl">
                <li>
                    <Link
                        to="/"
                        className="hover:underline decoration-pink-900"
                    >Home</Link>
                </li>
                <li>
                    <Link
                        to="/expenses"
                        className="hover:underline decoration-pink-900"
                    >Expenses</Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="hover:underline decoration-pink-900"
                    >About</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header

import { NavLink } from "react-router"

const Header = () => {

    const HandleSignOut = () => {
        console.log("Log out")
    }

    return (
        <header>
            <section className="flex justify-between items-center w-[90%] mx-auto py-4 text-sky-900">
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
                    <li>
                        <NavLink
                            to="/sign-in"
                            className="hover:underline decoration-sky-900"
                        >Sign In</NavLink>
                    </li>
                    <li>
                        <button
                            onClick={HandleSignOut}
                            className="hover:underline decoration-sky-900 cursor-pointer">
                            Sign Out
                        </button>
                    </li>
                </ul>
            </section>
        </header>
    )
}

export default Header

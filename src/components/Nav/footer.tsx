import { useLocation } from "react-router"

const Footer = () => {
    let location = useLocation()

    return (
        <footer
            className={`flex justify-center items-center gap-4 mx-auto py-4 text-xl  
                ${(location.pathname.includes("/expenses")) ? "bg-sky-100" : "bg-white"}`
            }
        >
            <p>&copy; 2025</p>
            <p>Created by Shumie</p>
        </footer>
    )
}

export default Footer
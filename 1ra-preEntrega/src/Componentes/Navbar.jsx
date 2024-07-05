import Logo from "./Logo"

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Logo />
                <ul className="navbar-enlaces">
                    <li><a href="/inicio">Inicio</a></li>
                    <li><a href="/productos">Productos</a></li>
                    <li><a href="/servicios">Servicios</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
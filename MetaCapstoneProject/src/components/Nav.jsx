import Logo from "../../public/images/Little-lemon-logo.png"
const Nav = () => {
    return (
        <>
            <img src={Logo} alt="little lemon logo" />
            <ul>
                <li><a href="http://">Home</a></li>
                <li><a href="http://">About</a></li>
                <li><a href="http://">Menu</a></li>
                <li><a href="http://">Reservation</a></li>
                <li><a href="http://">Order online</a></li>
                <li><a href="http://">Login</a></li>
            </ul>
        </>
    )
}

export default Nav;
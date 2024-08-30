import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"


// *Header Component 

const Header = ()=>{

    const [btnName, setbtnName] = useState("Sign up")

    return(
        <>
            <nav>
                <div className="container nav__container">
                    <a className="nav__logo">
                        <img src={LOGO_URL} alt="Logo"/>
                    </a>
                    <ul className="nav__items">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <a><span><i class="uil uil-shopping-cart-alt"></i></span> Cart</a>
                        </li>
                    </ul>
                    <button className="btn" onClick={()=>{
                        btnName === "Login" ? setbtnName("Sign up") : setbtnName("Login")
                    }}>{btnName}</button>
                </div>
            </nav>
        </>
    )
}


export default Header
import { NavLink } from "react-router-dom";
import Wrapper from "../Styles/navbar";

export const Navbar = () => {
    return (
        <Wrapper>
            <div className="container">
                <h2 className="logo">Bech</h2>
                <div className="nav-links">
                    <NavLink to={"/"} className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to={"about"} className="nav-link">
                        About
                    </NavLink>
                    <NavLink to={"newsletter"} className="nav-link">
                        News Letter
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    );
};

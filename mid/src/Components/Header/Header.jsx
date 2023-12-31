import { useEffect, useState } from "react";

import { TbSearch } from "react-icons/tb"
import { Link } from "react-router-dom";

import "./Header.css";
import React from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = ()=>{
        const offset = window.scrollY
        if(offset>60){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    }, [])
    return (
        <>
            <header className={`main-header ${scrolled? 'sticky-header' : ''}` }>
                <div className="header-content">
                    <ul className="left">
                        <li><Link to="/" className="router-link">Home</Link></li>
                    </ul>
                    <div className="center"><Link to="/" className="router-link">Twitter</Link></div>
                    <div className="right">
                      <Link to="/profile" className="router-link">Profile</Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
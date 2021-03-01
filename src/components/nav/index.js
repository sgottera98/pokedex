import React, {useState, useRef, useCallback, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {
    isMobile
  } from "react-device-detect";

import Logo from '../../assets/images/logo.png'

const Nav = ({setNavSize}) => {
    const navRef = useRef(null)
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNavHeight = useCallback(() => {
        if(navRef.current) {
            setNavSize(navRef.current.getBoundingClientRect().height)
        }
    }, [navRef, setNavSize])

    useEffect(() => {
        handleNavHeight()
    },[navRef, handleNavHeight])

  return (
    <nav ref={navRef}>
        <div className="wrap-nav-logo">
            <img src={Logo} className="img-nav-logo" alt="Logo Principal"/>
        </div>
        {
            !isMobile ?
                <></>
            :
                <div className={`hamburger-menu ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={`hamburger-menu-line ${menuOpen ? 'is-open' : ''}`}/>
                    <span className={`hamburger-menu-line ${menuOpen ? 'is-open' : ''}`}/>
                    <span className={`hamburger-menu-line ${menuOpen ? 'is-open' : ''}`}/>
                </div>    
        }

        <div  className={`wrap-nav-menu ${menuOpen ? 'is-open' : ''}`}>
            <Link to="#" className="nav-menu-item">Home</Link>
            <Link to="#" className="nav-menu-item">Product</Link>
            <Link to="#" className="nav-menu-item">Faq</Link>
            <Link to="#" className="nav-menu-item">Contact</Link>
        </div>
    </nav>
  )
}

export default Nav
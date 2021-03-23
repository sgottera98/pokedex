import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './styles.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
    return (
        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <div className="logo"><Link to="/"><img src='https://fontmeme.com/permalink/210201/84f1943cbd05e36bb90d12663346a34b.png' alt='Logo Pokedéx com tema do Pokemon'></img></Link></div>
                    <ul className={`nav-links ${open ? 'menu-open' : ''}`} >
                    {/* <ul className="nav-links" style={{transform: open ? "translateX(0px)" : "translateX(-500px)"}}> */}
                        <li><Link to="/">Home</Link></li>
                        <li><a href="https://pokeapi.co/">API</a></li>
                    </ul>
                    <i onClick={() => setOpen(!open)} className="fas fa-bars burguer"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
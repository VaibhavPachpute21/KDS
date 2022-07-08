import React, { useState } from 'react'
import './NavBars.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const [navColor,setNavColor]=useState(false)

    const changeNavColor =()=>{
        if(window.scrollY >= 90){
            setNavColor(true)
        }
        else{
            setNavColor(false)
        }

    }

    window.addEventListener('scroll' ,changeNavColor)


    return (
        <div className={navColor ? 'header activeH' : 'header' }>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src="./images/logo1.png" alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<i class="bi bi-x-lg"></i>)
                        : (<i class="bi bi-list"></i>)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' link='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' onClick={closeMenu}>About us</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' onClick={closeMenu}>Our Brands</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' onClick={closeMenu}>Blog</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' onClick={closeMenu}>Careers</a>
                    </li>

                    <li className='nav-item'>
                        <a href='#' class="btn btn-primary" onClick={closeMenu}>Contact us <i class="bi bi-arrow-right"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
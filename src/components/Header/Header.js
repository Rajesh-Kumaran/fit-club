import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { Link } from 'react-scroll';


const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false)
    const mobile =  window.innerWidth <= 768

    
    return (
        <div className="header">

            <img src={Logo} alt="fit-club logo" className='logo' />
            {(menuOpened === false && mobile === true)
                ? (<div
                    style={{
                        backgroundColor: "var(--appColor)", padding: "0.5rem",
                        borderRadius: "5px"
                    }}
                    onClick={() => setMenuOpened(true)}
                >
                    <img
                        src={Bars}
                        alt="hamburger logo"
                        style={{ width: "1.5rem", height: "1.5rem" }}
                    />
                </div>) : (<ul className='header-menu'>
                    <li>
                        <Link
                            to='header'
                            activeClass='active'
                            smooth={true}
                            spy={true}
                            onClick={() => setMenuOpened(false)}
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='programs'
                            smooth={true}
                            spy={true}
                            onClick={() => setMenuOpened(false)}
                        >
                            Programs
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='reasons'
                            smooth={true}
                            spy={true}
                            onClick={() => setMenuOpened(false)}
                        >
                            Why us
                        </Link>
                    </li>

                    <li>
                        <Link
                            to='plans'
                            smooth={true}
                            spy={true}
                            onClick={() => setMenuOpened(false)}
                        >
                            Plans
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='testimonials'
                            smooth={true}
                            onClick={() => setMenuOpened(false)}
                            spy={true}
                        >
                            Testimonials
                        </Link>
                    </li>
                </ul>)}

        </div>
    )
}

export default Header
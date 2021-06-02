
import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Img/logo.png'

function Header() {
    return (
        <div>

            {/* Header Top Section */}
            <section className="top__header_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="top__header__wrapper">

                                {/* <!-- left date box --> */}
                                <div className="top__header__box mobile__hide">
                                    <p>সোমবার, ১৫ মার্চ ২০২১</p>
                                </div>

                                {/* <!-- middle logo area --> */}
                                <div className="top__header__box header__logo">
                                    <Link to="/">
                                        <img src={Logo} alt="Header Logo" />
                                    </Link>
                                </div>

                                <ul className="bars desktop__hide" onclick="SidebarToggle()">
                                    <li><img src="assets/images/img/menu.svg" alt="menu" /></li>
                                </ul>

                                {/* <!-- right social menu --> */}
                                <div className="top__header__box header__social mobile__hide">
                                    <ul>
                                        <li><Link to="/"><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                        <li><Link to="/"><i className="fab fa-skype"></i></Link></li>
                                        <li><Link to="/"><i className="fab fa-google-plus"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Header Menu Section */}
            

        </div>
    )
}

export default Header

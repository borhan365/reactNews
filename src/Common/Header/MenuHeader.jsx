
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Img/logo.png'
import Bars from './Bars'

function MenuHeader() {

    const [sticky, setSticky] = useState(false); 

    const stickeyMenu = () => {
        if(window.scrollY > 50) {
            setSticky(true);
        } else {
            setSticky(false); 
        }
    }

    useEffect(() => {
        stickeyMenu();
    }, []); 

    window.addEventListener("scroll", stickeyMenu); 

    return (
        <>
            <section className={sticky ? "main__header__section active" : "main__header__section"}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main__header__menu">

                                <Bars />

                                <ul id="stickyLogo">
                                    <li><img src={Logo} alt="Logo" /></li>
                                </ul>

                                <ul>
                                    <li><Link to="/category">বাংলাদেশ</Link></li>
                                    <li><Link to="/category">দেশজুড়ে</Link></li>
                                    <li><Link to="/category">আন্তজাতিক</Link></li>
                                    <li><Link to="/category">খেলাধুলা</Link></li>
                                    <li><Link to="/category">ভিডিও</Link></li>
                                    <li><Link to="/category">বিনোদন</Link></li>
                                    <li><Link to="/category">ফিচার</Link></li>
                                    <li><Link to="/category">রাজনীতি</Link></li>
                                    <li className="dropdown__menu"><Link to="/category">অন্যান্য</Link>
                                        <ul className="dropdown__wrapper">
                                            <li><Link to="/category">বাংলাদেশ</Link></li>
                                            <li><Link to="/category">দেশজুড়ে</Link></li>
                                            <li><Link to="/category">আন্তজাতিক</Link></li>
                                            <li><Link to="/category">খেলাধুলা</Link></li>
                                            <li><Link to="/category">ভিডিও</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuHeader

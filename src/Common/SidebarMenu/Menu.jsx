import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <div className="right__sidebar__menu__wrapper">
                <ul>
                    <li><Link to="/category">বাংলাদেশ</Link></li>
                    <li><Link to="/category">দেশজুড়ে</Link></li>
                    <li><Link to="/category">আন্তজাতিক</Link></li>
                    <li><Link to="/category">খেলাধুলা</Link></li>
                    <li><Link to="/category">ভিডিও</Link></li>
                    <li><Link to="/category">বিনোদন</Link></li>
                    <li><Link to="/category">ফিচার</Link></li>
                    <li><Link to="/category">রাজনীতি</Link></li>
                    <li><Link to="/category">আন্তজাতিক</Link></li>
                    <li><Link to="/category">খেলাধুলা</Link></li>
                    <li><Link to="/category">ভিডিও</Link></li>
                    <li><Link to="/category">বিনোদন</Link></li>
                    <li><Link to="/category">ফিচার</Link></li>
                    <li><Link to="/category">রাজনীতি</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Menu

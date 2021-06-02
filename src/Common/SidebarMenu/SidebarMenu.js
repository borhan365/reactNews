import React, { useState } from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

function SidebarMenu() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
        console.log("sidebar clicked");
    }

    return (
        <>
          <section className={sidebar ? 'right__sidebar__section active' : 'right__sidebar__section'}>
            <div className="containe">
                <div className="row">
                    <div className="col-md-12">
                        <div className="right__sidebar__menu__wrapper">

                            <Header showSidebar={showSidebar} />
                            <Menu />
                            <Footer />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default SidebarMenu

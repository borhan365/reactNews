import React, {useState} from 'react'
import Header from '../SidebarMenu/Header'
import Footer from '../SidebarMenu/Footer'
import Menu from '../SidebarMenu/Menu'

function Bars() {

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
                        <div className="right__sidebar">

                            <Header showSidebar={showSidebar} />
                            <Menu />
                            <Footer />

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <ul className="bars">
            <li><i className="fas fa-bars" onClick={showSidebar} ></i></li>
        </ul>

        </>
    )
}

export default Bars

import React from 'react'

function Header({showSidebar}) {
    return (
        <>
            <div className="right__sidebar__header">

                <div className="right__sidebar__logo">
                    <img src="assets/images/img/logo.png" className="img-fluid" alt="Logo" />
                </div>

                <div className="cross__icon" onClick={showSidebar}>
                    <i className="fas fa-times"></i>
                </div>

            </div>
        </>
    )
}

export default Header

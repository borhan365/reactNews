

import React from 'react'
import FirstColumn from './FirstColumn'
import SecondColumn from './SecondColumn'
import ThirdColumn from './LastColumn'
import FooterBottom from './FooterBottom'

function FooterSection() {
    return (
        <>
            <footer className="footer__main">

                <div className="ClickTop">
                    <i className="fa fa-chevron-up" aria-hidden="true" />
                </div>

                <section className="footer__top__section">
                    <div className="container">
                        <div className="row">
                            <FirstColumn />
                            <SecondColumn />
                            <ThirdColumn />
                        </div>
                    </div>
                </section>

                <FooterBottom />

            </footer>
        </>
    )
}

export default FooterSection

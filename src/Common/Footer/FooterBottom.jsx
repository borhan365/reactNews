import { ExternalLink } from 'react-external-link'
import React from 'react'

function FooterBottom() {
    return (
        <>
            <section className="footer__bottom__section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer__bottom__wrapper">
                                <div className="footer__bottom__left">
                                    <p>© 2021 - NogarNews.Com All Rights Reserved.</p>
                                </div>
                                <div className="footer__bottom__right">
                                    <p>Website Design & Developed By <span><ExternalLink href="https://mdborhanuddin.com/">Md Borhan Uddin</ExternalLink></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterBottom

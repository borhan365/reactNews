import React from 'react'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/FooterSection'
import Featured from './Featured'
import AuthorMini from './Mini/AuthorMini'

function Author() {
    return (
        <>
            <Header />
                <main className="mb-5">
                    <Featured />
                    <AuthorMini />
                </main>
            <Footer />
        </>
    )
}

export default Author


import React from 'react'
import Featured from './Featured'
import Content from './Content'
import pageData from './PageData'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/FooterSection'


function Page() {

    return (
        <>
        <Header />
            <main>

                {/* Featured Section for BG image and Title */}
                {
                    pageData.map((val) => {
                        return (
                            <Featured
                                title={val.title}
                                img={val.img}
                            />
                        )
                    })
                }

                {/* Single Page Content Area */}
                {
                    pageData.map((val) => {
                        return (
                            <Content
                                desc={val.desc}
                            />
                        )
                    })
                }
            </main> 
        <Footer />  
        </>
    )
}

export default Page

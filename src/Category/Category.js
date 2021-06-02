
import React from 'react'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/FooterSection'
import Sidebar from '../Common/Sidebar/Sidebar'
import Featured from './Featured/Featured'
import CategoryMini from './Mini/CategoryMini'

function Category() {
    return (
        <>

            <Header />

            <main>
                <section className="category__featured__section">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-9">
                                <Featured />
                                <CategoryMini />
                            </div>

                            <div className="col-md-3">
                                <Sidebar />
                            </div>
                            
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

        </>
    )
}

export default Category

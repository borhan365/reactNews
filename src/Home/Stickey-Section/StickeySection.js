
import React from 'react'
import Banner from './ScrollNewsBox/Banner/Banner'
import FirstNews from './ScrollNewsBox/FirstNews/FirstNews'
import SecondSection from './ScrollNewsBox/Second-Section/SecondSection'
import Sidebar from '../../Common/Sidebar/Sidebar'


function StickeySection() {
    return (
        <>
            <section class="fourth__section">
                <div class="container">

                    <div class="row">
                        <div class="col-md-9">  

                            <FirstNews />
                            <Banner />
                            <SecondSection />
                        
                        </div>

                        {/* Sidebar */}
                        <div className="col-md-3">
                            <Sidebar />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default StickeySection

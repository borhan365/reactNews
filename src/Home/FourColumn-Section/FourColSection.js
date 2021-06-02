
import React from 'react'
import FirstSection from './First-Section/FirstSection'
import SecondSection from './Second-Section/SecondSection'
import ThirdSection from './Third-Section/ThirdSection'
import FourSection from './Four-Section/FourSection'

function FourColSection() {
    return (
        <>
        <section className="six__section">
            <div className="container">
                <div className="row">
                    <FirstSection />
                    <SecondSection />
                    <ThirdSection />
                    <FourSection />
                </div>
            </div>
        </section>
            
        </>
    )
}

export default FourColSection

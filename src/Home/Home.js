

import React from 'react'
import Header from '../Common/Header/Header'
import Footer from '../Common/Footer/FooterSection'
import Featured from './Featured-Section/Featured'
import SecondSection from './Second-Section/SecondSection'
import StickeySection from './Stickey-Section/StickeySection'
import VideoNews from './Video-Section/VideoNews'
import FourColSection from './FourColumn-Section/FourColSection'
import VideoAndLifestyle from './Video&Lifestyle-Section/Video&Lifestyle'
import BottomFixedAds from '../Common/Effects/BottomFixedAds'
import ModalPopup from '../Common/Effects/ModalPopup'

function Home() {
    return (
        <div>
            <ModalPopup />
            <BottomFixedAds />
            <Header />
            <Featured />
            <SecondSection />
            <StickeySection />
            <VideoNews />
            <FourColSection />
            <VideoAndLifestyle />
            <Footer />
        </div>
    )
}

export default Home

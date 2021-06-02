
import React from 'react'
import BannerAds from '../../../../Common/Img/banner.jpg'

function Banner() {
    return (
        <div>
            {/* <!-- Banner Ads --> */}
            <div className="row">
                <div className="col-md-12">
                    <div className="banner__ads__wrapper">
                        <img src={BannerAds} className="img-fluid" alt="Banner" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner

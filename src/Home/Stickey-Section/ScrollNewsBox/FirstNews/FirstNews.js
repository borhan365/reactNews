
import React from 'react'
import FeaturedNews from './FeaturedNews'
import MiniNews from './MiniNews'
import Data from './Data'

function FirstNews() {
    return (
        <>
            {/* Title */}
            <div class="news__title">
                <h2>চট্টগ্রাম নিউজ</h2>
                <div class="underline"></div>
            </div>                      

            {/* Section Body */}
            <div className="fourth__sec__wrapper">   

                {
                    Data.slice(0, 1).map((val) => {
                        return(
                            <FeaturedNews 
                                title={val.Title}
                                desc={val.Desc}
                                thumbnail={val.Thumbnail}
                            />
                        )
                    })
                }

                <div className="middle__mini__news__wrapper">

                    {
                        Data.slice(0, 3).map((val) => {
                            return (
                                <MiniNews 
                                    thumb = {val.Thumbnail}
                                    title = {val.Title}
                                />
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default FirstNews

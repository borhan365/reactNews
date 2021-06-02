
import React from 'react'
import VideoItem from './VideoItem'
import Data from './Data'

function VideoNews() {

    return (
        <>
            <section className="video__section">
                <div className="container">
                    
                    <div className="news__title">
                        <h2>ভিডিও নিউজ</h2>
                        <div className="underline"></div>
                    </div>

                    <div className="row">
                    <div className="col-md-12">
                        <div className="video__section__wrapper">

                            {
                                Data.map((val) => {
                                    return(
                                        <VideoItem
                                            Title= {val.Title}
                                            Img = {val.Img}
                                        />
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

                </div>
            </section>
        </>
    )
}

export default VideoNews

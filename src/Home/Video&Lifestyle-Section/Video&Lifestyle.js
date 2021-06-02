
import React from 'react'
import Lifestyle from './Lifestyle'
import Photo from './Photo'
import PhotoData from './PhotoData'
import LifestyleData from './LifestyleData'

function VideoLifestyle() {
    return (
        <>
            <section className="photo__gallery__section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="photo__gallery__wrapper">
                                <div className="photo__gallery__title">
                                    <p>ছবিঘর</p>
                                </div>

                                {
                                    PhotoData.map((val) => {
                                        return(
                                            <Photo 
                                                Img = {val.Img}
                                                Title = {val.Title}
                                                Caption = {val.Caption}
                                            />
                                        )
                                    })
                                }

                            </div>
                        </div>

                        {
                            LifestyleData.map((val) => {
                                return(
                                    <Lifestyle 
                                        Img = {val.Img}
                                        Title = {val.Title}
                                        Date = {val.Date}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoLifestyle

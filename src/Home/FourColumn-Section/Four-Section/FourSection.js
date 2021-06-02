
import React from 'react'
import FeaturedNews from './FeaturedNews'
import Item from './Item'
import FeaturedData from './FeaturedData'
import Data from './Data'

function FirstSection() {
    return (
        <>
            <div className="col-md-3">
                
                <div className="news__title">
                    <h2>বিনোদন</h2>
                    <div className="underline"></div>
                </div>

                <div className="six__column__container">
                    
                    {
                        FeaturedData.map((val) => {
                            return(
                                <FeaturedNews 
                                    Img = {val.Img}
                                    Title = {val.Title}
                                />
                            )
                        } )
                    }
                    
                    <div className="six__column__mini__wrapper">
                        
                        {
                            Data.map((val) => {
                                return(
                                    <Item 
                                        Img = {val.Img}
                                        Title = {val.Title}
                                    />
                                )
                            })
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default FirstSection

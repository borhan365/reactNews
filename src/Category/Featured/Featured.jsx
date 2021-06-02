
import React from 'react'
import FeaturedItem from './FeaturedItem'
import FeaturedData from './FeaturedData'

function FeaturedWrapper() {
    return (
        <>
            <div class="category__featured__wrapper">
                {
                    FeaturedData.map((val) => {
                        return(
                            <FeaturedItem 
                                Img = {val.Img}
                                Title = {val.Title}
                                Date = {val.Date}
                            />
                        )
                    })
                }
            </div>  
        </>
    )
}

export default FeaturedWrapper;

import React from 'react'
import RelatedItem from './RelatedItem'
import RelatedData from './RelatedData'

function RelatedPost() {
    return (
        <>
            <div class="single__related__post__wrapper">

                <div class="news__title">
                    <h2> আরো পড়ুন </h2>
                    <div class="underline"></div>
                </div>

                <div class="row">

                    {
                        RelatedData.map((val) => {
                            return(
                                <RelatedItem 
                                    Img = {val.Img}
                                    Title = {val.Title}                                
                                />
                            )
                        })
                    }

                </div>
            </div>   
        </>
    )
}

export default RelatedPost



import React from 'react'
import Data from './Data'
import SecondCard from './SecondCard'

function SecondSection() {
    return (
        <div>
            <section className="second__section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            {/* <!-- title --> */}
                            <div className="news__title">
                                <h2>জাতীয় খবর</h2>
                                <div className="underline"></div>
                            </div>

                            <div className="second__section__wrapper">

                                {
                                    Data.slice(0, 4).map((val) => {
                                        return(
                                            <SecondCard
                                                cardThumb={val.Thumbnail}
                                                title={val.Title}
                                                desc={val.Desc}
                                                date={val.Date}
                                            />
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SecondSection

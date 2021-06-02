
import React from 'react'
import Cover from './Cover'
import SecondCol from './SecondCol'
import ThirdCol from './ThirdCol'

import sideBar from '../../Common/Img/sidebar.jpg'

import Data from '../../Common/Data'

function Featured() {
    return (
        <div>

            <section class="hero__section">
                <div class="container">
                    <div class="row">

                        {/* <!-- cover news --> */}
                        <Cover />

                        {/* <!-- middle news --> */}
                        
                        <div className="col-md-3">
                            <div className="latest__news__title">
                                <h3>সর্বশেষ নিউজ</h3>
                            </div>
                            <div className="hero__mini__news__wrapper">
                                {
                                    Data.slice(0, 4).map((val) => {
                                        return(
                                            <SecondCol 

                                                key={val.id}
                                                title={val.title}
                                                thumb= {val.img}
                                                catTitle="Latest News"
                                            
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* right ads */}
                        <ThirdCol sideBar={sideBar} />

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Featured

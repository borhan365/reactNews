
import React from 'react'
import { Link } from 'react-router-dom'
import LatestPost from './Tabs/LatestPost'
import PopularPost from './Tabs/PopularPost'
import LatestData from './Tabs/LatestData'
import PopularData from './Tabs/PopularData'

function Tabs() {
    return (
        <>
            <div class="main__tab__wrapper">
                <div class="fourth__tab__title">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <Link class="nav-link active" id="pills-latest-tab" data-toggle="pill" href="#pills-latest" role="tab" aria-controls="pills-latest" aria-selected="true">সর্বশেষ</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" id="pills-popular-tab" data-toggle="pill" href="#pills-popular" role="tab" aria-controls="pills-popular" aria-selected="false">জনপ্রিয়</Link>
                        </li>
                    </ul>
                </div>
                <div class="fourth__tab__wrapper">                            
                    <div class="tab-content" id="pills-tabContent">

                        {
                            LatestData.map((val) => {
                                return(
                                    <LatestPost 
                                        Title = {val.Title}
                                    />
                                )
                            })
                        }

                        {
                            PopularData.map((val) => {
                                return(
                                    <PopularPost 
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

export default Tabs

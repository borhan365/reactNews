import React from 'react'
import { Link } from 'react-router-dom'

function PopularPost(props) {
    return (
        <>
           <div class="tab-pane fade" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">           
                <div class="fourth__content__area">
                    <ul>
                        <li><Link to="/single">{props.Title}</Link></li>
                    </ul>
                </div>
            </div> 
        </>
    )
}

export default PopularPost

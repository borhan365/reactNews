import React from 'react'
import { Link } from 'react-router-dom'

function Latest(props) {
    return (
        <>
            <div class="tab-pane fade show active" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">         
                <div class="fourth__content__area">
                    <ul>
                        <li><Link to="/single">{props.Title}</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Latest

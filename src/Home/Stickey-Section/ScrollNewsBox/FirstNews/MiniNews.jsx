
import React from 'react'
import { Link } from 'react-router-dom'


function MiniNews(props) {
    return (
        <>
            {/* <!-- item --> 3 */}
            <div className="middle__mini__box">
                
                {/* <!-- thumb --> */}
                <div className="middle__mini__thumb">
                    <img src={props.thumb} alt="thumb" />
                </div>

                {/* <!-- content --> */}
                <div className="middle__mini__content">
                    <Link to="/single">
                        <h3>{props.title}</h3>                                     
                    </Link>
                </div>
            </div> 
        </>
    )
}

export default MiniNews

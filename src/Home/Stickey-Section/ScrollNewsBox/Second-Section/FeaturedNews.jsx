
import React from 'react'
import { Link } from 'react-router-dom'



function FeaturedNews(props) {
    return (
        <>
           <div className="middle__cover__news__wrapper">

                {/* <!-- thumb --> */}
                <div className="middle__cover_thumb">
                    <img src={props.thumbnail} alt="featured images" />
                </div>

                {/* <!-- content --> */}
                <div className="middle__cover__content">
                    <Link to="/">
                        <h2>{props.title}</h2>
                        <p>{props.desc}</p>
                    </Link>
                </div>

            </div> 
        </>
    )
}

export default FeaturedNews


import React from 'react'
import { Link } from 'react-router-dom'

function FeaturedNews(props) {
    return (
        <>
            <div className="six__column__wrapper">

                <div className="six__thumb">
                    <img src={props.Img} alt={props.Title} />
                </div>

                <div className="six__column__content">
                    <Link to="single">
                        <h3>{props.Title}</h3>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default FeaturedNews

import React from 'react'
import { Link } from 'react-router-dom'

function Photo(props) {
    return (
        <>
            <div className="photo__gallery__box">
                <div className="photo__gallery__thumb">
                    <img src={props.Img} alt="" />
                </div>
                <div className="photo__gallery__content">
                    <Link to="/single">
                        <h2>{props.Title}</h2>
                        <small>{props.Caption}</small>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Photo

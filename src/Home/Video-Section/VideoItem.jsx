
import React from 'react'
import {Link} from 'react-router-dom'

function VideoItem(props) {

    return (
        <>
        <div className="video__section__box">
            <div className="video__thumb">
                <img src={props.Img} alt={props.Title} />
            </div>
            <div className="video__icon">
                <img src="assets/images/img/one.svg" alt="" />
            </div>
            <div className="video__content">
                <Link to="/single">
                    <h2>{props.Title}</h2>
                </Link>
            </div>
        </div>
        </>
    )
}

export default VideoItem;

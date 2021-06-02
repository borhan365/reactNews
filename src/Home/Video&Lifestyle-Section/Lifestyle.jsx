
import React from 'react'
import { Link } from 'react-router-dom'

function Lifestyle(props) {
    return (
        <>
            <div className="col-md-3">
                <div className="lifestyle__wrapper">

                    <div className="lifestyle__title">
                        <p>লাইফস্টাইল</p>
                    </div>

                    <div className="lifestyle__thumb">
                        <img src={props.Img} alt={props.Title} />
                    </div>

                    <div className="lifestyle__content">
                        <Link to="/single">
                            <h3>{props.Title}</h3>
                        </Link>
                        <p><i className="far fa-clock"></i> {props.Date} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lifestyle

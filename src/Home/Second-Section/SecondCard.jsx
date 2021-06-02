
import React from 'react'
import { Link } from 'react-router-dom'

function SecondCard(props) {
    return (
        <div>
            {/* <!-- item --> */}
            <div className="second__box">
                <div className="second__thumb">
                    <img src={props.cardThumb} alt="Iamage" />
                </div>
                <div className="second__content">
                    <Link to="/single">
                        <h2>{props.title}</h2>
                        <p className="second__section__para">{props.desc}</p>
                        <p>{props.date}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SecondCard

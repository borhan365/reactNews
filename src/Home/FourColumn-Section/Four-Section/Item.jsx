
import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
    return (
        <>
           <div className="six__column__mini__box">
                <div className="six__col__mini__thumb">
                    <img src={props.Img} alt={props.Title} />
                </div>
                <div className="six__mini__content">
                    <Link to="single">
                        <h3>{props.Title}</h3>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item

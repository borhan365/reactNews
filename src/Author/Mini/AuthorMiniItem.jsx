import React from 'react'
import { Link } from 'react-router-dom'

function MiniItem(props) {
    return (
        <>
            <div className="col-md-6">                    
                <div className="categoroy__box">
                    <div className="category__thumb">
                        <img src={props.Img} alt={props.Title} />
                    </div>
                    <div className="category__content">
                        <Link to="/single">
                            <h2>{props.Title}</h2>
                        </Link>
                        <div className="category__excerpt">
                            <p className="cat__date"><i className="far fa-clock" />{props.Date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniItem

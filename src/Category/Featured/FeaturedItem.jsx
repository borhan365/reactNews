
import React from 'react'
import { Link } from 'react-router-dom'

function FeaturedItem(props) {
    return (
        <>
            <div class="lifestyle__wrapper lifestyle__wrapper__cateogry">

                <div class="lifestyle__thumb lifestyle__thumb__category">
                    <Link to="/single">
                        <img src={props.Img} alt={props.Title} />
                    </Link>
                </div>

                <div class="lifestyle__content lifestyle__content__category">
                    <Link to="/single">
                    <h3>{props.Title}</h3>
                    </Link>
                    <p><i class="far fa-clock" />{props.Date}</p>
                </div>

            </div>  
        </>
    )
}

export default FeaturedItem

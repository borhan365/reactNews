import React from 'react'
import { Link } from 'react-router-dom'

function RelatedItem(props) {
    return (
        <>
           <div class="col-md-4">
                <div class="single__related__item">
                    
                    <div class="single__related__thumb">
                        <img src={props.Img} alt={props.Title} />
                    </div>
                    
                    <div class="single__related__content">
                        <Link to="/single">
                            <h2>{props.Title}</h2>
                        </Link>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default RelatedItem

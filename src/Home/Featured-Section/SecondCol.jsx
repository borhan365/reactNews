
import React from 'react'
import { Link } from 'react-router-dom'

function SecondColumn(props) {
    return (
        <>

            {/* <!-- latest news --> */}
            
                {/* <!-- item --> */}
                <div className="hero__mini__box">
                    
                    {/* <!-- thumb --> */}
                    <div className="hero__mini__thumb">
                        <img src={props.thumb} alt="thumb" />
                    </div>

                    {/* <!-- content --> */}
                    <div className="hero__mini__content">
                        <Link to="/single">
                            <h3>{props.title}</h3>                                        
                        </Link>
                    </div>
                </div>    
        </>
    )
}

export default SecondColumn
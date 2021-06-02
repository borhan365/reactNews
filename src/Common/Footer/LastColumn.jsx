import React from 'react'
import { Link } from 'react-router-dom'

function ThirdColumn() {
    return (
        <>
            <div className="col-md-4">
                <div className="footer__box">
                    <div className="footer__last__social footer__shadow">
                        <h2> আমাদের সাথে থাকুন </h2>
                        <ul>
                            <li><Link to="/"><i className="fab fa-facebook"></i></Link></li>
                            <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link to="/"><i className="fab fa-pinterest"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdColumn

import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="right__sidebar__footer">
                <h4>আমাদের সাথে থাকুন</h4>
                <ul>
                    <li><Link to="/"><i className="fab fa-facebook"></i></Link></li>
                    <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                    <li><Link to="/"><i className="fab fa-pinterest"></i></Link></li>
                    <li><Link to="/"><i className="fab fa-google-plus"></i></Link></li>
                </ul>
            </div>
        </>
    )
}

export default Footer

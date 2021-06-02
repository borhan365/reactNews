
import React from 'react' 

function ThirdCol(props) {
    return (
        <>
           <div className="col-md-3">

                <div className="sidebar__ads hero__sidebar__ads">
                    <img src={props.sideBar} className="img-fluid" alt="sidebar" />
                </div>

            </div> 
        </>
    )
}

export default ThirdCol

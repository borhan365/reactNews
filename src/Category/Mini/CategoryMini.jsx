import React from 'react'
import CategoryMiniItem from './CategoryMiniItem'
import CategoryMiniData from './CategoryMiniData'

function Mini() {
    return (
        <>
            <div className="row">

                {
                    CategoryMiniData.map((val) => {
                        return(
                            <CategoryMiniItem 
                                Img = {val.Img}
                                Title = {val.Title}
                                Date = {val.Date}
                            />
                        )
                    })
                }

            </div>
        </>
    )
}

export default Mini;



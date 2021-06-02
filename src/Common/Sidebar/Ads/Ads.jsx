import React from 'react'

const Img = "https://nagornews.com/wp-content/uploads/2021/05/photo_2021-02-25_13-18-59-229x300.jpg";

function Ads() {
    return (
        <>
            <div class="category__sidebar__ads">
                <img src={Img} class="img-fluid" alt="" />
            </div>
        </>
    )
}

export default Ads

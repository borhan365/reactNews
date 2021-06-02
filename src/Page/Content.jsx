import React from 'react'


function Content(props) {
    return (
        <>
           <section class="page__content__section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 mx-auto">
                            <div class="page__content__wrapper">
                                <p>{props.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default Content

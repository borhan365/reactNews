import React from 'react'

function Featured(props) {
    return (
        <>
            <section className="page__section">
                <div className="page__wrapper">
                    <div className="page__thumb">
                        <img src={props.img} alt={props.title} />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 mx-auto">
                                <div className="page__content">
                                    <div className="page__header__title">
                                        <h2>{props.title}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featured;

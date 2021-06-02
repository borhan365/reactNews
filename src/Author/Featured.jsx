import React from 'react'

function Featured() {
    return (
        <>
            <section className="author__main__section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="author__profile__social">
                                <div className="author__profile__wrapper">
                                    <div className="author__thumb">
                                        <img src="assets/images/img/author.png" alt="" />
                                    </div>
                                    <div className="author__content">
                                        <h5>জামাল উদ্দিন খান</h5>
                                    </div>
                                </div>
            
                                <div className="author__social__wrapper">
                                    <ul>
                                        <li><i className="fab fa-facebook"></i></li>
                                        <li><i className="fab fa-twitter"></i></li>
                                        <li><i className="fab fa-instagram"></i></li>
                                        <li><i className="fab fa-pinterest"></i></li>
                                        <li><i className="fab fa-google-plus"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featured

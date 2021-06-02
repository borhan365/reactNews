import React from 'react'
import Sidebar from '../Common/Sidebar/Sidebar'
import Content from './Content'
import RelatedPost from './RelatedPost'
import { Link } from 'react-router-dom'

function SingleBody() {
    return (
        <>
            <section className="single__main__section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-0"></div>
                        <div className="col-md-9">
                            <div className="single__page__wrapper">

                                {/* Title */}
                                <div className="single__news__title">
                                    <h1>ইউপি নির্বাচন : ২টার আগে ও ৮টার পরে মাইক বাজানো যাবে না</h1>
                                </div>

                                {/* Thumbnail */}
                                <div className="single__page__thumb">
                                    <img src="assets/images/photos/2.webp" alt="" />
                                </div>

                                {/* Excerpt */}
                                <div className="single__excerpt">
                                    <p className="single__date"><i className="far fa-clock"></i> প্রকাশিত : সোমবার, ১৫ মার্চ ২০২১ </p>
                                    <p className="single__author"><i className="fas fa-edit"></i> লিখেছেন: 
                                        <Link to="author">
                                            আবদুল জব্বর
                                        </Link>
                                    </p>
                                </div>

                                {/* Content */}
                                <Content />

                                {/* Related Posts */}
                                <RelatedPost />

                            </div>
                        </div>

                        <div className="col-md-3">
                            <Sidebar />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleBody

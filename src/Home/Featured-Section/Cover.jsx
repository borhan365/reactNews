
import React from 'react'
import { Link } from 'react-router-dom'
import thumb from '../../Common/Img/1.webp'

function CoverNews() {
    return (
        <>
            <div className="col-md-6">
                <div className="hero__cover__news__wrapper">

                    {/* <!-- thumb --> */}
                    <div className="hero__cover_thumb">
                        <img src={thumb} alt="Cover news" />
                    </div>

                    {/* <!-- content --> */}
                    <div className="hero__cover__content">
                        <Link to="/single">
                            <h2>ইউপি নির্বাচন : ২টার আগে ও ৮টার পরে মাইক বাজানো যাবে না</h2>
                            <p>কালের বিবর্তনে হারিয়ে যাচ্ছে দেশি প্রজাতির অনেক মাছ। বিলুপ্তপ্রায় এসব মাছ পাতে ফেরাতে দীর্ঘদিন ধরে কাজ করছে বাংলাদেশ মৎস্য গবেষণা ইনস্টিটিউট (বিএফআরআই)। </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoverNews;

import React from 'react'
import { Link } from 'react-router-dom'

function SecondColumn() {
    return (
        <>
            <div className="col-md-4">
                <div className="footer__box">
                    <div className="footer__company__bio footer__shadow">
                        <p>সম্পাদক : ইমদাদুল হক মিলন, ইস্ট ওয়েস্ট মিডিয়া গ্রুপ লিমিটেডের পক্ষে ময়নাল হোসেন চৌধুরী কর্তৃক প্রধান কার্যালয় : বারিধারা থেকে প্রকাশিত এবং প্লট-সি/৫২, ব্লক-কে, বসুন্ধরা</p>
                        <Link to="/page">আমাদের সম্পর্কে</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondColumn

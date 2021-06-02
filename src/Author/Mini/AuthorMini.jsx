import React from 'react'
import AuthorMiniItem from './AuthorMiniItem'
import AuthorMiniData from './AuthorMiniData'
import Sidebar from '../../Common/Sidebar/Sidebar'

function AuthorMini() {
    return (
        <>
            <section class="category__featured__section author__featured__section">
                <div class="container">
                    <div class="row">

                        <div class="col-md-1"></div>
                        <div class="col-md-8">

                            <div className="container">
                                <div className="row">
                                    {
                                        AuthorMiniData.map((val) => {
                                            return(
                                                <AuthorMiniItem 
                                                    Img = {val.Img}
                                                    Title = {val.Title}
                                                    Date = {val.Date}
                                                />
                                            )
                                        })
                                    }
                                </div>
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

export default AuthorMini;


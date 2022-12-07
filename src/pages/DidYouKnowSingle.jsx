import React from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../assets/white-logo.png'
import { Nav } from '../components';


const DidYouKnowSingle = () => {
    const location = useLocation()
    const detailsData = location?.state

    return (
        <div className="container">
            <Nav />
            <div className="didyouknow-container">
                <div className="didyouknow-container-inner">

                    <div className="firstddyNews-case">
                        <div className="firstddyNews-case-left" style={{
                            backgroundImage: `url(${detailsData?.urlToImage})`
                        }}>
                            <img src={logo} alt="" />
                        </div>
                        <div className="firstddyNews-case-right">

                            <h1>{detailsData?.title}</h1>

                        </div>
                    </div>
                    <div className="firstddyNews-case full-news-case">
                        <div className="firstddyNews-case-right">
                            <p>{detailsData.content}</p>

                            <span style={{ marginTop: '30px' }}>Author: {detailsData?.author}</span>
                            <span style={{ marginTop: '10px' }}>Source: {detailsData?.source.name}</span>
                            <span style={{ marginBottom: '30px' }}>Date Posted: {detailsData?.publishedAt}</span>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default DidYouKnowSingle
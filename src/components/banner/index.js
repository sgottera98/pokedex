import React from 'react'
import {isMobile} from 'react-device-detect'

const Banner = () => {
    return (
            <div className="banner">
                <h2 className="banner-title">Download the app now.</h2>
                {
                    !isMobile ? 
                    <>
                        <h4 className="banner-subtitle">Available on your favorite store. Start your premium experience now.</h4>
                        <div className="banners-buttons">
                            <button className="button-playstore-buy">Playstore</button>
                            <button className="button-apple-try">App Store</button>

                        </div>
                    </>
                    :
                    <>
                        <h4 className="banner-subtitle">Most calendars are <br></br>designed for teams. </h4>
                        <div className="banners-buttons">
                            <button className="button-playstore-buy">Buy now</button>
                            <button className="button-apple-try">Try for free</button>

                        </div>
                    </>
                }
            </div>
    )
}

export default Banner
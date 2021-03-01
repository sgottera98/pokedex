import React from 'react'

import Smartphone from '../../../assets/images/food-menu.png'

const ThirdSection = () => {
    return (
        <section>
            <div className="third-section">
                <div className="wrap-section-text">
                    <h3 className="section-subtitle">Explore varieties</h3>
                    <h2 className="section-title">Shop for your favorites meal as e dey hot.</h2>
                    <h4 className="section-description">Shop for your favorite meals or drinks and enjoy while doing it.</h4>
                </div>
                <div className="image-section">
                    <img src={Smartphone} alt="Smartphone com aplicação em tela"></img>
                </div>
            </div>
        </section>
    )
}

export default ThirdSection
import React from 'react'

import Smartphone from '../../../assets/images/login.png'

const SecondSection = () => {
    return (
        <section >
            <div className="second-section">
                <div className="wrap-section-text">
                    <h3 className="section-subtitle">Create an account</h3>
                    <h2 className="section-title">Create/login to an existing account to get started</h2>
                    <h4 className="section-description">An account is created with your email and a desired password</h4>
                </div>
                <div className="image-section">
                    <img src={Smartphone} alt="Smartphone com aplicação em tela"></img>
                </div>
            </div>
        </section>
    )
}

export default SecondSection
import React from 'react';

import Smartphones from '../../../assets/images/Smartphones.png';


const FirstSection = () => {
    return (
        <section >
            <div className="first-section">
                <div className="smartphones-first-section">
                    <img src={Smartphones} alt="Smartphone reproduzindo aplicativo Bella Olonje" />
                </div>
                <div className="title-first-section">
                    <h2>How the app works</h2>
                </div>
            </div>
        </section>
    )
}

export default FirstSection
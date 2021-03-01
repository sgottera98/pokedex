import React from 'react'

const Header = ({navHeight}) => {
  
  const convertPXToVW = (px) => {
    let vh = (768 * 0.01) * 1;
    return (px / vh) * 1;
  }

  return (
    <header style={{height: `calc(100vh - ${convertPXToVW(navHeight)}vh)`}}>
      <div className="container">
        <div className="wrap-header-content">
          <span className="header-title">Food app</span>
          <h1 className="supertitle">Why stay hungry when <br></br>you can order form Bella Onojie</h1>
          <span className="header-subtitle">Download the bella onoje’s food app now on</span>
          <div className="wrap-header-button"> 
            <button className="button-playstore">Playstore</button>
            <button className="button-apple-store">Apple Store</button>
          </div>
        </div>
      </div> 
    </header>
  )
}

export default Header
import React from 'react';
import './LandingPageSubscribe.css';
import LandingAirplane from "/src/assets/LandingAction.png";
const Subscription = () => {

    const styles = {
    width: "623px",
    height: "417px",
    backgroundImage: `url(${LandingAirplane})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}
    return(
    <div className="containerr">
      <div style={styles}></div>
      <div className="content-wrapper">
        <div className="subscription-box">
          <h1>Subscribe to our Newsletter</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Turpis lectus maecenas ac cras interdum
            congue. Aliquam posuere tellus ac volutpat arcu nunc sapien platea. Venenatis
            nec eget scelerisque mattis facilisi auctor. Proin gravida elementum magna arcu urna..</p>
        </div>
          <form className="subscription-form">
            <input className='input-field' type="email" name="email" placeholder="Email Address" />
            <button className="btn1" type="submit">Subscribe</button>
          </form>
      </div>
    </div>
  );
}
export default Subscription; 
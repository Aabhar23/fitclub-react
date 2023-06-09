import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";



const Hero = () => {
  return (
   <div className="hero">
    <div className="left-h">

        <Header/>

        {/*the best ad*/}
        <div className="the-best-ad">   
        <span>The best fitness club in town</span>
        </div>

{/*hero headeing*/}
        <div className="header-text">
            <div>
            <span className='stroke-text'>Shape </span>
            <span>your</span>
            </div>
            <div>
            <span>ideal body</span>
            </div>
            <div >
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
        </div>

    {/*figures*/}
    <div className="figures">
      <div>
        <span>+140</span>
        <span>expert coaches</span>
      </div>
      <div>
        <span>+978</span>
        <span>members joined</span>
      </div>
      <div>
        <span>+50</span>
        <span>fitness programs</span>
      </div>
    </div>

    {/*hero buttons*/}
    <div className="hero-buttons">
      <button className='btn'>Get Started</button>
      <button className='btn'>Learn More</button>
    </div>

        
    </div>
    <div className="right-h">
    <button className='btn'>Join now</button>
    <div className="heart-rate">
      <img src={Heart} alt="" />
      <span>Heart</span>
      <span>116 bpm</span>
    </div>

    {/*hero images*/}
    <img src={hero_image} alt="" className='hero-image'/>
    </div>
   </div>
  );
};

export default Hero;
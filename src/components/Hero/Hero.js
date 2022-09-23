import React from 'react';
import './hero.css';
import { Typewriter } from 'react-simple-typewriter';
import javascript from '../../assets/images/javascript.svg';
import react from '../../assets/images/react.png';
import rails from '../../assets/images/ruby-on-rails.svg';
import men from '../../assets/images/men.jpg';

const Hero = () => (
  <>
    <section className="hero" id="home">
      <div className="container f_flex top">
        <div className="left top" data-aos="slide-left" >
          <h3>WELCOME TO MY WORLD</h3>
          <h1>
            Hi, I'm
            <span> Sentayhu Berhanu</span>
          </h1>
          <h2>
            <span>
              <Typewriter
                words={['Professional Coder', 'Devloper']}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p>
           I graduated from the Unity University with a Bachelor of Science in Computer Science with Honor and from Microverse as full-stack web devloper. I have been working as a full-stack developer. I am passionate about building scalable web applications and I am always looking for new challenges.
          </p>
          <div className="hero_btn d_flex">
            <div className="col_1">
              <h4>LETS CONNECT</h4>
              <div className="button">
                <button type="button" className="btn_shadow">
                  <i className="fab fa-facebook-f" />
                </button>
                <button type="button" className="btn_shadow">
                  <i className="fab fa-instagram" />
                </button>
                <button type="button" className="btn_shadow">
                  <i className="fab fa-linkedin-in" />
                </button>
              </div>
            </div>
            <div className="col_1">
              <h4>BEST SKILL ON </h4>
              <button type="button" className="btn_shadow">
                <img src={javascript} alt="skil" />
              </button>
              <button type="button" className="btn_shadow">
                <img src={react} alt="skil" />
              </button>
              <button type="button" className="btn_shadow">
                <img src={rails} alt="skil" />
              </button>
            </div>
          </div>
        </div>
        <div className="right" data-aos="slide-right" >
          <div className="right_img">
            <img src={men} alt="person-img" />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;

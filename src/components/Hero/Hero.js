import React from 'react'
import './Hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';
import { motion } from 'framer-motion';

const Hero = () => {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false

    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />

                {/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "165px" : "238px" }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transition, type: "tween" }}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero Heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span><span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div >
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* figures */}
                <div className='figures'>
                    <div>
                        <span>
                            <NumberCounter
                                start={100}
                                end={140}
                                delay="3"
                                preFix="+"
                            />
                        </span>
                        <span>Expert Coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter
                                start={800}
                                end={978}
                                delay="3"
                                preFix="+"
                            />
                        </span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter
                                start={10}
                                end={50}
                                delay="1.5"
                                preFix="+"
                            />
                        </span>
                        <span>Fitness Programs</span>
                    </div>
                </div>

                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>

            </div>

            <div className="right-h">

                <button className='btn'>Join Now</button>

                <motion.div
                    className='heart-rate'
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                >
                    <img src={Heart} alt="heart-icon" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero images */}
                <img src={hero_image} alt="hero" className='hero-image' />
                <motion.img
                    src={hero_image_back}
                    alt="hero-back"
                    className='hero-image-back'
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                />

                {/* Calories */}
                <motion.div
                    className="calories"
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                >
                    <img src={Calories} alt="calories" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Hero
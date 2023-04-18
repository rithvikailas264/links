import React from 'react';
import "./About.css";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = "https://media.licdn.com/dms/image/D4D03AQGARZ-g693Zbg/profile-displayphoto-shrink_800_800/0/1670054133251?e=2147483647&v=beta&t=bkm5UMutpcC42fOIxhmy4_h-JzWY9pNvXek1QFgblsA" alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Rithvikailas</h2>
            <p className='fs-17'>Hello! I am Rithvikailas, a multifaceted individual with a passion for exploring and experiencing life. I was born and raised in Salem,Tamil Nadu and have ventured into various roles and environments that have shaped me into the person I am today. I am driven by curiosity, creativity, and a zest for learning, and I am always eager to embark on new adventures and make meaningful connections with others.</p>
            <p className='fs-17'>Beyond my pursuits, I am a firm believer in the importance of personal growth, self-reflection, and continuous improvement. I value integrity, empathy, and authenticity in my interactions with others, and strive to make a positive impact on the world around me.I am excited to share my stories, insights, and perspectives with you, and I look forward to connecting with like-minded individuals who share similar passions and aspirations. Thank you for taking the time to get to know a little bit about me!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

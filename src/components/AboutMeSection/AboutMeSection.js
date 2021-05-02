import React from 'react';
import AboutMe from '../Home/AboutMe/AboutMe';
import AboutMeHeder from '../Home/AboutMe/AboutMeHeder';
import Footer from '../Home/footer/Footer';

const AboutMeSection = () => {
    return (
       <section>
           <AboutMeHeder></AboutMeHeder>
           <AboutMe></AboutMe>
           <Footer></Footer>
       </section>
    );
};

export default AboutMeSection;
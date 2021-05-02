import React from 'react';
import ContactMe from '../ContactMe/ContactMe';
import Herader from '../Header/Herader';
import Projects from '../projects/Projects';
import AboutMe from './../AboutMe/AboutMe';
import Blog from './../Blog/Blog';
import Footer from './../footer/Footer';

const Home = () => {
    return (
        <div>
             
            <Herader></Herader>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Blog></Blog>
            <ContactMe></ContactMe>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;
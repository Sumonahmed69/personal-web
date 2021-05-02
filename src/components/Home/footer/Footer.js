import React from 'react';
import google from '../../../images/google.png';
import gitHub from '../../../images/github.png';
import linkedin from '../../../images/linkedin.png';
import twitter from '../../../images/twitter.png';

const Footer = () => {
    return (
        <footer style={{background: "linear-gradient(90deg,#24243e,#302b63,#0f0c29)"}} className='pt-3 pb-1'>
            <h2 className="text-center my-3 text-white"> Find Me On</h2>
            <div className="d-flex justify-content-center ">
                <a href=" https://github.com/Sumonahmed69" target="_blank"> <img className='ms-2' style={{height: '50px'}} src={gitHub} alt=""/></a>
                <a  href="https://www.linkedin.com/in/sumon-ahmed-b346341aa/" target="_blank"> <img className='ms-2' style={{height: '50px'}} src={linkedin} alt=""/></a>
                <a href="#"> <img className='ms-2' style={{height: '50px'}} src={twitter} alt=""/></a>
                <a href=" mailto: sumonahmed012340@gmail.com"> <img className='ms-2' style={{height: '50px'}} src={google} alt=""/></a>
               
            </div>
            
            <div className="copyRight text-white text-center mt-3">
                    <p>Copyright ©{(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
        </footer>
    );
};

export default Footer;
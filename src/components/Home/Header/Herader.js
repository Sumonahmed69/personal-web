import React from 'react';
import ParticleBackground from './../../Particles-js/ParticleBackground';
import img from '../../../images/IMG_20210314_225350-removebg-preview (1).png';


const Herader = () => {
    return (
        <section style={{background: "linear-gradient(to right, #283c86, #45a247)"}} >
           {/* <Navbar></Navbar> */}
             <ParticleBackground />
             <CenterTitle />
           
        </section>
    );
};

function CenterTitle() {
    return (
      <div  className='center_all mt-5 pt-5 row '>
        
        <div className=" col-md-6">
          <h1>Particle JS Intfgjfgsgsfh </h1>
        </div>
        <div  className=" col-md-6">
            <img style={{height: "350px", width: '350px'}} className="rounded img-fluid"  src={img} alt=""/>
         
        </div>
        
      </div>
    );
  }


export default Herader;
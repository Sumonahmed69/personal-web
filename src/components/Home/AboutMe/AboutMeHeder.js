import React from 'react';
import bg from '../../../images/bg.jpg'
import img from '../../../images/sumonCV.jpg'

const AboutMeHeder = () => {
    return (
        <div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">

                    <img src={bg} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <img style={{height: "100px", width: '100px'}} className='img-fluid rounded-circle' src={img} alt=""/>
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AboutMeHeder;
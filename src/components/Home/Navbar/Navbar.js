import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/admin-settings-male.png'

const Navbar = () => {
    return (
        <div class=" container ">
            <nav class="navbar  navbar-expand-lg bg-dark navbar-light fixed-top">
                <div class="container-fluid">
                    <Link class="navbar-brand text-white mx-5 px-5" to="/"><img style={{height: '40px'}} src={img} alt=""/> Md. Sumon</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link ms-4 text-white " aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-4 text-white" to="/project">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-4 text-white" to="/blog">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-4 text-white" to="/about">About Me</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-4 text-white" to="/contact">Contact Me</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-4 text-white" target="_blank" href="https://drive.google.com/file/d/1GESYHkFy-Ph7YoUwgt_iCYgpPY61XZyC/view?usp=sharing"> Get Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Navbar;
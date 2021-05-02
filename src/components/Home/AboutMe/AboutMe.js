import React from 'react';

const AboutMe = () => {
    return (
        <section style={{ background: '#222f3e' }} className=' py-5' >
            <div className='container '>
                <h1 className="text-center text-white "> About Me</h1>
                <h5 className="mt-5 text-white"> A Front End Web Developer using React, Node.js, MongoDB, Express (MERN). Experienced in building single page applications, User Auth and oAuth with Firebase. Common libraries of use: Redux, Express, body-parser, react-router. Common use of UI libraries: Bootstrap 4, React-Bootstrap, Material-UI, Ant Design.</h5>
                <button type="button" className="  my-5  mx-auto d-block btn btn-primary">Know more</button>
            </div>
        </section>
    );
};

export default AboutMe;
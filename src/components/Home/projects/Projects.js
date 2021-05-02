import React from 'react';
import ProjectsData from './ProjectsData';
import covid from '../../../images/covid.jpg';
import fly from '../../../images/fly.jpg';
import foodpanda from '../../../images/foodpanda.jpg';

const Projects = () => {

    const projectsData = [

        {

            name: 'Covid-19 BD',
            img: covid,
            tech: 'React firebase MongoDB',
            live: 'live ',
            repo: 'repo ',
            info: ' Full-Stack Developer MERN stack app where a user creates an account and can add foods to his cart. Then he can place an order if he is signed in. He can pay as well using the Stripe payment gateway. His order details will be kept in the Mongo database. Authentication with firebase.'
        },
        {

            name: 'Flight-Booking',
            img: fly,
            tech: 'JavaScript ',
            live: 'live ',
            repo: 'repo ',
            info: '“Testing has been since the beginning of the pandemic key to scale-up diagnostic confirmation of COVID-19 cases and to initiate a timely response against the virus.”'
        },
        {

            name: 'Footpanda',
            img: foodpanda,
            tech: 'HTML Bootstrap',
            live: 'live ',
            repo: 'repo ',
            info: 'The Bangladesh Police have launched an app and started taking applications for movement passes that will allow citizens to stay outside for up to three hours during the strict nationwide lockdown from April 14 to April 21.'
        }
    ]








    return (
        <div className='my-5' >
            <h1 className='text-center my-5 '>Recent Projects</h1>

            <div className=' d-flex justify-content-center'>

                <div className=' row container mt-5'>

                    {
                        projectsData.map(data => <ProjectsData data={data} key={data.name}></ProjectsData>)
                    }

                </div>

            </div>

            

        </div>
    );
};

export default Projects;
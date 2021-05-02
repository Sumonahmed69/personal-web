import React from 'react';

const ProjectsData = ({ data }) => {
    return (

        <div class="card col-md-3  ms-3" style={{width: "18rem"}}>
            <img src={data.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{data.name} </h5>
                    <p class="card-text">{data.info}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{data.tech}</li>                    
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">{data.live}</a>
                    <a href="#" class="card-link">{data.repo}</a>
                </div>
        </div>








        // <div className='col-md-4 text-center'>

                //     <br /> <br />
        //     <img style={{ height: "100px", borderRadius: '10px' }} src={data.img} alt="" /> <br />
        //     <h6 className='text-success mt-3 mb-3'>{data.name}</h6> <br />
        //     <p className='text-secondary'>{data.info}</p>











        // </div>
    );
};

export default ProjectsData;
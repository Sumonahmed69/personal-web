import React from 'react';

const BlogData = ({ data }) => {
    return (
        <div className='col-md-4 text-center'>

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{data.name}t</h5>
                    <p class="card-text">{data.info}</p>
                    <a href="#" class="btn btn-primary">READ More</a>
                </div>
            </div>

            {/* <br /> <br />
            <img style={{ height: "100px", borderRadius: '10px' }} src={data.img} alt="" /> <br />
            <h6 className='text-success mt-3 mb-3'>{data.name}</h6> <br />
            <p className='text-secondary'>{data.info}</p> */}


        </div>
    );
};

export default BlogData;
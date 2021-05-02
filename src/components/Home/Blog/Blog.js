import React from 'react';
import BlogData from './BlogData';

const Blog = () => {


    const BlogsData = [

        {

            name: '10 Front End Interview Questions that you might face in Interview',
            img: 'vaccine',
            info: 'You might have taken pretty decent preparation for your front end interview, but all of a sudden you discover...'
        },
        {

            name: 'Top 50 CSS Interview Questions & Answers',
            img: 'test',
            info: 'If you’re on your way to an interview for any role like front end developer or web content editor, you can be pretty confident that they...'
        },
        {

            name: '10 JavaScript coding challenges that you might face in Interview',
            img: 'movementPass',
            info: 'Different interviewers follow different approaches while interviewing. Some of them might present some coding challenges...'
        }
    ]



    return (
        <section className='my-5'>
            <h1 className="text-center"> Recent Blogs</h1>

            <div className=' d-flex justify-content-center'>

                <div className=' row w-75 mt-5'>

                    {
                        BlogsData.map(data => <BlogData data={data} key={data.name}></BlogData>)
                    }

                </div>

            </div>
        </section>
    );
};

export default Blog;
import React from 'react';

const ContactMe = () => {
    return (
        <footer style={{background: '#222f3e'}} className=' py-5'>
        <div  className='container my-5'>


            
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="text-white form-label">Your Good Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput2"  />
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="text-white form-label ">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="text-white form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
                <button type="submit" class="btn btn-primary">Submit</button>
            
        </div>
        </footer>
    );
};

export default ContactMe;
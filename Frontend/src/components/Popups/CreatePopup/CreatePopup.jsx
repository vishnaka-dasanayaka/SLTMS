import React, {useState} from 'react';
import axios from "axios";
import {url} from '../../../config';

function CreatePopup(props) {

    const [input, setInput] = useState({
        courseID: '',
        category: '',
        subject: '',
        courseTitle: '',
        fee: '',
        desc: ''
    });

    function handleChange(event){
        const {name,value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const newResult = {
            courseID: input.courseID,
            category: input.category,
            subject: input.subject,
            courseTitle: input.courseTitle,
            fee: input.fee,
            desc: input.desc
        }

        axios.post(`${url}/create-course`, newResult);
        alert("Succesfully added to the database");
        window.location.reload();
    } 

    return (props.createTrigger)?(
    <div className=''>
      <div className='z-1 fixed top-0 left-0 w-full h-[100vh] bg-black/20 flex justify-center items-center'>
        <div className='top-0 px-10 left-0 w-[400px] bg-[#0e2d2b] h-[550px] rounded-2xl'>
            
            <h1 className='mt-5 text-2xl font-extrabold tracking-widest text-center text-white uppercase'>create a course</h1>

            <form className='mt-5' action="">
            <label className='pr-16 tracking-wide text-white' htmlFor="">Course ID</label>
                <br />
                <input onChange={handleChange} className='w-full mb-2 rounded-lg opacity-70' type="text" name="courseID" value={input.courseID} autoComplete='off' placeholder='course number' />
                <br />
                
                <label className='pr-16 tracking-wide text-white' htmlFor="">Category</label>
                <br />
                <input onChange={handleChange} name="category" value={input.category} autoComplete='off' placeholder='select category' className='w-full mb-2 rounded-lg opacity-70' type="text" />
                <br />

                <label className='pr-16 tracking-wide text-white' htmlFor="">Subject</label>
                <br />
                <input onChange={handleChange} name="subject" value={input.subject} autoComplete='off' placeholder='subject' className='w-full mb-2 rounded-lg opacity-70' type="text" />
                <br />

                <label className='pr-16 tracking-wide text-white' htmlFor="">Course Title</label>
                <br />
                <input onChange={handleChange} name="courseTitle" value={input.courseTitle} autoComplete='off' placeholder='course title' className='w-full mb-2 rounded-lg opacity-70' type="text"/>
                <br />

                <label className='pr-16 tracking-wide text-white' htmlFor="">Fee</label>
                <br />
                <input onChange={handleChange} name="fee" value={input.fee} autoComplete='off' placeholder='course fee' className='w-full mb-2 rounded-lg opacity-70' type="text"/>
                <br />

                <label className='pr-16 tracking-wide text-white' htmlFor="">Description</label>
                <br />
                <input onChange={handleChange} name="desc" value={input.desc} autoComplete='off' placeholder='course description' className='w-full h-24 mb-2 rounded-lg opacity-70' type="text"/>
                <br />

                <div
                 className='flex justify-center'>

                    <button
                    onClick={handleClick} 
                    className='
                    mx-5
                    font-bold
                    tracking-wider
                    mt-5
                    uppercase
                    bg-[#40908b]
                    text-white
                    py-1
                    px-5
                    rounded-xl
                    hover:bg-white
                    hover:text-[#40908b]
                    '
                    >submit</button>

<button
                    className='
                    mx-5
                    font-bold
                    tracking-wider
                    mt-5
                    uppercase
                    bg-[#40908b]
                    text-white
                    py-1
                    px-5
                    rounded-xl
                    hover:bg-white
                    hover:text-[#40908b]
                    '
                    onClick={() => {props.setCreateTrigger(false)}}
                    >cancel</button>

                </div>
            </form>

        </div>
      </div>
    </div>
  ):""
}

export default CreatePopup

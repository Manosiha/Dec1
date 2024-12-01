import React from 'react'
import "./Biodata.css"
const Biodata = () => {
  return (
    <div>
      <div className='biodata-main'>
        <h2>BIODATA</h2>
        <form className='biodata-form'>
            {/* <span>Profile Picture</span> */}
            <div className='biodata-sub'>
                <div><span>First Name:</span></div>
               <div> <input 
                type='text'
                className='biodata-input'/></div>
            </div>
            <div className='biodata-sub'>
                <div><span>Last Name:</span></div>
                <div> <input 
                type='text'
                className='biodata-input'/></div>
            </div>
            <div className='biodata-sub'>
                <div><span>Email ID:</span></div>
                <div> <input 
                type='email'
                className='biodata-input'/></div>
            </div>
            <div className='biodata-sub'>
                <div><span>Mobile No:</span></div>
                <div> <input 
                type='integer'
                className='biodata-input'/></div>
            </div>
            <div className='biodata-sub'>
                <div><span>Address:</span></div>
                <div> <input 
                type='text'
                className='biodata-input'/></div>
            </div>
            <div className='biodata-sub'>
                <div><span>Gender:</span></div>
                <div><input
                    type='radio'
                    name='Male'
                    value="male"/>Male
                </div>
                <div><input
                    type='radio'
                    name='Male'
                    value="female"/>Female</div>
            </div>
            <div className='biodata-sub'>
                <div><span>Nationality:</span></div>
                <div> <input 
                type='text'
                className='biodata-input'/></div>
            </div>
            <div className='biodata-sub'>
                <div><span>Date Of Birth:</span></div>
                <div> <input 
                type='date'
                className='biodata-input'/></div>
            </div>
            <div className='biodata-sub'>
                <div><span>Education:</span></div>
                <div> <input 
                type='text'
                className='biodata-input'/></div>
            </div>
            <div className='biodata-sub'>
                <button className='biodata-button2'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Biodata

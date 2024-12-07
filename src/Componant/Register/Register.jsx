import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='main_register_page'>
     

        <div className='main_left'>
            <h2>INFORMATION- -1</h2>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro ipsum fuga illo consequatur aperiam libero eius quod, earum eum recusandae eveniet ut incidunt sapiente</p> <p> consectetur quasi numquam commodi cumque?</p>
            <button>Have An Account</button>
            </div>

       
        <div className='main_right'>
            <div className='rightside_div_main'>
                <h2>REGISTER FORM</h2>
                <form>
                <div className='left'><lable>User Name: </lable></div>

               <div className='right'> <input type='text'></input></div>
                <div className='left'><lable>UserEmail: </lable></div>
                <div className='right'> <input type='text'></input></div>
                <div className='left'><lable>Password: </lable></div>
                <div className='right'> <input type='password'></input></div>
                <div className='left'><lable> Confirm Password: </lable></div>
                <div className='right'> <input type='password'></input></div>

                <button>Register</button></form>
            </div>
        </div>
      
    </div>
  )
}

export default Register

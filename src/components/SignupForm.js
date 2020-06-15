import React from 'react'

class SignupFrom extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input type='text' name='name' placeholder='name'/>
                    <input type='email' name='email' placeholder='email' />
                    <input type='number' name='contact_no' placeholder="contact number" />
                    <input type='text' name='city' placeholder='city' />
                    <input type='password' name='password' placeholder='password' />
                    <button>SignUp</button>
                </form>
            </div>
        )
    }
}

export default SignupFrom
import React from 'react'

class LoginFrom extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input name="email" type="email" placeholder="email" />
                    <input name="password" type="password" placeholder="password" />
                    <button>Login</button>
                </form>
                
            </div>
        )
    }
}


export default LoginFrom
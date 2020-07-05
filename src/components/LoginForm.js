import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import {LoadingComponened10} from './others/LoadingPage'

class LoginFrom extends React.Component{

    state = {}
    componentDidMount = () =>{
        const token = document.cookie.includes('token')
        if(token){
            this.setState({login_message:'successful'})
            
        }
    }
    onEmailChange = (e) =>{
        const email = e.target.value
        this.setState({email})
    }
    onPasswordChange = (e) =>{
        const password = e.target.value
        this.setState({password})
    }
    onSubmit = async(e) =>{
        e.preventDefault()
        this.setState({login_error:''})
        this.setState({button:'clicked'})
        const response = await axios({
            url:'/user/login',
            method:'post',
            data: this.state
        })
        console.log(response.data)
        if(response.data.authentication==='loggedin'){
            const login_error = response.data.error
            const login_message = response.data.error 
            this.setState({login_error,login_message})
            this.props.dispatch({
                type:'USER',
                user:response.data
            })
        }
        if(response.data.error){
            this.setState({login_error:response.data.error})
        }

    }
    render(){
        return(
            <div className='form'>
                <form onSubmit={this.onSubmit}>
                    <input 
                        name="email" 
                        type="email" 
                        placeholder="email"
                        onChange={this.onEmailChange} 
                        className='input'
                    />
                    <input 
                        name="password" 
                        type="password" 
                        placeholder="password" 
                        onChange={this.onPasswordChange}
                    />
                    {(()=>{
                        if(this.props.user.user.authentication==='loggedin')
                            return <Redirect to='/user/dashboard' />
                        else if(this.state.login_error)
                        return <p className='error'>{this.state.login_error}</p>
                    })()}
                    <button className='submit-button'>
                        {this.state.button==='clicked'?<LoadingComponened10 />: <p>Login</p>  } 
                    </button>
                    
                </form>
                
            </div>
        )
    }
}
const mapstateToprops = (state)=>{
    return{
        user:state.user
    }
} 

export default  connect(mapstateToprops)(LoginFrom)
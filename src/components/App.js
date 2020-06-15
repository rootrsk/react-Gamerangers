import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './Header'
import Help from './Help'
import Login from './Login'
import Signup from './Signup'
import Error404 from './Error404'


const App = () =>(

    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' exact={true}/>
                <Route path='/help'  component={Help} />
                <Route path="/login" component={Login} /> 
                <Route path="/signup" component={Signup} />
                <Route component ={Error404} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default App
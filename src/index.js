import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import store from './store/store'



import { Provider } from 'react-redux'

const Apps = ()=>{
    return(
        <div>
            <Provider store={store}>
                <App />
            </Provider>
        </div>
    )
}

ReactDom.render(<Apps />,document.getElementById('root'))
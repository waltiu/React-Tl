import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import store from './store/index'
import { Provider } from 'react-redux'
import Test from './pages/test'

class App extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return ( 
            <Provider store={store}>
                <Test></Test>
            </Provider> )
    }
}

ReactDOM.render(<App /> , document.getElementById('root'))

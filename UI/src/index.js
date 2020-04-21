import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import storeConfig from './store/index'
import { Provider } from 'react-redux'
import Test from './pages/test'

class App extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        const store =storeConfig(
            {
                name:1
            }
        )
        console.log(store)
        return ( 
            <Provider store={store}>
                <Test></Test>
            </Provider> )
    }
}

ReactDOM.render(<App /> , document.getElementById('root'))

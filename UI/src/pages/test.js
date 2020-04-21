import React from 'react';
import { connect } from 'react-redux';
import globalType from '../types/global'
import globalAction from '../actions/global'
import { bindActionCreators } from 'redux';

class Test extends React.Component {
    constructor() {
        super();
    }
    test=()=>{
        const getConfig=this.props.actions.getBaseConfig
        getConfig(123)
    }
    render(){
        console.log(this.props.testInfo,9999)
        return(
            <div>
                <button onClick={this.test}>测试</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        testInfo: state
    };
};

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch,'0000')
    return {
        actions:bindActionCreators({
            ...globalAction
        },dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps,undefined,undefined)(Test);
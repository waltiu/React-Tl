import React from 'react';
class Test extends React.Component {
    constructor() {
        super();
    }
    test=()=>{
        console.log(this.props)
    }
    render(){
        console.log(this.props)
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
    return {
        onTodoClick: id => {
            dispatch({
                type: TEST_INFO,
                data: id
            });
          }
    }
};
export default connect(mapStateToProps, mapDispatchToProps, undefined, { withRef: true })(Test);
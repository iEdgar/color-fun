import React, {Component} from 'react';
import Box from '../Components/Box'
import {connect} from 'react-redux';
import * as actionsCreators from '../Actions/index';

class BoxContainer extends Component{
    render(){
        return(
            <Box handleClick={this.props.loadColor} color={this.props.color}/>
        );
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionsCreators)(BoxContainer); 
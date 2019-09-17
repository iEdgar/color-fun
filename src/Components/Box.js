import React, {Component} from 'react';

class Box extends Component{
    render(){
        return(
            <div className="wrapper">
                <div style={{
                    backgroundColor: `${this.props.color}`
                    }}
                    className="App">
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                     <button type="button" className="btn btn-primary" onClick={()=>{this.props.handleClick()}}>Change Color</button>
                     <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        );
    }
}

export default Box;
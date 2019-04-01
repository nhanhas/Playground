import React, { Component } from 'react';
import './CustomInput.scss';

class CustomInput extends Component {
    /* Constructor */
    constructor(props){
        super(props);

        //#1 - Initialize state
        this.state = { model: this.props.model};

        //#2 - bind funtions
        this.handleChange = this.handleChange.bind(this);
    }

    //#A - On change input model
    handleChange(event){
        this.setState({model: event.target.value}, ()=>{
            /* It is guaranteed that value is updated */
            this.props.onModelChange(this.props.name, this.state.model);
        });        
    }

    
    render() {
        return (
            <div className="CustomInput">
                <input 
                    type="text" 
                    placeholder={this.props.label}
                    value={this.state.model} 
                    onChange={this.handleChange}></input>
            </div>
        );
    }
}

export default CustomInput;
/**
 * Properties of component:
 * name (string)
 * model (var)
 * label (string)
 * onChange (function)
 */

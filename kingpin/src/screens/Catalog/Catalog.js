import React, { Component } from 'react';
import './Catalog.scss';
import CustomInput from '../../components/CustomInput/CustomInput';

class Catalog extends Component {
    constructor(props){
        super(props);   



        //CustomInput
        this.state = { inputModel: '' };
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    //#CustomInput
    handleChangeInput(inputId, value){
        this.setState({
            [inputId] : value
        }, ()=>{console.log('CustomInput with name(id):', inputId, 'changed to:',this.state[inputId])});
    }


  render() {
    return (
     <div className="Catalog">
        <h3>This will be Our Catalog of Components</h3>
        <hr></hr>
        
        {/* Custom Input */}
        <label>CustomInput</label>
        <CustomInput name='inputModel' 
                    model={this.state.inputModel} 
                    label='myField' 
                    onModelChange={this.handleChangeInput}></CustomInput>

     </div>
    );
  }
}

export default Catalog;

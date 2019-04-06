import React, { Component } from 'react';
import './ClientInfo.scss';



class ClientInfo extends Component {
    constructor(props){
        super(props);   

        this.state = { clients : [] };

        const {params} = this.props.match;

        console.log(params); 
    }



  render() {
    return (
      <h1>Ola!</h1>
    );
  }
}

export default ClientInfo;

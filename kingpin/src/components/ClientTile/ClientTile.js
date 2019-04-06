import React, { Component } from 'react';
import './ClientTile.scss';

class ClientTile extends Component {
    /* Constructor */
    constructor(props){
        super(props);

        //#1 - Initialize state
        this.state = { model: this.props.client};

       
    }

   
    
    render() {
        return (
            <div className="ClientTile">
                <span>{this.props.client.name} ({this.props.client.id})</span>
            </div>
        );
    }
}

export default ClientTile;
/**
 * Properties of component:
 */

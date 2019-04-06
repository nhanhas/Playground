import React, { Component } from 'react';
import './Loading.scss';

class Loading extends Component {
    /* Constructor */
    constructor(props){
        super(props);

        //#1 - Initialize state
        this.state = { isLoading: this.props.isLoading};

       console.log('LOADING:', this.state.isLoading);
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.isLoading !== prevProps.isLoading) {
            this.setState({isLoading : this.props.isLoading});
            console.log('component updated from parent');
        }
    }
   
    
    render() {
        return (
            <div className="Loading">
               
                { this.state.isLoading ? <h1>A CARREGAR!</h1> : this.props.children}
            </div>
        );
    }
}

export default Loading;
/**
 * Properties of component:
 */

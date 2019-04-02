import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './Language.scss';

const LanguageDetail = ({ match }) => <p>{match.params.id}</p>


class Language extends Component {
    constructor(props){
        super(props);   

        //Get parameters from hash
        const {params} = this.props.match;

        console.log(params);
    }

    
  render() {
    const { url } = this.props.match
    return (
     <div className="Language">      
        Language page
        <br/>
        No parameter what so ever... go to: <Link to="/language/pt">PT</Link>
        <Route path="/language/:id" component={LanguageDetail} />
     </div>
    );
  }
}

export default Language;

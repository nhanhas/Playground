import React, { Component } from 'react';
import ClientsService from './ClientsService';
import { Route, Link } from 'react-router-dom'
import ClientTile from '../../components/ClientTile/ClientTile';
import Loading from '../../components/Loading/Loading';
import './Clients.scss';



class Clients extends Component {
    constructor(props){
        super(props);   
        
        this.state = { 
            isLoading : true,
            clients : []
         };

    }


    //#A - Request Clients
    getAllClients(){
        return ClientsService.getClientList().then((result)=>{
            console.log(result);
            return this.setState({clients : result})            
        });
    }


    componentDidMount(){
        let promises = [];
        promises.push(this.getAllClients());
        
        Promise.all(promises).then((results)=>{
            this.setState({isLoading : false});
        });

    }
    
    drawClientsTile(){
        
        let clientsList = this.state.clients.map((client)=>
        
            <div key={client.id}>                
                <Link to={ '/clients/' + client.id }>
                    <ClientTile client={client}></ClientTile>
                </Link>                
            </div>

        );

        return (
            <div>
                Clients page
                <hr/>
                {clientsList}
            </div>
            );
    }

  render() {

    console.log('Clients state: ', this.state.isLoading);

    return (
        <Loading isLoading={this.state.isLoading}>
            <div className="Clients">              
                {            
                this.drawClientsTile() 
                }
            
            </div>
        </Loading>
    );
  }
}

export default Clients;

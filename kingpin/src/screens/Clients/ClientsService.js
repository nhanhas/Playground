import { resolve } from "q";
import BaseService from '../../framework/BaseService';

const ClientsService = {
    
    getClientList : function () {
        let serviceUrl = BaseService.API_URL + '/getClients';
        return BaseService.Http_GET(serviceUrl).then((result)=>{
            return result;
        });
    }
}

export default ClientsService;
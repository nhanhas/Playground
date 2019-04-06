const BaseService = {
    API_URL : 'http://platform.folques.com/platform/api',

    // GET Request 
    Http_GET  : function(serviceURL){
        return fetch(serviceURL, {
                    method: 'get'
                }).then(function(response) {
                    return response.json();
                });
    },
    Http_POST  : function(serviceURL, data){
        return fetch({
                    method: 'POST',                     
                    data: data,
                    url: serviceURL
                }).then(function successCallback(response) {
                    return response.json();
                }, function errorCallback(response) {
                    return 'error';
                });
    }

}

export default BaseService;
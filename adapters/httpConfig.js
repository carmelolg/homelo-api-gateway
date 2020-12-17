module.exports = (request) => {

    var _headers = {}; 
    if(request.header('Authorization') !== null && request.header('Authorization') !== undefined){
        _headers['Authorization'] = request.header('Authorization');
    }
    
    return {
        params: request.query,
        headers: _headers
    };
}
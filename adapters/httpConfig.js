module.exports = (request) => {
    return {
        params: request.query,
        headers: {
            Authorization: request.header('Authorization')
        }
    };
}
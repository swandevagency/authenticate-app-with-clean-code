module.exports = function makeexpresscb(controller){
    return(req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: req.headers
        }
        controller(httpRequest, frameworks).then((httpResponse) => {
            if(httpResponse.headers){
                res.setHeaders(httpResponse.headers)
            }
            res.status(httpResponse.statusCode).send(httpResponse.body)
        })
    }

}
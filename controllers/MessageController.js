export class MessageController {
    constructor(request, response) {
        this._request = request;
        this._response = response;
    }

    handleRequest() {
        console.log("body", this._request.body);
        return this._response.status(200).send({
            success: 'true',
            message: 'todos retrieved successfully',
            todos: {email: "juan@perex.com"}
        })
    }
}
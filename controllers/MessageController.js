import {apiClient} from "../api/apiClient";

export class MessageController {
    constructor(request, response, bot) {
        this._bot = bot;
        this._request = request;
        this._response = response;
    }

    handleRequest() {
        this._response.status(200).send({success: 'OK'});
        const neededData = this._bot.neededDataFor(this._request.body['params']);
        const data = this._obtainNeededData(neededData, {
            teamId: this._request.body['team_id'],
            userId: this._request.body['user_id'],
            chatId: this._request.body['chat_id']
        });
    }

    _obtainNeededData(neededData, params) {
        return apiClient.get(neededData, params);
    }

    _sendMessageToServer(response) {
    }
}
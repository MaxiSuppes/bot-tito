import {apiClient} from "../api/apiClient";
import {getMuteUntilDate} from "../config";

export class MessageController {
    constructor(request, response, bot) {
        this._bot = bot;
        this._request = request;
        this._response = response;
    }

    handleRequest() {
        apiClient.addToken(this._request.headers['x-auth-token']);
        if (!this._bot.canReply()) {
            return this._response.status(200).send({"status": "OFF"});
        }

        this._response.status(200).send({"status": "ON"});
        const commandMessage = this._request.body['params'];
        const params = {
            teamId: this._request.body['team_id'],
            userId: this._request.body['user_id'],
            chatId: this._request.body['chat_id'],
            welcomeMessage: this._request.body['message'],
        };
        const neededData = this._bot.neededDataFor(commandMessage);
        if (neededData) {
            return this._obtainNeededData(neededData, params, (data) => {
                this._processMessage(commandMessage, params, data);
            });
        }

        return this._processMessage(commandMessage, params, {});
    }

    _obtainNeededData(neededData, params, callback) {
        apiClient.get(neededData, params, callback);
    }

    _processMessage(commandMessage, params, data) {
        const response = this._bot.processMessage(commandMessage, params, data);
        console.log("response", response);
        console.log("getMuteUntilDate", getMuteUntilDate());
        apiClient.sendMessageToChannel(response, params);
    }
}
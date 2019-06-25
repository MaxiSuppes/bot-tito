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
        this._response.status(200).send({success: 'OK'});
        if (!this._bot.canReply()) {
            return;
        }

        const commandMessage = this._request.body['params'];
        const params = {
            teamId: this._request.body['team_id'],
            userId: this._request.body['user_id'],
            chatId: this._request.body['chat_id']
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
        const response = this._bot.processMessage(commandMessage, data);
        apiClient.sendMessageToChannel(response, params);
    }
}
import {Api} from "./api";

class ApiClient {
    constructor() {
        this._api = new Api();

        this.getUser = this.getUser.bind(this);
        this.getChannel = this.getChannel.bind(this);
    }

    addToken(token) {
        this._api.addToken(token);
    }

    _getEndpoints() {
        return {
            'user': this.getUser,
            'channel': this.getChannel,
        }
    }

    endpointFor(neededData) {
        return this._getEndpoints()[neededData];
    }

    get(neededData, params, callback) {
        const endpoint = this.endpointFor(neededData);
        return endpoint(params, callback);
    }

    getUser({teamId, userId}, callback) {
        return this._api.getUsers(teamId).then(result => {
            const allUsers = result['users'];
            const user = allUsers.filter(user => user['id'] === userId)[0];
            callback(user);
        });
    }

    getChannel({teamId, chatId}, callback) {
        return this._api.getChannels(teamId).then(result => {
            const allChannels = result['channels'];
            const channel = allChannels.filter(channel => channel['id'] === chatId)[0];
            callback(channel);
        });
    }

    sendMessageToChannel(response, params) {
        return this._api.sendMessageToChannel(response, params).then(result => {
            console.log("result", result);
        });
    }
}

export let apiClient = new ApiClient();
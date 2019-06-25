import {Api} from "./api";

class ApiClient {
    constructor() {
        this._api = new Api();

        this.getUser = this.getUser.bind(this);
    }

    _getEndpoints() {
        return {
            'user': this.getUser,
        }
    }

    endpointFor(neededData) {
        return this._getEndpoints()[neededData];
    }

    get(neededData, params) {
        const endpoint = this.endpointFor(neededData);
        return endpoint(params);
    }

    getUser({teamId, userId}) {
        this._api.getUsers(teamId).then(result => {
            const allUsers = result['users'];
            return allUsers.filter(user => user['id'] === userId)[0];
        });
    }

    getChannel(channelId) {

    }

    sendMessageToChannel(response) {

    }

    sendMessageToUser() {

    }
}

export let apiClient = new ApiClient();
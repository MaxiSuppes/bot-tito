const request = require("request");

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJwYXNzd29yZCI6ImFzZGFzZCIsInRpbWVzdGFtcCI6IjIwMTktMDYtMjQgMTk6NDM6MjguMjc2NTI5In0.NuQTuxlgGxMyDN5FC5IjT6Yo0wGMuvubamlmPHbs7ds";

export class Api {
    constructor() {
        this._baseUrl = 'https://hypechat-server.herokuapp.com';
    }

    getUsers(teamId) {
        const options = {
            url: this._baseUrl + '/teams/' + teamId + '/users',
            headers: {
                'X-Auth-Token': token
            }
        };

        return new Promise((resolve, reject) => {
            request(options, (error, response, body) => {
                if (error) return reject(error);
                try {
                    resolve(JSON.parse(body));
                } catch(parseError) {
                    reject(parseError);
                }
            });
        });
    }

    getChannel(channelId) {

    }

    sendMessageToChannel(response) {
        const options = {
            method: 'POST',
            url: this._baseUrl + '/teams/messages',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': token
            },
            body: {
                team_id: 1,
                chat_id: 4,
                content: '@Luber' + response,
                message_type: 'TEXT',
                mentions: [ 1 ] },
            json: true
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);

            console.log(body);
        });
    }

    sendMessageToUser() {

    }
}
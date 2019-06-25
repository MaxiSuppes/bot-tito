const request = require("request");

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJwYXNzd29yZCI6ImFzZGFzZCIsInRpbWVzdGFtcCI6IjIwMTktMDYtMjQgMTk6NDM6MjguMjc2NTI5In0.NuQTuxlgGxMyDN5FC5IjT6Yo0wGMuvubamlmPHbs7ds";

export class Api {
    constructor() {
        this._baseUrl = 'https://hypechat-server.herokuapp.com';
        this._token = "";
    }

    addToken(token) {
        this._token = token;
    }

    getUsers(teamId) {
        const options = {
            url: this._baseUrl + '/teams/' + teamId + '/users',
            headers: {
                'X-Auth-Token': this._token
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

    getChannels(teamId) {
        const options = {
            url: this._baseUrl + '/teams/' + teamId + '/channels',
            headers: {
                'X-Auth-Token': this._token
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

    sendMessageToChannel(response, params) {
        const options = {
            method: 'POST',
            url: this._baseUrl + '/teams/messages',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': this._token
            },
            body: {
                team_id: params['teamId'],
                chat_id: params['chatId'],
                content: response.content(),
                message_type: 'TEXT',
                mentions: response.mentions()
            },
            json: true
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
}
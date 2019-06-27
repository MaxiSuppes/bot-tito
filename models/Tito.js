import {HelpCommand, InfoCommand, MeCommand, MuteCommand, NewCommand} from "./Command";
import {getMuteUntilDate} from "../config";
var moment = require('moment');

export class Tito {
    constructor() {
        this._name = 'Tito';
        this._commands = [HelpCommand, InfoCommand, MuteCommand, MeCommand, NewCommand];
    }

    _commandFor(message) {
        return this._commands.filter(command => command.acceptThis(message))[0];
    }

    neededDataFor(message) {
        return this._commandFor(message).neededData();
    }

    processMessage(commandMessage, params, data) {
        const commandType = this._commandFor(commandMessage);
        const command = new commandType();
        return command.reply(commandMessage, params, data);
    }

    canReply() {
        const now = moment();
        if (getMuteUntilDate()) {
            const muteDate = moment(getMuteUntilDate(), 'YYYY-MM-DD HH-mm-ss');
            return now.diff(muteDate) > 0;
        } else {
            return true;
        }
    }
}
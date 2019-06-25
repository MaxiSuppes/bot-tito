import {HelpCommand, InfoCommand, MeCommand, MuteCommand} from "./Command";
import {getMuteUntilDate, muteUntilDate} from "../config";

export class Tito {
    constructor() {
        this._name = 'Tito';
        this._commands = [HelpCommand, InfoCommand, MuteCommand, MeCommand];
    }

    _commandFor(message) {
        return this._commands.filter(command => command.acceptThis(message))[0];
    }

    neededDataFor(message) {
        return this._commandFor(message).neededData();
    }

    processMessage(commandMessage, data) {
        const commandType = this._commandFor(commandMessage);
        const command = new commandType();
        return command.reply(commandMessage, data);
    }

    canReply() {
        const now = new Date();
        return now > getMuteUntilDate();
    }
}
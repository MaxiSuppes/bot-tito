import {HelpCommand, InfoCommand, MeCommand, MuteCommand} from "./Command";

export class Tito {
    constructor() {
        this._name = 'Tito';
        this._commands = [HelpCommand, InfoCommand, MuteCommand, MeCommand]
    }

    _commandFor(message) {
        return this._commands.filter(command => command.acceptThis(message))[0];
    }

    neededDataFor(message) {
        return this._commandFor(message).neededData();
    }

    processMessage(message) {
        return this._commandFor(message).reply();
    }
}
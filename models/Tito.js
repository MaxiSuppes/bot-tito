import {HelpCommand, InfoCommand, MeCommand, MuteCommand} from "./Command";

export class Tito {
    constructor() {
        this._name = 'Tito';
        this._commands = [HelpCommand, InfoCommand, MuteCommand, MeCommand]
    }

    processMessage(message) {
        this._commands.forEach(command => {
            if (command.acceptThis(message)) {
                return new command().reply();
            }
        });
    }
}
export class HelpCommand {
    static acceptThis(message) {
        return message.contains('help')
    }

    reply() {
        return 'Los comandos disponibles son: ' +
            'help: Muestra los comandos disponibles de Tito' +
            'info: Muestra información del canal: integrantes, cantidad de mensajes, etc' +
            'mute "n": Desactiva respuestas por n segundos' +
            'me: Muestra información del usuario que envía el mensaje.';
    }
}

export class InfoCommand {
    static acceptThis(message) {
        return message.contains('info')
    }

    constructor(channelId) {

    }

    reply() {

    }
}

export class MuteCommand {
    static acceptThis(message) {
        return message.contains('mute')
    }

    reply() {

    }
}

export class MeCommand {
    static acceptThis(message) {
        return message.contains('mute')
    }

    reply() {

    }
}
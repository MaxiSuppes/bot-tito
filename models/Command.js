export class HelpCommand {
    static acceptThis(message) {
        return message.includes('help')
    }

    static neededData() {
        return '';
    }

    reply() {
        return 'help: Muestra los comandos disponibles de Tito \n info: Muestra información del canal: integrantes, cantidad de mensajes, etc \n mute "n": Desactiva respuestas por n segundos \n me: Muestra información del usuario que envía el mensaje.';
    }
}

export class InfoCommand {
    static acceptThis(message) {
        return message.includes('info')
    }

    static neededData() {
        return 'channel';
    }

    reply(channel) {

    }
}

export class MuteCommand {
    static acceptThis(message) {
        return message.includes('mute')
    }

    static neededData() {
        return '';
    }

    reply() {

    }
}

export class MeCommand {
    static acceptThis(message) {
        return message.includes('me')
    }

    static neededData() {
        return 'user';
    }

    reply() {

    }
}

export class NewCommand {
    static acceptThis(message) {
        return message.includes('welcome-user')
    }

    static neededData() {
        return 'user';
    }

    reply() {

    }
}
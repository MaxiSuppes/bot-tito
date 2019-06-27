import {setMuteUntilDate} from "../config";

class Response {
    constructor(message, mentions) {
        this._content = message;
        this._mentions = mentions;
    }

    content() {
        return this._content;
    }

    mentions() {
        return this._mentions;
    }
}

export class HelpCommand {
    static acceptThis(message) {
        return message.includes('help')
    }

    static neededData() {
        return '';
    }

    reply() {
        const content =
            'help: Muestra los comandos disponibles de Tito \n ' +
            'info: Muestra información del canal: integrantes, cantidad de mensajes, etc \n ' +
            'mute "n": Desactiva respuestas por n segundos \n ' +
            'me: Muestra información del usuario que envía el mensaje.';
        const mentions = [];

        return new Response(content, mentions);
    }
}

export class InfoCommand {
    static acceptThis(commandMessage) {
        return commandMessage.includes('info')
    }

    static neededData() {
        return 'channel';
    }

    reply(commandMessage, params, channel) {
        const content = `Info del canal Nombre: ${channel['name']}, Creador: ${channel['creator']['username']}, 
                        Descripcion: ${channel['description'] || ''}, Visibilidad: ${channel['visibility']}`;
        const mentions = [];

        return new Response(content, mentions);
    }
}

export class MuteCommand {
    static acceptThis(commandMessage) {
        return commandMessage.includes('mute')
    }

    static neededData() {
        return '';
    }

    reply(commandMessage, params, data) {
        const seconds = commandMessage.split(" ")[1];
        setMuteUntilDate(seconds);
        const content = `Tito estará en silencio por ${seconds} segundos`;

        const mentions = [];

        return new Response(content, mentions);
    }
}

export class MeCommand {
    static acceptThis(message) {
        return message.indexOf('me') === 0
    }

    static neededData() {
        return 'user';
    }

    reply(commandMessage, params, user) {
        const content = `@${user['username']} Nombre: ${user['first_name']}, Apellido: ${user['last_name']}, Role: ${user['role']}`;
        const mentions = [user['id']];

        return new Response(content, mentions);
    }
}

export class NewCommand {
    static acceptThis(message) {
        return message.indexOf('welcome-user') === 0;
    }

    static neededData() {
        return '';
    }

    reply(commandMessage, params, data) {
        const content = params['welcomeMessage'] || 'Bienvenido';
        const mentions = [];

        return new Response(content, mentions);
    }
}

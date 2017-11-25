const Command = require("../../structures/Command");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: "Lists all commands available.",
            usage: "commands",
            dm: true,
            mode: "strict"
        });
    }

    async execute(message, permissionLevel) {
        message.buildEmbed()
            .setTitle(`${this.client.user.username} Commands`)
            .addField("» Commands", this.client.commands.map(c => c.name).join(', '), true)
            .send();
    }
};

const Eris = require("eris")
const { token, prefix } = require("./config.json");

let client = new Eris.CommandClient(token, {}, {
    owner: 'Tazhys#3902',
    description: `A tut bot for youtube`,
    ignoreBots: true,
    ignoreSelf: true
});

client.on("ready", () => {
    console.log("hi!")
});

client.registerCommand("hi", (msg) => {
    msg.channel.createMessage("hi am test!")
}, {
    usage: "hi"
});


client.connect()
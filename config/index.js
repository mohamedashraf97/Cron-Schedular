module.exports = {
    hello:{
        frequency: "* * * * *",
        handler: "handlers/sayhello"

    },
    goodbye:{
        frequency: "4 * * * *",
        handler: "handlers/saygoodbye"
    },
    tacos:{
        frequency: "4 * * * *",
        handler: "handlers/tacos"
    },
}
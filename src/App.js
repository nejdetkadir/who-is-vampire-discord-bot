const dotenv = require('dotenv').config();
const {Client, VoiceChannel} = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log('connected to discord');
});

client.on('message', (message) => {
    if (!message.author.bot && message.content.startsWith(process.env.PREFIX)) { // last message author not equal to any bot
        const [COMMAND_NAME, ...args] = message.content
            .trim()
            .substring(process.env.PREFIX.length)
            .split(/\s+/);

        if (COMMAND_NAME === "oyunbaşlasın") {
            message.channel.send("rololuştur komutunu kullanarak istediğiniz rolleri,\n' rol:kişi ' sayısı olarak aralarda boşluk bırakarak belirtiniz.");
        } else if (COMMAND_NAME === "rololuştur") {
            const members = message.member.voice.channel.members.toJSON();

            if (checkMaxValue(args) > members.length -1) {
                message.channel.send('Girilen sayılarla toplam kişi sayısı eşleşmesinde hata meydana geldi... Lütfen gözden geçirdikten sonra tekrar deneyiniz.');
            } else {
                let selectedUsers = [];
                let userData = [];
                let isInitAdmin = {
                    status: false,
                    name: ""
                };

                for (let i = 0; i < args.length; i++) {
                    const key = args[i].split(":")[0];
                    const value = args[i].split(":")[1];

                    if (key !== "yonetici") {
                        for (let j = 0; j < value; j++) {
                            let randomUserIndex = Math.ceil(Math.random() * (members.length))-1;

                            while (selectedUsers.includes(randomUserIndex) || members[randomUserIndex].displayName === checkAdmin(args)) {
                                randomUserIndex = Math.ceil(Math.random() * (members.length))-1;
                            }

                            selectedUsers.push(randomUserIndex);
                            client.users.fetch(members[randomUserIndex].userID).then(res => {
                                const comment = `${members[randomUserIndex].displayName} : ${key.toUpperCase()}`;
                                userData.push(comment);
                                res.send(" Karakterin belli oldu! " + key.toUpperCase() + ' oldun...');
                            });
                        }
                    } else {
                        isInitAdmin = {
                            status: true,
                            name: value
                        }
                    }
                }

                for (let i = 0; i < members.length; i++) {
                    if (!selectedUsers.includes(i) && members[i].displayName !== checkAdmin(args)) {
                        client.users.fetch(members[i].userID).then(res => {
                            const comment = `${members[i].displayName} : KÖYLÜ`;
                            userData.push(comment);
                            res.send(`Karakterin belli oldu! KÖYLÜSÜN...`);
                        });
                    }
                }

                let order = 5;
                message.channel.send('Oyunun başlamasına son...');
                const interval = setInterval(() => {
                    message.channel.send(order);
                    order--;
                    if (order === 0) {
                        message.channel.send('İyi eğlenceler SET üyeleri :)');
                        if (isInitAdmin.status) {
                            for (let i = 0; i < members.length; i++) {
                                if (members[i].displayName === isInitAdmin.name) {
                                    client.users.fetch(members[i].userID).then(res => {
                                        res.send("Oyundaki karakter listesi:");
                                        res.send(userData);
                                    });
                                }
                            }
                        }
                        clearInterval(interval);
                    }
                }, 1000);
            }
        }
    }
});

function checkAdmin(args) {
    let val;
    for (let i = 0; i < args.length; i++) {
        const key = args[i].split(":")[0];
        const value = args[i].split(":")[1];
        if (key === "yonetici") {
            val = value;
        }
    }
    return val;
}

function checkMaxValue(args) {
    let max = 0;
    for (let i = 0; i < args.length; i++) {
        const key = args[i].split(":")[0];
        const value = args[i].split(":")[1];
        if (key !== "yonetici") {
            max += parseInt(value);
        }
    }
    return max;
}

client.login(process.env.DISCORD_TOKEN);
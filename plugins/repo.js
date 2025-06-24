const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "repo",
    desc: "get bot repo.",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const channel = '𝐂𝐇𝐀𝐓𝐇𝐔-𝐌𝐃';
        const repolink = `⭕ *𝐂𝐇𝐀𝐓𝐇𝐔-𝐌𝐃 Github Repository*

> https://github.com/CHATHU-MD/CHATHU-MD

⭕ *𝐂𝐇𝐀𝐓𝐇𝐔-𝐌𝐃 DIPLOY HEROKU*

> https://dashboard.heroku.com/new?template=https://github.com/CHATHU-MD/CHATHU-MD

⭕ *𝐂𝐇𝐀𝐓𝐇𝐔-𝐌𝐃 WEB 📍*

> https://chathu-md-671b2a1dd91f.herokuapp.com/

⭕ *WHATSAPP CHANNEL :*

> https://whatsapp.com/channel/0029VbAhEfaKLaHnxYcTvb3l

⭕ *Contact Owner :*

> wa.me/94750893377
`;

        return await conn.sendMessage(from, { 
            image: { url: "https://i.ibb.co/xScC16P0/SulaMd.jpg" },
            caption: repolink,contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363419698330634@newsletter',
                    newsletterName: '𝐂𝐇𝐀𝐓𝐇𝐔-𝐌𝐃',
                    serverMessageId: -1
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

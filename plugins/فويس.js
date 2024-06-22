import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `مرحبا بك فى بوت بٚلاڪٓ \nيمكنك كتابة \اوامر\n لتنبتق لك جميع الاوامر \n@${m.sender.split('@')[0]} \n`
await conn.reply(m.chat, info, m, { contextInfo: { mentionedJid: [m.sender],forwardingScore: 65,
      isForwarded: true, externalAdReply: { title: author, body: bottime,thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
      await conn.sendMessage(m.chat, {
        audio: {
            url: "bobizaramadhan.mp3"
        },
        seconds: 65,
        ptt: true,
        mimetype: "audio/mpeg",
        fileName: "vn.mp3",
        waveform: [100, 0, 100, 0, 100, 0, 100]
    }, {
        quoted: m
    })
}
handler.customPrefix = /^(ميستك_ك|ميستك)$/i
handler.command = new RegExp

export default handler

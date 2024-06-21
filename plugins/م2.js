import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let vn = './Menu.png'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/.')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `مرحبا بك/ي معاك/ي 𝐁𝐋𝐀𝐂𝐊-𝐵𝛩𝑇
⽗𓅓 ⋅ ───━ •﹝👑﹞• ━─── ⋅ 𓅓⽗
قــســم الــديــن الاســلامــي 📿
𓅓 ⋅ ───━ •﹝🪶﹞• ━─── ⋅ 𓅓 
﹝𓅓 سورة 𓅓﹞
﹝𓅓 حديث 𓅓﹞
﹝𓅓 قران 𓅓﹞
﹝𓅓 الله 𓅓﹞
﹝𓅓 ايات 𓅓﹞
𓅓 ⋅ ───━ •﹝👑﹞• ━─── ⋅ 𓅓
𝐁𝐋𝐀𝐂𝐊-𝐵𝛩𝑇ᥬ🌚᭄
𓅓 ⋅ ───━ •﹝👑﹞• ━─── ⋅ 𓅓

importa { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝐂𝐇𝐀𝐑𝐋𝐈𝐄-𝐕𝟒', body: '©Charlie', sourceUrl: `https://github.com/Emergit2006/Charlie-V4`, thumbnail: imagen2}}})}
    
return !0 }
export default handler

import { proto } from '@whiskeysockets/baileys'
import PhoneNumber from 'awesome-phonenumber'

const name = "Paulo Hernani 🍥"
const empresa = "TAKI MUSIC ⚡"
const numCreador = "55(16)98153-2586"
const correo = "paulohernanicosta@gmail.com"
const web = "No 🧐"
const about = "SEJA FELIZ! 🍥"
const direccion = "Brasil 🇧🇷"
const instagram = "https://www.instagram.com/eu_paulo_ti"
const canal = "https://chat.whatsapp.com/ErGpjj6gWo6HGdosEiAouK" // Cambia si tienes canal oficial

const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name};;;
FN:${name}
ORG:${empresa}
TITLE:MIAUUUU
TEL;waid=${numCreador}:${new PhoneNumber("+" + numCreador).getNumber("international")}
EMAIL:${correo}
URL:${web}
NOTE:${about}
ADR:;;${direccion};;;;
X-ABADR:ES
X-WA-BIZ-NAME:${name}
X-WA-BIZ-DESCRIPTION:${about}
END:VCARD`.trim()

const contactMessage = { displayName: name, vcard }

let handler = async (m, { conn }) => {

await m.react("👑")

await conn.sendMessage(m.chat, {
  text: `*Mod oficial do Bot Paulo*

*Nome:* ${name}

*Rol:* My favorite emoji 🍥

*País:* ${direccion}

🌐 *GitHub:* ${web}

📧 *Correo:* ${correo}

🔗 *Canal:* ${canal}

💌 *Instagram:* ${instagram} 

> _O primeiro sinal do início do conhecimento é o desejo de morrer._
`,
  contextInfo: {
    mentionedJid: [m.sender],
    externalAdReply: {
      title: "Contato Do Mod 🔨",
      body: empresa,
      mediaType: 1,
      thumbnailUrl: 'https://qu.ax/SFkxO.jpg', // Puedes cambiar la imagen
      renderLargerThumbnail: true,
      sourceUrl: canal
    }
  }
}, { quoted: m })

//await conn.sendMessage(m.chat, {
//  contacts: { displayName: name, contacts: [contactMessage] }
//}, { quoted: m })

}

handler.help = ["creador", "owner", "creator"]
handler.tags = ["info"]
handler.command = ["creador", "creator", "owner"]

export default handler
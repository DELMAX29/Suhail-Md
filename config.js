const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717672068";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_31_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI3LFxuICAgICAgICA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDMyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxLFxuICAgICAgICA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQyLFxuICAgICAgICA2MixcbiAgICAgICAgODgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQsXG4gICAgICAgIDM4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0LFxuICAgICAgICAyMSxcbiAgICAgICAgODksXG4gICAgICAgIDM4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICA4MixcbiAgICAgICAgNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDUxLFxuICAgICAgICA5MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU4LFxuICAgICAgICA3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNmbWJnQlFyN0dJMTUwUENOckFsemxJOW1SYnd0MzZRWkcvbmVzVVBZd0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFNS1l1U1d5UnNPWWtyR1BnTkxFbXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmJkNTlhMDUtMTAyZi00Y2Q3LWE5ZmQtMjMwMjJhNTlkOGYxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwLFxuICAgICAgMTY0LFxuICAgICAgNTksXG4gICAgICAzNixcbiAgICAgIDMyLFxuICAgICAgMTMyLFxuICAgICAgMTI2LFxuICAgICAgMzcsXG4gICAgICA1MSxcbiAgICAgIDIzNCxcbiAgICAgIDE2MyxcbiAgICAgIDIxNixcbiAgICAgIDMsXG4gICAgICAyMTUsXG4gICAgICAxODAsXG4gICAgICA1MyxcbiAgICAgIDYwLFxuICAgICAgMTQ0LFxuICAgICAgMjA5LFxuICAgICAgMTgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgMTU5LFxuICAgICAgMTAxLFxuICAgICAgMjQ2LFxuICAgICAgMTMzLFxuICAgICAgMzIsXG4gICAgICAzNSxcbiAgICAgIDE3MSxcbiAgICAgIDI1MSxcbiAgICAgIDY2LFxuICAgICAgMTE1LFxuICAgICAgMTE1LFxuICAgICAgMjAsXG4gICAgICAyMzgsXG4gICAgICA1NSxcbiAgICAgIDE5OCxcbiAgICAgIDE0NixcbiAgICAgIDE5MixcbiAgICAgIDUyLFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllIRTVLRkhZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzY1MjM5NzE3ODoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQzMzU4MzgzOTIzODc6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTldic3RJRUVMT0R5clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0QTNvUUVSUVd4Z2wyZVNNQ3VIa053VGJXT2NFTExNYzFjZENnSUI3ZlM4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdrRUNKeVBVVmNBUG0rMmQ2dmtZL3FKYzhvdWU3bjZRcG1Kd0pGWW8zdTh6RHVuYjJOcVorSTErN1dUUy81am40Y2JaQjFtaTkvNW9zNklDY0U3TUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklaT28zRERLUUlncGpMcGFtZXlWM2xZUUQrTks0eDVjdENsYVdxMm5EVVA1RlFIejJzS2YxWThsTVB3MituNnJCeDhqWWpaSUkxbnJlMEdDaXRCdEFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NjUyMzk3MTc4OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODc3NTAxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",.",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "k29",
  ownername:process.env.OWNER_NAME|| "k29promax",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

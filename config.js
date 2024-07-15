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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_38_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgMTI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNixcbiAgICAgICAgODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDQxLFxuICAgICAgICA3OCxcbiAgICAgICAgODMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYTzF2V2RwVlRrbjRLVlZscmZsbEM5NzdDWDM5UFdONjhzTTdPc0xaR3BnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItdzdOdGJYR1F2V1dLazVydVlrR3pnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU1ZGIzNDBiLTEyY2UtNDg2MC05MGI5LTk5ZGU3ODM5MTM5MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOCxcbiAgICAgIDEyMyxcbiAgICAgIDg0LFxuICAgICAgMTAsXG4gICAgICA5MyxcbiAgICAgIDEzOCxcbiAgICAgIDE5OCxcbiAgICAgIDIxNCxcbiAgICAgIDE0NyxcbiAgICAgIDI1NCxcbiAgICAgIDUyLFxuICAgICAgNjEsXG4gICAgICAxNTIsXG4gICAgICAxMCxcbiAgICAgIDY5LFxuICAgICAgMjQ4LFxuICAgICAgMTY4LFxuICAgICAgMTgsXG4gICAgICAxMzQsXG4gICAgICAyNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMTUwLFxuICAgICAgMTQzLFxuICAgICAgMTg4LFxuICAgICAgMTA5LFxuICAgICAgMTM5LFxuICAgICAgMjMyLFxuICAgICAgODEsXG4gICAgICAxMjUsXG4gICAgICAyMzcsXG4gICAgICAyMzksXG4gICAgICA1NSxcbiAgICAgIDEzOSxcbiAgICAgIDQ5LFxuICAgICAgMjM5LFxuICAgICAgMTg2LFxuICAgICAgMjE5LFxuICAgICAgMjAyLFxuICAgICAgODYsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1g0UVdRRzlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNjc4OTUxNToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTkzMTc5Njk4NjY3OTE6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNK010OWdCRUxLUjFyUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZneGY5TmQwb1RTeGEwaGRpdmJHTkE1WUh1QWxtUVV0T3lrNWRVL09OR009XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMElkMElmVXgvbzZXRlNFb1Y3TklXcXVJNjhSL0VCMUMxWjdtSDhudDBXcm5QMmtzUXhGdDhDQ3ZUUFNKOTFMbXFXTzkrc1l2YndUVlhoT1hxbVlhQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSE5YOFRzd0Z3YzZsZGRsUGEyNUtNVURGSGZCR2hFbXpUcjg2eFh5SWRCaXJjSWhJc05qcGtaaWM4Q2FadUZGVWhiYzZieGRIY2ZXZ0g2OFZPSFJuQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE2Nzg5NTE1OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTA3NTg5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURtOFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRG04Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTnRrQ2ZpVGlBZXAyUS8vRUU1SmhUVitaUk1YYnR2K3BJUko2YmhPbERBdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NTM4ODc1NjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDkyODM2OTAyNFwifSIKfQ=="  // PUT your SESSION_ID 


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

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_29_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAzNixcbiAgICAgICAgMjM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDk2LFxuICAgICAgICA2LFxuICAgICAgICAzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWbmJoQzk3cGR6b0N6MndsdTZWVi9RZWRSOTZNT25QRW52UjR4L3ljYUpFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5NkpDTEd2VFRzV2hXbzFYLXlDc2NRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU5OGIwZjAwLWNlODUtNDQxMC1hNTQ4LWExNDc5N2RiYWI2MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICAyNDgsXG4gICAgICAyMDIsXG4gICAgICAyMzQsXG4gICAgICAyMjYsXG4gICAgICAxNTcsXG4gICAgICAzLFxuICAgICAgMTM0LFxuICAgICAgODgsXG4gICAgICAxNTgsXG4gICAgICAxNzYsXG4gICAgICAxMTcsXG4gICAgICAxODIsXG4gICAgICAxNSxcbiAgICAgIDY5LFxuICAgICAgMjM3LFxuICAgICAgMjI4LFxuICAgICAgMTQwLFxuICAgICAgMjAsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgODgsXG4gICAgICAxNDksXG4gICAgICA3NixcbiAgICAgIDUsXG4gICAgICA0LFxuICAgICAgMjM4LFxuICAgICAgMjI2LFxuICAgICAgNzEsXG4gICAgICAyMzEsXG4gICAgICA2MSxcbiAgICAgIDQsXG4gICAgICAyOSxcbiAgICAgIDEyNyxcbiAgICAgIDE3OSxcbiAgICAgIDIzOCxcbiAgICAgIDM1LFxuICAgICAgMjEzLFxuICAgICAgNTEsXG4gICAgICAxNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQUozMTdTVkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4ODA4MTMzNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oCifHxaaW1fREpfS3VTaHx84oCiXCIsXG4gICAgXCJsaWRcIjogXCIyMDk2Njc4ODgzMDQyMzY6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPN0dodGtFRUoybHo3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhpM3NXc0dlYmRUK2oxV2VhZnhxK1M0UDFiSVFTSlB0VDJYM2pHY0xKVjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRXg3RjJGK2twZVd2TTJJUVVacGJpNDVBZXc1RlUrUHo2SkhTWTcxaDZKUG1GTU5KL2ptR1JjT0diNUlWK1lCbloyZDQvL1JxekVqYk4wTEE5YWRrZ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNGFPL3pvTFYwZnRsQVd0KzAwU3lyVzY3MCtLMEpzazBJV0svWmFHNUcwZlM1RGkzVVByMzlyWitpVXYvd2hTRE1aRmRvS3VvMGZ0My9jTUdaSkdQRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg4MDgxMzM3OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTYzNzQ1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWFxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBYXEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5UG5WaWRwRWltRkJoQTFOYVVYd0pyYTJWeWtKODJjVXNaOE91Ny82dVJNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyNjA0OTU3MjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDk2Mzc0OTk5M1wifSIKfQ=="  // PUT your SESSION_ID 


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

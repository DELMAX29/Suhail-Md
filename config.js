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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_33_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1MixcbiAgICAgICAgMjI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE0LFxuICAgICAgICA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA3MyxcbiAgICAgICAgNixcbiAgICAgICAgMTk2LFxuICAgICAgICA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICA3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDk2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MixcbiAgICAgICAgNDUsXG4gICAgICAgIDQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDksXG4gICAgICAgIDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICA5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTEsXG4gICAgICAgIDgwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDc5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibXM1Uno2T1dwQ2JDZ3l3ZU5YRG5hQzZaVjdKdVdDQWJMb2FNNjVDTFh2TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieUpNdERHOVVRR0tTbW9XbjBqWm9Id1wiLFxuICBcInBob25lSWRcIjogXCJkZDhjYmZhMC0yNDQxLTRjZWUtYWQ5My05YzUwOWQ4YzU1OGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAyNTQsXG4gICAgICAxMTMsXG4gICAgICAyMTksXG4gICAgICAxOTMsXG4gICAgICA4MSxcbiAgICAgIDEyOCxcbiAgICAgIDIxNSxcbiAgICAgIDIyOSxcbiAgICAgIDY0LFxuICAgICAgMTksXG4gICAgICAxNDksXG4gICAgICAxOTksXG4gICAgICAwLFxuICAgICAgMjE5LFxuICAgICAgMTMwLFxuICAgICAgOTUsXG4gICAgICAxNCxcbiAgICAgIDIyOSxcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ1LFxuICAgICAgMTg2LFxuICAgICAgMjU0LFxuICAgICAgMTUzLFxuICAgICAgMTQwLFxuICAgICAgMTUzLFxuICAgICAgMjMyLFxuICAgICAgMjQ5LFxuICAgICAgNixcbiAgICAgIDYyLFxuICAgICAgNTMsXG4gICAgICAxNzksXG4gICAgICAyMzQsXG4gICAgICAxNzksXG4gICAgICAxOTksXG4gICAgICA1NixcbiAgICAgIDEyNixcbiAgICAgIDE1NyxcbiAgICAgIDI0MCxcbiAgICAgIDEwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUNDdGSzJMU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzEzNzUzNTQ3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNjkxOTQ3MTM1MDgyOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3k3dDRRSEVKNm56N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPd0NJWGt2dzgvaXdCamJpMVlKOXp4MVMvTk0xRlpNVC9DV3pBZ1NrS3pjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVjeHJzMkpSdTdhWi9vRGFsdXpmRlhFUGRpV1dYY1hDMXNHNW9BQVlBcTlQMzRrODduVWVLUFVISzRnRzNRMkZNRkttaGF1ZmFST1VRdkdERVBQb0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlErY0dFc0QvU3RtNUNPSXZYS2lUVWJtM3l6bVhTT09JRzdkWThWOVgxL1lrTW81TkpFVmdHVzVCeFZLWHdKVTlaZDkvRVFzWlFuN1BXcmk1UXMxaUJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxMzc1MzU0NzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDk2NDAwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdqaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2poLmpzb24iOiAie1wia2V5RGF0YVwiOlwicUQyeWErZ3prVEpBeUQ3STFRM0tYRTVuTWFuOHBNdzhTSU56cVpHbXU4WT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODg4MzQ1NTgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5NjQwMDczNTNcIn0iCn0="  // PUT your SESSION_ID 


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

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_05_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MSxcbiAgICAgICAgOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM0LFxuICAgICAgICA1OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMyLFxuICAgICAgICA2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzLFxuICAgICAgICA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDczLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDU2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM5LFxuICAgICAgICA5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMixcbiAgICAgICAgMjE0LFxuICAgICAgICA3MyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE4LFxuICAgICAgICAzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDM5LFxuICAgICAgICA5MyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMixcbiAgICAgICAgMTQwLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1ZGxqaEtkRTdIbW9aME5lSnh0cjhXRS9wRmZpQ1c2czIxaEZSMXF6ZXZ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5RjNjNHBheFRDdWh5Q0tGdDN3NXB3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjc0MGMwYjk3LTQzZmEtNDRjNy04ZWYwLWM5MTFhZjI2ZjYyMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICA5NCxcbiAgICAgIDIxMCxcbiAgICAgIDI0NixcbiAgICAgIDc3LFxuICAgICAgMTYwLFxuICAgICAgMjQ2LFxuICAgICAgNjEsXG4gICAgICAxMSxcbiAgICAgIDQ2LFxuICAgICAgMTg3LFxuICAgICAgMjA4LFxuICAgICAgNjgsXG4gICAgICAyMDUsXG4gICAgICAzNixcbiAgICAgIDkxLFxuICAgICAgMjM5LFxuICAgICAgMTMzLFxuICAgICAgMTMwLFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICA2NixcbiAgICAgIDgzLFxuICAgICAgMjIwLFxuICAgICAgMTAyLFxuICAgICAgMjQ1LFxuICAgICAgMjQ5LFxuICAgICAgMjE1LFxuICAgICAgNzIsXG4gICAgICAyMjcsXG4gICAgICAxODYsXG4gICAgICAyMjUsXG4gICAgICA4NyxcbiAgICAgIDM2LFxuICAgICAgMzIsXG4gICAgICAxMDYsXG4gICAgICAyOSxcbiAgICAgIDIwNixcbiAgICAgIDU2LFxuICAgICAgMjUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNBVzQxU0VYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTY0MDEwNjA6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NDI1OTUzODEwODQ3MDoyOEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMZW9tYW5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQL2d4L0lCRUpISTRMUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpkNnJYNTNXeGhETDBOK3BnbFN1VDJUajZJU0wxMjBNdUtEUjYyeFpVaU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNDFHOFJMVUR3Z2orVTRrSEJxaHR4VGVXeGxDNnlFY1AzM0FqbzdJV1FxV1RDdFFjMm1NY21pSkZ3Q08xWkVvWVRhSytVZVlBZVkvdmpDeFZrbmEwQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVEZzd0FXQ2Z4bUlscmNaaExCY05janY4Y0tYblpEUVpjMEloU2wrNjgvYW1mY3BTa1VwM0plSjFYY1hzTmRMbjFCZ1BwQ0xZMWRjMEllOFFiRVljQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE2NDAxMDYwOjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI0Njc0MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZVMlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlUyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZFM5ZTJzUzI4SWtYazAzRGs3QjYwMWJwbWJpODQ5VWw0R2NSRzkzbnhuTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MDg2ODY0NjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTI0MjU4OTgzOFwifSIKfQ=="  // PUT your SESSION_ID 


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

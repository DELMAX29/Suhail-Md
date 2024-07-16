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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_46_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMTk5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1LFxuICAgICAgICA0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDc5LFxuICAgICAgICA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDQsXG4gICAgICAgIDU3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY3LFxuICAgICAgICAzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTksXG4gICAgICAgIDE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk2LFxuICAgICAgICA0MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDEzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjksXG4gICAgICAgIDUwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICA5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg2LFxuICAgICAgICA0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6ejFxUE9mRHpRb0F6WXVjKzErclIwY0hzcUlLVnh5aXhEWXllV2tiS3VNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGS293VDF5S1N5U2hwSVllOHBWNnlBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQyYjM2ZTgxLTg2M2EtNGFmMS05ZjJmLTgwNjM2ZDU0YWU1ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDY2LFxuICAgICAgNSxcbiAgICAgIDQ1LFxuICAgICAgNjcsXG4gICAgICAxMzEsXG4gICAgICAyNDgsXG4gICAgICAxMTYsXG4gICAgICAxNjgsXG4gICAgICAxMDcsXG4gICAgICAyMjAsXG4gICAgICAyMjAsXG4gICAgICAxNjMsXG4gICAgICAxOTcsXG4gICAgICA5MixcbiAgICAgIDkzLFxuICAgICAgMTE0LFxuICAgICAgMTMyLFxuICAgICAgMTUxLFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDE4MSxcbiAgICAgIDIzMSxcbiAgICAgIDEwMixcbiAgICAgIDE2MixcbiAgICAgIDE2MCxcbiAgICAgIDE3LFxuICAgICAgMjUxLFxuICAgICAgNDQsXG4gICAgICAyMjUsXG4gICAgICA5NyxcbiAgICAgIDIxOCxcbiAgICAgIDk0LFxuICAgICAgMjA4LFxuICAgICAgNjksXG4gICAgICA3OCxcbiAgICAgIDE0NyxcbiAgICAgIDcxLFxuICAgICAgNDYsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYWlhZS005MVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg5NjI0NDg5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NjAyMDc2NzkyNDQ0NDo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08rbXhJMEtFTkNQMnJRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibklTUG5Sa2FDejlpWHQvaGJ2T0tUOHl6YW1sZzBqYmxCdFZRRnhzTHFsVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSbjlndmNzNXB3WmttaCt0Yy83aW5HOGFUNXo3a0tCWWJGWGh4YWNJSFhqNUlSNmFCd2ZmYU9ydzFaUmdUVmFVdmZ1V1NLSVFuZ2ZVOE54UmQzUGZEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuWTdNMXh2aFluN0VpSlorYm9Kd0RQMStqZnpINjN6RkxISEpnZG1JY05ZR2xHaVY0c1YzS2NNdDNXZXNNczBpV1RmQTJNSGhaNW5rSlBNYVB4QkRDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODk2MjQ0ODk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExNDEyMDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHd0ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd3Ri5qc29uIjogIntcImtleURhdGFcIjpcImNWd0Z4bk0xSi9GZXh6UFZOWUlpR0ZJNjkxUDNON2UwejdRdFh6VmNKbmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjcxMjczNjYyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODg5MzEwMTY1XCJ9Igp9"  // PUT your SESSION_ID 


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

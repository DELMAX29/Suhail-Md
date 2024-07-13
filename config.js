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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_48_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OCxcbiAgICAgICAgOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgMTQyLFxuICAgICAgICA2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMixcbiAgICAgICAgMTcxLFxuICAgICAgICA4NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDg0LFxuICAgICAgICA4MixcbiAgICAgICAgMjEsXG4gICAgICAgIDgxLFxuICAgICAgICA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDYyLFxuICAgICAgICA2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNSxcbiAgICAgICAgNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDgwLFxuICAgICAgICA4NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNCxcbiAgICAgICAgODQsXG4gICAgICAgIDkwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBsaEsyVUQ5UGM1eFBJQWJpTlJGR0FXUzZpSGdCRmI2YzhPb1dWRUJKeEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjYzNzg5NjI0NDg5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUMwRjI5QUMxQzJBQUIwQzEwNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA4ODkzMTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicF9vYkNnUy1UNTJzbW1na0NpZVNvQVwiLFxuICBcInBob25lSWRcIjogXCJiYjNmNmZlZC0zNzVmLTQ4ZTctYmZjOS01NjlkNTRjNzMwMWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgMTgzLFxuICAgICAgMTAwLFxuICAgICAgMjUwLFxuICAgICAgOTksXG4gICAgICAyNTUsXG4gICAgICA1OSxcbiAgICAgIDkxLFxuICAgICAgNzYsXG4gICAgICA2MixcbiAgICAgIDExLFxuICAgICAgOTMsXG4gICAgICAyNTQsXG4gICAgICA2NSxcbiAgICAgIDExNSxcbiAgICAgIDE2MSxcbiAgICAgIDkwLFxuICAgICAgNzksXG4gICAgICAxODgsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgzLFxuICAgICAgMTk5LFxuICAgICAgMTYwLFxuICAgICAgMjQ1LFxuICAgICAgMTUzLFxuICAgICAgMTY0LFxuICAgICAgMTgzLFxuICAgICAgODIsXG4gICAgICAyMDAsXG4gICAgICAyMzMsXG4gICAgICA1MSxcbiAgICAgIDg4LFxuICAgICAgMjAsXG4gICAgICA2MixcbiAgICAgIDE5NixcbiAgICAgIDE2MyxcbiAgICAgIDM3LFxuICAgICAgMSxcbiAgICAgIDEzMyxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUUEgxSDhBN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzg5NjI0NDg5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NjAyMDc2NzkyNDQ0NDoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKcqMOYRkbDjsSGw45BTEwtSsObw47Dh0VS8J+UpVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08rbXhJMEtFTm5meXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibklTUG5Sa2FDejlpWHQvaGJ2T0tUOHl6YW1sZzBqYmxCdFZRRnhzTHFsVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzSTFMb1JUNE1WcVFiUVI4TkdWc2NkRVRyZko3bXlIdlRRSHBPMnF2U0xFbTZRR3JsRWlXaW5vUEhOajlWTzg1MnpwMno5UnZLVzRPY1VlSXhmVGlCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2cytaSEdheHVYZkh2RkhKdnFNclVRRWtKRUJNQ2IxbjRSNFArbTA1NS8vdXpoTlhDRlo4TXdoMFhpTkNWQ1pRdG9ERS9mbkhhWU54VXJneW5TSGJEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3ODk2MjQ0ODk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4ODkzMTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHd0ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUd3Ri5qc29uIjogIntcImtleURhdGFcIjpcImNWd0Z4bk0xSi9GZXh6UFZOWUlpR0ZJNjkxUDNON2UwejdRdFh6VmNKbmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjcxMjczNjYyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwODg5MzEwMTY1XCJ9Igp9"  // PUT your SESSION_ID 


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

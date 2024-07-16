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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_36_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ1LFxuICAgICAgICA5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDUxLFxuICAgICAgICA4OCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgODcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDYxLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICA5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzksXG4gICAgICAgIDYsXG4gICAgICAgIDczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDczLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDEsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0eUZSdFBmZDAvVUJodmR0RFFxYVNSMkVqQlpZVERhRjhLc24zbHNWRVh3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxNjQwMTA2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTUwMDdDNjE2MzMxNzI0N0U5RDAyRDE4QzgyNjBEQkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDc1NzgwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInh5X0F4X0oxUjVPd2RXazM2S2NRZ0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmUxODQwMzItMGY2Zi00MWVlLTk0ODAtYjViYmEyZWM1ODI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDIwNSxcbiAgICAgIDEyMCxcbiAgICAgIDcyLFxuICAgICAgMzgsXG4gICAgICA4NixcbiAgICAgIDExOSxcbiAgICAgIDk2LFxuICAgICAgMTE2LFxuICAgICAgMTk3LFxuICAgICAgMTU2LFxuICAgICAgNzMsXG4gICAgICAxNzYsXG4gICAgICAxMTAsXG4gICAgICA2MyxcbiAgICAgIDEwMyxcbiAgICAgIDEyMyxcbiAgICAgIDEzNCxcbiAgICAgIDQ3LFxuICAgICAgMjA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NSxcbiAgICAgIDE0NCxcbiAgICAgIDk0LFxuICAgICAgMTgzLFxuICAgICAgNjIsXG4gICAgICA2MSxcbiAgICAgIDE3MCxcbiAgICAgIDYwLFxuICAgICAgMTc3LFxuICAgICAgOTksXG4gICAgICAxOSxcbiAgICAgIDE3OCxcbiAgICAgIDM1LFxuICAgICAgMTg5LFxuICAgICAgMTg2LFxuICAgICAgMjcsXG4gICAgICA4OSxcbiAgICAgIDgzLFxuICAgICAgNDcsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVlNRzJORzdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNjQwMTA2MDoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ0MjU5NTM4MTA4NDcwOjI0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkxlb21hblwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A3Z3gvSUJFTG1RMXJRR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiamQ2clg1M1d4aERMME4rcGdsU3VUMlRqNklTTDEyME11S0RSNjJ4WlVpTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzdUxqTUJZQWFNZUNxSzZhSWhuQlk3M1BLYkh3MHNRaU5nTjRtOEJhQnFnNTBMMW1VcXhrYy9jNlRucndFVlF2OTBJR2E2YjJtblB4dnlGL0lyTG5BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoZ2lkQTNSWEZYVEU0K2tGT0R1MzZrSnpNeTdYcVJ5ZFFDSzl5blc4Ukw3d2pUSXRDZFBlWSsxSUZvSFE1YTJnemxTZ3RVWVhqU1RGRUwxdEVQeWxEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTY0MDEwNjA6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDc1NzcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS3h3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLeHcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0enJSbENUTjZPYklqMTJORXJvZlhTZ1lwcml2MWlrY0d5NXhtYm1kejIwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUwODY4NjQ2MixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNzc0NzU2MzMxXCJ9Igp9"  // PUT your SESSION_ID 


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

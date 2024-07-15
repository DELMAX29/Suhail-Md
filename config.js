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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_27_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMixcbiAgICAgICAgNjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc2LFxuICAgICAgICA1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3LFxuICAgICAgICA3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMixcbiAgICAgICAgODAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjYsXG4gICAgICAgIDk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAzNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDYzLFxuICAgICAgICA3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTY1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM3LFxuICAgICAgICA0NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDksXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDUyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTczLFxuICAgICAgICA4MixcbiAgICAgICAgMTU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0LFxuICAgICAgICAxMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwLFxuICAgICAgICA1NixcbiAgICAgICAgMTExLFxuICAgICAgICA2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia1hnUEQxeFFOQVdGTURmVU1tZFoxZUN2SUI1UXhrUTRLSklreXdtTlVLRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidGFoTThIZG9SZDJZZkM3SHFPclM5UVwiLFxuICBcInBob25lSWRcIjogXCI2Y2ViM2E2Yy05ZTc0LTRhOWItODBmYS01MTBlNTAzNGEzNmFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgyLFxuICAgICAgMjE5LFxuICAgICAgMjI5LFxuICAgICAgMjI3LFxuICAgICAgMTcsXG4gICAgICA1NSxcbiAgICAgIDI0LFxuICAgICAgMTg5LFxuICAgICAgMTY1LFxuICAgICAgMTE1LFxuICAgICAgMjEyLFxuICAgICAgNjcsXG4gICAgICAxNSxcbiAgICAgIDE2LFxuICAgICAgODMsXG4gICAgICA0MCxcbiAgICAgIDQ2LFxuICAgICAgMjQ5LFxuICAgICAgMTMwLFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTMwLFxuICAgICAgNzIsXG4gICAgICAyMjksXG4gICAgICAxMDMsXG4gICAgICAxNjMsXG4gICAgICAxMjEsXG4gICAgICAyNixcbiAgICAgIDE4MixcbiAgICAgIDQ0LFxuICAgICAgMjM1LFxuICAgICAgMjUwLFxuICAgICAgMjEwLFxuICAgICAgMTY3LFxuICAgICAgOTYsXG4gICAgICA2NyxcbiAgICAgIDI0MSxcbiAgICAgIDIzMyxcbiAgICAgIDE5OSxcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGM0sxNUJaUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE2NDAxMDYwOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDQyNTk1MzgxMDg0NzA6MjJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTGVvbWFuXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDdneC9JQkVMaU0xclFHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqZDZyWDUzV3hoREwwTitwZ2xTdVQyVGo2SVNMMTIwTXVLRFI2MnhaVWlNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1nL3d0SFYraWtKMUJ3NmF3aWh5Q1Z3MXl6dUNwSm1VbzlMOHZ3U1FvVkR4QzAwWVI4SEFIa21Ed0pzZkdCSXJ0OEpzeEIyNHdkOUtWdTIvVlhqc0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlE1TlRXcHNxQ01WRGFUMXEvdWVFb25JMXk0U1huamV6aTZlOXo5N3A3KzViVkFYU0oxQUFhSjhacEFXNU1ONzRuL2lBQ2MranpBYWk2U056Z0E4NEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNjQwMTA2MDoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNzUyNTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLeHdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUt4dy5qc29uIjogIntcImtleURhdGFcIjpcIjR6clJsQ1RONk9iSWoxMk5Fcm9mWFNnWXByaXYxaWtjR3k1eG1ibWR6MjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTA4Njg2NDYyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3NzQ3NTYzMzFcIn0iCn0="  // PUT your SESSION_ID 


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

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_15_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMixcbiAgICAgICAgMTEzLFxuICAgICAgICA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTksXG4gICAgICAgIDYwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNixcbiAgICAgICAgODIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE1LFxuICAgICAgICA0NyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMTQ3Y2M4bVp4Z3ROYldETHRWMU81bmlUZzJoVXZQU1MwK1pCRVJnb3hPYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3MTY0MDEwNjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkExRUQwNEZBMzkwMUU1MUVFQzE4QjAyOEEyMEREQTI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU5Mjk0OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpTml0SlB2Q1Q0aVRKM0hHalJhNldnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM1ODIxNTlmLTQzOTQtNDE1ZC04NzFjLTU0MGI0NjI4NTU2OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDE0OSxcbiAgICAgIDE5MSxcbiAgICAgIDE0MixcbiAgICAgIDEyMyxcbiAgICAgIDEzMSxcbiAgICAgIDE1NCxcbiAgICAgIDIyNixcbiAgICAgIDEyOSxcbiAgICAgIDg3LFxuICAgICAgMjIyLFxuICAgICAgMjA3LFxuICAgICAgMzYsXG4gICAgICA2MixcbiAgICAgIDYyLFxuICAgICAgMjUwLFxuICAgICAgMTMxLFxuICAgICAgMTc0LFxuICAgICAgMTMsXG4gICAgICA3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjYsXG4gICAgICAxMixcbiAgICAgIDIwOCxcbiAgICAgIDIyNSxcbiAgICAgIDE1NCxcbiAgICAgIDIwOCxcbiAgICAgIDc0LFxuICAgICAgMTY5LFxuICAgICAgNTUsXG4gICAgICAxMDksXG4gICAgICAxNjcsXG4gICAgICAyMjgsXG4gICAgICA2NCxcbiAgICAgIDkyLFxuICAgICAgMTA1LFxuICAgICAgMTQsXG4gICAgICA2NCxcbiAgICAgIDI0MSxcbiAgICAgIDc5LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjc2R04zWldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNjQwMTA2MDozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ0MjU5NTM4MTA4NDcwOjMxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkxlb21hblwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00vTTBOOERFT2pZOWJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYnRMVU16ejNtbWs2RWlxTmhkUStaTit2MS80czU0QnlDSkZVYWdDSDFUYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJKZ0ZlUElJb21ZZjh3ZVNSZVFSeE9mTmZidEhCQ200Smp4MUp2TkdsMktDWjU4eE93a2hnbGFrV0VFNGNmUnJrSEZ0TWZNYnAyRlU0SGloaHNGV29Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1eExKOWJ5V2VYdndxOGZVaDRsTW0zc0RiK3JXRVFzQlh5T2NBZGZUR2dlWVpwSjEzQjZSRmFlbmdLMVNKTDFKbTJya2U1MUtNY0QxL01SWEZ2R3VDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTY0MDEwNjA6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU5Mjk0MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUc3VlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzdWLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaDhWQlEyRkRTWVFIclZhN3htSldaeHBlQUM4SXpsZTFQOTYyZEdCK24wZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDA1ODU2MzM1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1OTI1MDY2NzFcIn0iCn0="  // PUT your SESSION_ID 


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

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_49_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk0LFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2LFxuICAgICAgICA5OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUzLFxuICAgICAgICA4MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1bkFhUVd4dkIxV2ovQ2FxMzliQTRnQytkbnZlNHJnUFJUN2tPVHdxZ3AwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2SlEzZWZDNFNuNmtmU3J1cUlmMS1nXCIsXG4gIFwicGhvbmVJZFwiOiBcImVkM2NmZTU5LTI5ZTAtNDJiMC04NzYyLWJiZGNkYTgwMzIwNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDIxNyxcbiAgICAgIDIyLFxuICAgICAgMTU5LFxuICAgICAgMTkxLFxuICAgICAgMjQyLFxuICAgICAgOTUsXG4gICAgICAyNSxcbiAgICAgIDEwMSxcbiAgICAgIDEwNCxcbiAgICAgIDIzMyxcbiAgICAgIDMzLFxuICAgICAgMTUxLFxuICAgICAgMjUwLFxuICAgICAgNDQsXG4gICAgICAxLFxuICAgICAgNDIsXG4gICAgICA2OCxcbiAgICAgIDU1LFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA1LFxuICAgICAgMjQsXG4gICAgICAyMDgsXG4gICAgICAyNDIsXG4gICAgICAxNTAsXG4gICAgICAxMjQsXG4gICAgICA2LFxuICAgICAgMTcwLFxuICAgICAgMTUsXG4gICAgICAyMDIsXG4gICAgICAyNTIsXG4gICAgICAxNjgsXG4gICAgICA5NSxcbiAgICAgIDE5NCxcbiAgICAgIDE5NCxcbiAgICAgIDE5NixcbiAgICAgIDQ1LFxuICAgICAgMTY0LFxuICAgICAgODIsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZR1YzVFFTRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE2Nzg5NTE1OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1OTMxNzk2OTg2Njc5MTo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkp1aWNlIFdybGQ5OTnwn6eD8J+Mj1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00rTXQ5Z0JFTWVXMXJRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNmd4ZjlOZDBvVFN4YTBoZGl2YkdOQTVZSHVBbG1RVXRPeWs1ZFUvT05HTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwTGF4RUFrS3d3TTJkcUhZZmhLdWNzQUpYaHI0aVdpcjlNVzgzWmloa2plWGd6MWVNZVlwWTdiRExyTmtoUWp1WmlKcXNuR0sxTlp2VDB2ZXphMHFBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtTCtKbHhhaE1XNEZqeE5vRzlmRFV2TXpUL2luaTJtVlhtV1RNTUY3anpMdThQRTFud2dNV09nTFpEYmtZcjBNc2RPZ2hFV05XelJodHkrTVkvZ2JCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3MTY3ODk1MTU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDc2NTU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRG05XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEbTkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYSzU3ek5RQzhNeG5HQVhOMytVNkJZcVA1MUYyS2hNSzBVdG8vNWkxY0RBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ1Mzg4NzU2NyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEwNzYyOTc5NTZcIn0iCn0="  // PUT your SESSION_ID 


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

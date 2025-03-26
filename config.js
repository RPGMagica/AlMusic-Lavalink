

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Sick Beats", 
  activityType: "Playing",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
        name: "Node #1",
        host: "lavalinkv3-id.serenetia.com",
        port: 443,
        password: "BatuManaBisar",
        reconnectTimeout: 5000,
        reconnectTries: Infinity,
        secure: true
    }
  ]
}

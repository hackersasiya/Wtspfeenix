export default async function displayLoadingScreen(conn, from) {
    const loadingStages = [
      "ꜰᴇᴇɴɪx-ᴠ2ʟᴏᴀᴅɪɴɢ 《 █▒▒▒▒▒▒▒▒▒▒▒》10%,",
      "ꜰᴇᴇɴɪx-ᴠ2ʟᴏᴀᴅɪɴɢ 《 ████▒▒▒▒▒▒▒▒》30%,",
      "ꜰᴇᴇɴɪx-ᴠ2ʟᴏᴀᴅɪɴɢ 《 ███████▒▒▒▒▒》50%,",
      "ꜰᴇᴇɴɪx-ᴠ2ʟᴏᴀᴅɪɴɢ 《 ██████████▒▒》80%,",
      "ꜰᴇᴇɴɪx-ᴠ2ʟᴏᴀᴅɪɴɢ 《 ████████████》100%,",
      "ꜰᴇᴇɴɪx ʜᴀs ʟᴏᴀᴅᴇᴅ ᴄᴏᴍᴘʟᴇᴛʟʏ"
    ];
  
    try {
      const { key } = await conn.sendMessage(from, { text: 'ʟᴏᴀᴅɪɴɢ...' });
  
      for (let i = 0; i < loadingStages.length; i++) {
        await conn.relayMessage(from, {
          protocolMessage: {
            key: key,
            type: 14,
            editedMessage: {
              conversation: loadingStages[i]
            }
          }
        }, {});
      }
    } catch (error) {
      console.error('Error displaying loading screen:', error);
    }
  }
  

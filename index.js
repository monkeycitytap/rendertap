const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7797629643:AAEWHOonlUro9gfOHAM2F_TODPJQCWonzSw";
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express()
app.use(express.json())
const web_link = "https://monkeycity.netlify.app/";
const community_link = "https://t.me/monkeycity_community";


bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
    ctx.replyWithMarkdown(`*Hey, ${userName}! it's Monkey! 🌟 Your go-to app for crypto trading - all the cool coins and tokens, right in your pocket!📱

      Now we're rolling out our Telegram mini app! Start farming points now, and who knows what cool stuff you'll snag with them soon! 🚀
      
      Got friends? Bring 'em in! The more, the merrier! 🌱
      
      Remember: Monkey City is where growth thrives and endless opportunities bloom! 🌼`, {
              reply_markup: {
                  inline_keyboard: [
                    [{ text: " 🕹️ Let'go!", web_app: { url: urlSent } }],
                    [{ text: "Join Community ", url: community_link }]
                  
                  ],
                  in: true
              },
          });
        });
      
        
        bot.launch();
        
      app.listen(3000, () => {
          console.log("server is me and now running")
      })

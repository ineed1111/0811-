import TelegramBot from "node-telegram-bot-api";

// 從環境變數讀取 BOT Token
const token = process.env.BOT_TOKEN;
if (!token) {
    console.error("❌ 請設定 BOT_TOKEN 環境變數");
    process.exit(1);
}

// 建立 Telegram Bot
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `你剛剛說：${msg.text}`);
});

console.log("🤖 Bot 已啟動");

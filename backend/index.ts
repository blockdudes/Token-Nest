const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cron = require('node-cron');

const token = '7107892533:AAHyF4K92sj9UXuqUU4ZmjU3y_rlQunyQsU'; // Replace with your bot's token
const bot = new TelegramBot(token, { polling: true });
// const bot = new TelegramBot(token, )
const app = express();

let users: string[] = [];

// Listen for '/start' command to register the user
bot.onText(/\/start/, (msg: any) => {
    const chatId = msg.chat.id;
    if (!users.includes(chatId)) {
        users.push(chatId);
        bot.sendMessage(chatId, "Welcome! You will receive notifications twice a day.");
    } else {
        bot.sendMessage(chatId, "You are already registered.");
    }
});

// Listen for any messages
bot.on('message', (msg: any) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    // Handle user questions here
    if (messageText !== '/start') {
        bot.sendMessage(chatId, `You asked: ${messageText}.We'll get back to you soon.`);
        // Add logic to process or save the question
    }
});

// Schedule morning notification (8:00 AM)
cron.schedule('0 8 * * *', () => {
    users.forEach(chatId => {
        bot.sendMessage(chatId, "Good morning! Here is your daily notification.");
    });
});

// Schedule night notification (8:00 PM)
cron.schedule('0 20 * * *', () => {
    users.forEach(chatId => {
        bot.sendMessage(chatId, "Good night! Here is your nightly notification.");
    });
});

// Start Express server (optional)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
# 🤖 Telebot - Telegram Wheel Spin Game

## 🎯 Overview
**Telebot** is a fun and engaging Telegram bot that allows users to participate in a **wheel spinning game** to win points, earn rewards, and refer friends for additional bonuses. It is powered by **Node.js**, **MongoDB**, and the **Telegraf package**, ensuring a smooth and interactive gaming experience.

---

## 🚀 Features
✅ **Wheel Spinning Game** - Users spin the wheel to win points and rewards.  
✅ **Referral System** - Invite friends and earn additional points.  
✅ **Telegram Bot Integration** - Fully functional within Telegram using Telegraf.  
✅ **Real-time Leaderboard** - Track top players based on points earned.  
✅ **User Authentication** - Secure login and point tracking.  
✅ **Admin Controls** - Manage users, rewards, and referrals.  
✅ **Web Dashboard** - EJS-powered UI for tracking user activity.  
✅ **Secure Database** - MongoDB for storing user data, referrals, and rewards.  

---

## 🏗️ Project Structure
```bash
muke2110-telebot/
    ├── package.json
    ├── server.js
    └── views/
        ├── join.ejs
        ├── page.ejs
        ├── images/
        ├── scripts/
        │   ├── join.js
        │   └── script.js
        └── styles/
            ├── join.css
            └── styles.css
```

---

## ⚙️ Installation
### 1️⃣ Prerequisites
- **Node.js & npm** installed. Get it [here](https://nodejs.org/).
- **MongoDB** installed locally or use MongoDB Atlas.
- **Telegram Bot Token** from [BotFather](https://t.me/BotFather).

### 2️⃣ Clone & Install Dependencies
```bash
git clone https://github.com/muke2110/telebot.git
cd telebot
npm install
```

### 3️⃣ Configure Environment Variables
1. Create a `.env` file in the root directory.
2. Add the following:
   ```env
   BOT_TOKEN=your_telegram_bot_token
   MONGO_URI=your_mongodb_connection_string
   ```

### 4️⃣ Start the Bot
```bash
node server.js
```

The bot will be active on Telegram! 🎉

---

## 🔧 How It Works
🔹 Users interact with the bot via Telegram commands.  
🔹 They spin the wheel and earn points.  
🔹 Users can refer friends using their unique referral code.  
🔹 The leaderboard updates in real-time.  
🔹 Admins can manage users and rewards.  

---

## 👥 Contributors
- **Backend Development**: [Mukesh Nagineni](https://github.com/muke2110)  
- **Frontend Development**: [Jaya Prakash Ravi](https://github.com/rjayaprakashnarayanarao)
- **App Promotion**: [Venkat Kumar Chirra](https://github.com/chirravenkatkumar)

---

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📞 Contact
For any queries or suggestions, feel free to reach out!  
📧 Email: mukesh.nagineni@gmail.com  
📱 Phone: +91 91003 80866  
🌐 GitHub: [muke2110](https://github.com/muke2110)  

---

✨ **Spin the wheel, win rewards, and enjoy gaming on Telegram!** 🎡🎁


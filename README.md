# 🧃 Message in a Bottle

**Message in a Bottle** is a minimalist, anonymous chat platform that connects two random users in a one-on-one text conversation. Users press a single button — _"Cast a Bottle"_ — and are paired with someone else who's also waiting. It's like tossing a message into the digital sea and seeing who finds it.

## 🌐 Live Features

- 🔐 Simple login system to prevent abuse
- 🧃 “Cast a Bottle” button connects to a random stranger
- 📡 WebSocket-based real-time chat
- 🤖 AI moderation to detect inappropriate or illegal content
- 🚫 Automatic bans for repeat offenders
- 🪪 Anonymous usernames and ephemeral chats
- 🔄 Chat ends when one user disconnects or breaks the rules

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- **React** (via Vite)
- **Axios** for API calls
- **Tailwind CSS** for modern, responsive styling

### 🧠 Backend
- **Django** with **Django Channels** for WebSockets
- **PostgreSQL** for user and message persistence
- **AI moderation** via third-party content moderation API (affordable, fast, and customizable)

---

## 📁 Project Structure


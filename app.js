// Import Firebase SDK (v9+ modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Your Firebase config (replace with your own from Firebase Console)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const messagesRef = ref(db, "messages");

// DOM elements
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

// Send message
sendBtn.addEventListener("click", () => {
  const text = messageInput.value.trim();
  if (!text) return;

  push(messagesRef, { sender: "user", text });
  messageInput.value = "";
});

// Listen for new messages
onChildAdded(messagesRef, (snapshot) => {
  const msg = snapshot.val();
  displayMessage(msg.sender, msg.text);

  // Simple bot auto-reply
  if (msg.sender === "user") {
    setTimeout(() => {
      const reply = generateAutoReply(msg.text);
      push(messagesRef, { sender: "bot", text: reply });
    }, 800);
  }
});

// Display message
function displayMessage(sender, text) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.textContent = `${sender}: ${text}`;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Simple auto-reply function
function generateAutoReply(userMessage) {
  if (userMessage.toLowerCase().includes("hello")) {
    return "Hi there! How can I help you?";
  }
  return "Thanks for your message!";
}
const bell = document.getElementById("notificationBell");

function showNotification(message) {
  if (!bell) return;
  bell.style.color = "red"; // highlight when new message comes
  bell.title = message;
}

// Example: Simulate incoming message
setTimeout(() => {
  showNotification("New message from owner!");
}, 5000);

bell.addEventListener("click", () => {
  bell.style.color = ""; // reset color
  alert(bell.title || "No new notifications");
});

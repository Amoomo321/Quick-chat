# Quick Chat — Coursework Prototype (HTML/CSS/JS)

This is a lightweight prototype of **Quick Chat**, created for the *Distributed and Mobile Systems* assignment.

## What’s Included (meets assignment items)
- **Sign up/Login:** Fake login (no backend) via `index.html`. Stores username in `localStorage` for the session.
- **Send messages:** Compose and send messages on `chat.html`.
- **View message history:** Messages are saved per room into `localStorage` and persist in the browser.
- **Notifications:** A simple in-app notification area and a bell button to simulate an incoming message.
- **Platform decision:** Implemented as a **web app (PWA-ready)** so it runs on **Android and iOS** through the browser (or can be installed to home screen).

## How to Run
1. **Extract** the ZIP first (don’t open files directly inside the ZIP preview).
2. Open `index.html` in any modern browser (Chrome/Edge/Firefox/Safari).
3. Enter any username and password (demo) → you’ll be redirected to the chat.
4. Use the 🔔 button to simulate a new message notification.

> If you only see a blank/basic page, you likely opened `index.html` **inside the ZIP**. Extract and try again.

## Optional: Host Online (if a link is requested)
- **GitHub Pages:** push the folder and enable Pages → your app is live.
- **Netlify:** drag-and-drop the folder.
- **Firebase Hosting:** `firebase init hosting` → `firebase deploy`.

## Files
- `index.html` — login screen
- `chat.html` — chat UI
- `css/style.css` — styles
- `js/app.js` — logic (localStorage)
- `manifest.json` — basic PWA manifest
- `README.md` — this document

## Future Work
- Replace localStorage with Firebase Realtime Database for true multi-user chat.
- Add push notifications with Firebase Cloud Messaging.
- Add user profiles and typing indicators.

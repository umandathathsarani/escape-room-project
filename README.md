# 🕵️‍♀️ The Midnight Mansion - Interactive Escape Room

**Live Demo:** [Play the Game Here](https://umanda-escape-room.netlify.app/)

## 📖 Overview
The Midnight Mansion is a fully interactive, browser-based escape room experience built entirely with Vanilla web technologies. Players are trapped inside a mysterious estate and have exactly 15 minutes to navigate multiple rooms, uncover hidden clues, solve logic puzzles, and escape before the security system locks down. 

This project was built to demonstrate advanced Front-End development skills, including DOM manipulation, state management, HTML5 APIs, and responsive design.

## ✨ Technical Features
* **Persistent State Management:** Utilizes `localStorage` and `sessionStorage` to track the player's ticking timer, inventory items, and current puzzle states across multiple separate HTML pages.
* **Interactive Physics & Puzzles:** Features custom drag-and-drop mechanics (HTML5 Drag and Drop API) and interactive rotation puzzles using CSS transforms and JavaScript math logic.
* **Global Audio System:** Implements the HTML5 Audio API to trigger dynamic sound effects for UI clicks, penalty buzzers, and mechanical unlocking success cues.
* **Dynamic Time Penalty System:** A smart hint system that dynamically subtracts time from the player's active global clock while rendering temporary UI clues.
* **Local Leaderboard:** Saves and renders an archive of past player names, outcomes, and completion times in a responsive data table.
* **Responsive & Cinematic UI:** Fully mobile-responsive utilizing CSS Flexbox and Media Queries, complete with custom CSS keyframe animations for smooth, cinematic page transitions.

## 🛠️ Tech Stack
* **HTML5:** Semantic structure and drag-and-drop APIs.
* **CSS3:** Custom properties (variables), Flexbox, responsive media queries, and keyframe animations.
* **JavaScript (ES6+):** Modular scripts, event delegation, time parsing, and local storage manipulation.
* **Hosting:** Deployed seamlessly via Netlify.

## 📂 Project Structure
```text
├── assets/
│   ├── audio/        # Sound effects (clicks, success, errors)
│   ├── css/          # Global styles, puzzles, and leaderboard layouts
│   ├── icons/        # Favicon
│   ├── images/       # 16:9 AI-generated cinematic room wallpapers
│   └── js/           # Modular game logic (timer, puzzles, audio, leaderboard)
├── index.html        # Entry point (The Foyer)
├── library.html      # Puzzle Room 1
├── gallery.html      # Puzzle Room 2
├── greenhouse.html   # Puzzle Room 3
├── study.html        # Puzzle Room 4
├── basement.html     # The Final Vault
├── success.html      # Victory Screen
├── game-over.html    # Failure Screen
└── leaderboard.html  # Local Player Archives
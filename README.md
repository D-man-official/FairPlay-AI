# 🏏 FairPlay AI — Gully Cricket Team Balancer

> **No more unfair teams. No more boring matches. Just pure fun in every gully cricket game.**

---

## 📌 About the Project

FairPlay AI is a smart, fully offline web application that creates **perfectly balanced cricket teams** in seconds. Whether it's a gully match on Sunday, a college fest tournament, or an office cricket event — FairPlay AI ensures both teams are competitive, fun, and fair.

Built as a single HTML file with zero dependencies and no backend — just open it in any browser and it works.

---

## 🎯 Problem Statement

Every cricket fan knows this pain:

- Friends gather for a gully match
- One captain picks all the star players
- Other team gets only beginners
- Match ends in 10 overs — 120 vs 45
- Fun is gone. Arguments start. People leave

This happens at gully level, college fests, and office tournaments **every single weekend.**

FairPlay AI solves this in **under 3 seconds.**

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧠 Smart Balancing | Snake Draft + 30-round swap optimization algorithm |
| 🎚️ Skill Sliders | Rate each player on Batting, Bowling, Fielding & Experience |
| 👑 Captain Picker | Auto-suggests the best captain for each team with reason |
| 📊 Balance Score | Shows how equal the teams are (e.g. 97.4%) |
| ⚡ Key Matchups | AI-generated exciting player vs player matchups to watch |
| 🎉 Confetti Animation | Fires when balance score is above 93% |
| 📱 WhatsApp Share | One click to share full team result on WhatsApp |
| ⚙️ Demo Mode | Pre-loads 12 local Siliguri players for instant demo |
| 🌙 Dark Theme | Premium cricket-green dark UI |
| 📴 Works Offline | No API, no internet needed — fully self-contained |

---

## 🚀 How to Run

No installation. No setup. No API key.

```
1. Download fairplay-ai.html
2. Open it in any browser (Chrome, Firefox, Edge)
3. That's it — it works instantly
```

---

## 🧠 How the Algorithm Works

FairPlay AI uses a **3-step intelligent balancing system:**

### Step 1 — Player Scoring
Each player gets an **Overall Score** calculated as:

```
Overall Score = (Batting × 0.35) + (Bowling × 0.30) + (Fielding × 0.20) + (Experience × 0.15)
```

Batting is weighted highest because in gully cricket, runs win matches.

### Step 2 — Snake Draft
Players are sorted by score and distributed using the **Snake Draft method** — the same technique used in real professional sports drafts:

```
Round 1:  A  →  B
Round 2:  B  →  A
Round 3:  A  →  B  ...and so on
```

This naturally balances the top and bottom talent across both teams.

### Step 3 — Swap Optimization
After the draft, the algorithm runs **30 rounds of pairwise swaps** — testing every possible player exchange between the two teams and keeping the swap only if it reduces the score gap. This fine-tunes the result to near-perfect balance.

### Captain Selection
Captain is chosen as the player with the highest combined **Experience (60%) + Batting (40%)** score — the most experienced and reliable batsman in each team.

---

## 🖥️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | Pure CSS3 (no framework) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Bebas Neue + Plus Jakarta Sans |
| Animations | CSS Keyframes |
| Storage | None — fully stateless |
| Backend | None — runs 100% in browser |

---

## 📁 Project Structure

```
fairplay-ai/
│
└── fairplay-ai.html       # Complete app — single file
```

Everything — HTML, CSS, and JavaScript — lives in one self-contained file. No build step, no npm, no framework.

---

## 📸 App Screens

### 🏠 Home / Hero
- Big animated headline with cricket ball in nav
- "Create Match" and "Load Demo" buttons
- Dark cricket-pitch green theme

### 👥 Player Input
- Add unlimited players
- Sliders for Batting, Bowling, Fielding, Experience (1–10)
- Role selector: Batsman / Bowler / All-Rounder / Wicket-Keeper
- Live player count badge

### ⚡ Loading Screen
- Bouncing cricket ball animation
- "FairPlay AI is Balancing Teams..." with animated dots

### 🏆 Results Screen
- Team A (Blue) vs Team B (Red) cards
- Captain with crown icon + reasoning
- Skill dots for each player
- Animated batting & bowling stat bars
- Balance Score badge with pulse animation
- Confetti rain when score ≥ 93%
- FairPlay AI explanation in Hinglish
- Key Matchups section
- WhatsApp share button

---

## 🗺️ Local Team Names

The app uses **Siliguri & North Bengal flavoured** team names:

- Siliguri Smashers
- Gully Gladiators
- North Bengal Kings
- Matigara Mavericks
- Bagh Bazaar Blasters
- Pradhan Nagar Panthers
- Hill Cart Heroes
- Kanchenjunga Crushers
- Teesta Tigers
- Coronation Bridge Chargers

---

## 🔮 Future Scope

- [ ] 3-team and 4-team tournament support
- [ ] Save match history in localStorage
- [ ] Player profile cards with match stats
- [ ] Tournament bracket generator
- [ ] PWA support — install as mobile app
- [ ] QR code sharing instead of WhatsApp link
- [ ] Bengali language UI option

---

## 👨‍💻 Built By

**FairPlay AI** was built as a hackathon project to solve a real, everyday problem faced by cricket fans across India.

> *"Yeh sirf ek tool nahi — yeh AI for real India hai."*

---

## 📄 License

This project is open source and free to use for personal and educational purposes.

---

<p align="center">
  Built with ❤️ for Gully Cricket lovers across India 🏏
</p>

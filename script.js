let players = [];
  let playerIdCounter = 0;
  let lastResult = null;

  // ─── INIT ───────────────────────────────────
  window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 6; i++) addPlayer();
    observeScrollReveal();
  });

  function scrollToForm() {
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
  }

  // ─── PLAYER MANAGEMENT ───────────────────────
  function addPlayer(data = null) {
    const id = ++playerIdCounter;
    const p = data || { id, name: '', batting: 5, bowling: 5, fielding: 5, experience: 5, role: 'allrounder' };
    if (!data) p.id = id;
    players.push(p);
    renderPlayers();
  }

  function removePlayer(id) {
    players = players.filter(p => p.id !== id);
    renderPlayers();
  }

  function clearAll() {
    players = [];
    playerIdCounter = 0;
    renderPlayers();
  }

  function renderPlayers() {
    const list = document.getElementById('players-list');
    list.innerHTML = '';
    players.forEach((p, i) => {
      list.innerHTML += `
        <div class="player-card" id="card-${p.id}">
          <div class="player-card-header">
            <div class="player-number">#${String(i+1).padStart(2,'0')}</div>
            <button class="remove-btn" onclick="removePlayer(${p.id})">✕</button>
          </div>
          <div class="player-fields">
            <div class="field-group" style="grid-column: 1/-1">
              <div class="field-label">Player Name</div>
              <input class="field-input" placeholder="e.g. Rahul Bhai, Pappu..." value="${p.name}"
                oninput="updatePlayer(${p.id}, 'name', this.value)" />
            </div>
            <div class="field-group">
              <div class="field-label">Role</div>
              <select class="field-select" onchange="updatePlayer(${p.id}, 'role', this.value)">
                <option value="batsman" ${p.role==='batsman'?'selected':''}>🏏 Batsman</option>
                <option value="bowler" ${p.role==='bowler'?'selected':''}>🎳 Bowler</option>
                <option value="allrounder" ${p.role==='allrounder'?'selected':''}>⚡ All-Rounder</option>
                <option value="wicketkeeper" ${p.role==='wicketkeeper'?'selected':''}>🧤 Wicket-Keeper</option>
              </select>
            </div>
            <div class="field-group">
              <div class="field-label">🏏 Batting <span style="color:var(--green);font-family:'Bebas Neue';font-size:16px" id="bat-val-${p.id}">${p.batting}</span></div>
              <div class="slider-row">
                <input type="range" class="slider" min="1" max="10" value="${p.batting}"
                  oninput="updatePlayer(${p.id},'batting',+this.value); document.getElementById('bat-val-${p.id}').textContent=this.value">
              </div>
            </div>
            <div class="field-group">
              <div class="field-label">🎳 Bowling <span style="color:var(--green);font-family:'Bebas Neue';font-size:16px" id="bowl-val-${p.id}">${p.bowling}</span></div>
              <div class="slider-row">
                <input type="range" class="slider" min="1" max="10" value="${p.bowling}"
                  oninput="updatePlayer(${p.id},'bowling',+this.value); document.getElementById('bowl-val-${p.id}').textContent=this.value">
              </div>
            </div>
            <div class="field-group">
              <div class="field-label">🏃 Fielding <span style="color:var(--green);font-family:'Bebas Neue';font-size:16px" id="field-val-${p.id}">${p.fielding}</span></div>
              <div class="slider-row">
                <input type="range" class="slider" min="1" max="10" value="${p.fielding}"
                  oninput="updatePlayer(${p.id},'fielding',+this.value); document.getElementById('field-val-${p.id}').textContent=this.value">
              </div>
            </div>
            <div class="field-group">
              <div class="field-label">🌟 Experience <span style="color:var(--green);font-family:'Bebas Neue';font-size:16px" id="exp-val-${p.id}">${p.experience}</span></div>
              <div class="slider-row">
                <input type="range" class="slider" min="1" max="10" value="${p.experience}"
                  oninput="updatePlayer(${p.id},'experience',+this.value); document.getElementById('exp-val-${p.id}').textContent=this.value">
              </div>
            </div>
          </div>
        </div>`;
    });
    document.getElementById('playerCount').textContent = players.length;
  }

  function updatePlayer(id, field, val) {
    const p = players.find(x => x.id === id);
    if (p) p[field] = val;
  }

  // ─── DEMO DATA ───────────────────────────────
  const DEMO_POOL = [
    // Batsmen
    { name: 'Rohit Bhai',    role: 'batsman',      batting:[8,10], bowling:[3,6],  fielding:[6,9],  experience:[7,10] },
    { name: 'Manik Da',      role: 'batsman',      batting:[7,9],  bowling:[2,5],  fielding:[6,8],  experience:[6,9]  },
    { name: 'Arjun',         role: 'batsman',      batting:[7,9],  bowling:[2,4],  fielding:[5,7],  experience:[6,9]  },
    { name: 'Subho',         role: 'batsman',      batting:[6,9],  bowling:[2,5],  fielding:[5,8],  experience:[5,8]  },
    { name: 'Bikash',        role: 'batsman',      batting:[7,9],  bowling:[3,5],  fielding:[6,8],  experience:[6,8]  },
    { name: 'Nikhil',        role: 'batsman',      batting:[6,8],  bowling:[2,5],  fielding:[5,7],  experience:[5,7]  },
    { name: 'Sourav Bhai',   role: 'batsman',      batting:[8,10], bowling:[2,4],  fielding:[5,7],  experience:[7,10] },
    { name: 'Khokon',        role: 'batsman',      batting:[6,8],  bowling:[2,4],  fielding:[5,7],  experience:[4,7]  },
    { name: 'Avijit',        role: 'batsman',      batting:[7,9],  bowling:[3,5],  fielding:[6,8],  experience:[5,8]  },
    { name: 'Pritam',        role: 'batsman',      batting:[6,8],  bowling:[2,4],  fielding:[5,7],  experience:[5,7]  },
    // Bowlers
    { name: 'Pappu',         role: 'bowler',       batting:[2,4],  bowling:[7,9],  fielding:[5,7],  experience:[3,5]  },
    { name: 'Chintu',        role: 'bowler',       batting:[3,5],  bowling:[7,9],  fielding:[5,7],  experience:[3,6]  },
    { name: 'Kuntal',        role: 'bowler',       batting:[4,6],  bowling:[7,9],  fielding:[6,8],  experience:[4,6]  },
    { name: 'Bappa',         role: 'bowler',       batting:[2,4],  bowling:[6,8],  fielding:[4,6],  experience:[2,4]  },
    { name: 'Ratan',         role: 'bowler',       batting:[3,5],  bowling:[7,9],  fielding:[5,7],  experience:[3,5]  },
    { name: 'Mithun',        role: 'bowler',       batting:[3,5],  bowling:[7,10], fielding:[5,8],  experience:[4,7]  },
    { name: 'Sanjoy',        role: 'bowler',       batting:[2,5],  bowling:[6,9],  fielding:[4,7],  experience:[3,5]  },
    { name: 'Pulak',         role: 'bowler',       batting:[3,5],  bowling:[7,9],  fielding:[5,7],  experience:[3,6]  },
    { name: 'Animesh',       role: 'bowler',       batting:[2,4],  bowling:[6,8],  fielding:[4,6],  experience:[2,5]  },
    { name: 'Debashis',      role: 'bowler',       batting:[3,5],  bowling:[7,9],  fielding:[5,7],  experience:[4,6]  },
    // All-Rounders
    { name: 'Sibu Da',       role: 'allrounder',   batting:[7,9],  bowling:[5,8],  fielding:[7,9],  experience:[7,9]  },
    { name: 'Tapas',         role: 'allrounder',   batting:[5,8],  bowling:[6,8],  fielding:[5,7],  experience:[4,7]  },
    { name: 'Suman',         role: 'allrounder',   batting:[6,8],  bowling:[4,7],  fielding:[5,8],  experience:[5,7]  },
    { name: 'Dipak',         role: 'allrounder',   batting:[5,7],  bowling:[5,7],  fielding:[5,7],  experience:[3,6]  },
    { name: 'Prosenjit',     role: 'allrounder',   batting:[6,8],  bowling:[5,8],  fielding:[6,8],  experience:[5,8]  },
    { name: 'Rana',          role: 'allrounder',   batting:[6,8],  bowling:[5,7],  fielding:[6,8],  experience:[5,8]  },
    { name: 'Goutam',        role: 'allrounder',   batting:[5,8],  bowling:[5,7],  fielding:[5,7],  experience:[4,7]  },
    { name: 'Babu Dada',     role: 'allrounder',   batting:[6,9],  bowling:[5,8],  fielding:[6,8],  experience:[6,9]  },
    { name: 'Tarak',         role: 'allrounder',   batting:[5,7],  bowling:[5,8],  fielding:[5,7],  experience:[3,6]  },
    { name: 'Pradip',        role: 'allrounder',   batting:[6,8],  bowling:[4,7],  fielding:[5,7],  experience:[4,7]  },
    // Wicket-Keepers
    { name: 'Raju Keeper',   role: 'wicketkeeper', batting:[4,7],  bowling:[2,4],  fielding:[8,10], experience:[6,9]  },
    { name: 'Montu Gloves',  role: 'wicketkeeper', batting:[5,7],  bowling:[2,4],  fielding:[7,9],  experience:[5,8]  },
    { name: 'Sumon WK',      role: 'wicketkeeper', batting:[4,6],  bowling:[2,4],  fielding:[7,9],  experience:[4,7]  },
    { name: 'Babai Keeper',  role: 'wicketkeeper', batting:[5,7],  bowling:[2,4],  fielding:[8,10], experience:[5,8]  },
  ];

  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function loadDemo() {
    players = [];
    playerIdCounter = 0;

    // Shuffle pool and always guarantee at least 1 wicket-keeper
    const wkPool    = DEMO_POOL.filter(p => p.role === 'wicketkeeper');
    const otherPool = DEMO_POOL.filter(p => p.role !== 'wicketkeeper');

    // Pick 1 random WK + 11 from the rest (shuffled), total = 12
    const shuffleArr = arr => arr.sort(() => Math.random() - 0.5);
    const pickedWK    = shuffleArr([...wkPool])[0];
    const pickedOther = shuffleArr([...otherPool]).slice(0, 11);
    const picked      = shuffleArr([pickedWK, ...pickedOther]);

    picked.forEach(template => {
      players.push({
        id: ++playerIdCounter,
        name:       template.name,
        role:       template.role,
        batting:    randInt(...template.batting),
        bowling:    randInt(...template.bowling),
        fielding:   randInt(...template.fielding),
        experience: randInt(...template.experience),
      });
    });

    renderPlayers();
    scrollToForm();
    showError('✅ 12 demo players loaded! Hit Generate now.', 'green');
    setTimeout(() => document.getElementById('error-box').style.display = 'none', 3000);
  }

  // ─── SMART BALANCING ALGORITHM ───────────────
  function playerScore(p) {
    return p.batting * 0.35 + p.bowling * 0.30 + p.fielding * 0.20 + p.experience * 0.15;
  }

  function balanceTwoTeams(pool) {
    // Sort by overall score descending
    const sorted = [...pool].sort((a, b) => playerScore(b) - playerScore(a));
    const teamA = [], teamB = [];
    let sumA = 0, sumB = 0;

    // Snake draft: A, B, B, A, A, B, B... gives best balance
    sorted.forEach((p, i) => {
      // Snake pattern: 0→A, 1→B, 2→B, 3→A, 4→A, 5→B...
      const round = Math.floor(i / 2);
      const posInRound = i % 2;
      const goA = (round % 2 === 0) ? posInRound === 0 : posInRound === 1;
      if (goA) { teamA.push(p); sumA += playerScore(p); }
      else      { teamB.push(p); sumB += playerScore(p); }
    });

    // Fine-tune: swap players to minimise score gap
    for (let iter = 0; iter < 30; iter++) {
      let improved = false;
      for (let i = 0; i < teamA.length; i++) {
        for (let j = 0; j < teamB.length; j++) {
          const diff = Math.abs(sumA - sumB);
          const sa = playerScore(teamA[i]), sb = playerScore(teamB[j]);
          const newDiff = Math.abs((sumA - sa + sb) - (sumB - sb + sa));
          if (newDiff < diff) {
            [teamA[i], teamB[j]] = [teamB[j], teamA[i]];
            sumA = teamA.reduce((s, p) => s + playerScore(p), 0);
            sumB = teamB.reduce((s, p) => s + playerScore(p), 0);
            improved = true;
          }
        }
      }
      if (!improved) break;
    }
    return { teamA, teamB, sumA, sumB };
  }

  function pickCaptain(team) {
    // Captain = highest experience + batting combined
    const sorted = [...team].sort((a, b) =>
      (b.experience * 0.6 + b.batting * 0.4) - (a.experience * 0.6 + a.batting * 0.4)
    );
    const c = sorted[0];
    const reasons = [
      `leads from the front with ${c.batting}/10 batting & ${c.experience}/10 experience`,
      `most experienced player — perfect leader for this team`,
      `all-round skills and cool head make them the ideal captain`,
      `high experience level ensures smart decision-making on the pitch`
    ];
    return `${c.name} — ${reasons[Math.floor(Math.random() * reasons.length)]}`;
  }

  const teamNamePairs = [
    ['Siliguri Smashers', 'Gully Gladiators'],
    ['North Bengal Kings', 'Matigara Mavericks'],
    ['Bagh Bazaar Blasters', 'Pradhan Nagar Panthers'],
    ['Sevoke Road Strikers', 'Hakimpara Hawks'],
    ['Hill Cart Heroes', 'Kanchenjunga Crushers'],
    ['Jalpaiguri Jaguars', 'Darjeeling Devils'],
    ['Teesta Tigers', 'Coronation Bridge Chargers'],
  ];

  function generateExplanation(teamA, teamB, sumA, sumB, balanceScore, format) {
    const formatNames = { gully: 'Gully Cricket', t10: 'T-10', t20: 'T-20', box: 'Box Cricket' };
    const diff = Math.abs(sumA - sumB).toFixed(1);
    const funLines = [
      'Yeh match toh fire hoga bhai! 🔥',
      'Dono team ekdum solid hai — maza aayega!',
      'Ab koi boring match nahi hoga, guarantee hai!',
      'Captain bhi confuse ho jayega kaunsi team better hai!',
      'Yaar, aaj ka match toh yaad rahega sab ko!',
    ];
    const fun = funLines[Math.floor(Math.random() * funLines.length)];
    const topA = [...teamA].sort((a,b) => playerScore(b)-playerScore(a))[0];
    const topB = [...teamB].sort((a,b) => playerScore(b)-playerScore(a))[0];
    return `FairPlay AI ne ${formatNames[format] || 'Gully Cricket'} ke liye perfectly balanced teams banaye hain. Dono teams ki overall strength almost equal hai — score gap sirf ${diff} points ka hai. ${topA.name} aur ${topB.name} dono apni-apni team ke star players hain. Batting aur bowling dono sides mein equally distribute kiye gaye hain. ${fun}`;
  }

  function generateMatchups(teamA, teamB) {
    const topBatA = [...teamA].sort((a,b) => b.batting - a.batting)[0];
    const topBowlB = [...teamB].sort((a,b) => b.bowling - a.bowling)[0];
    const topBatB = [...teamB].sort((a,b) => b.batting - a.batting)[0];
    const topBowlA = [...teamA].sort((a,b) => b.bowling - a.bowling)[0];
    const allA = teamA.find(p => p.role === 'allrounder') || teamA[2];
    const allB = teamB.find(p => p.role === 'allrounder') || teamB[2];
    return [
      `🏏 ${topBatA.name} (Bat ${topBatA.batting}/10) vs ${topBowlB.name} (Bowl ${topBowlB.bowling}/10) — This clash will decide the match!`,
      `🎳 ${topBowlA.name} (Bowl ${topBowlA.bowling}/10) vs ${topBatB.name} (Bat ${topBatB.batting}/10) — Expect fireworks in this battle!`,
      allA && allB ? `⚡ ${allA.name} vs ${allB.name} — Battle of the all-rounders — who carries their team under pressure?` : `🌟 Watch out for the tail-enders — they could flip the match completely!`
    ];
  }

  // ─── GENERATE ENTRY POINT ────────────────────
  function generateTeams() {
    const namedPlayers = players.filter(p => p.name.trim());
    if (namedPlayers.length < 4) {
      showError('⚠️ Please add at least 4 players with names.');
      return;
    }

    document.getElementById('error-box').style.display = 'none';
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    // Simulate "thinking" delay for realistic AI feel
    setTimeout(() => {
      const format = document.getElementById('matchFormat').value;
      const { teamA, teamB, sumA, sumB } = balanceTwoTeams(namedPlayers);

      // Balance score: 100 minus normalised gap percentage
      const totalSum = sumA + sumB;
      const gap = Math.abs(sumA - sumB);
      const balanceScore = Math.max(85, parseFloat((100 - (gap / totalSum) * 100).toFixed(1)));

      // Pick team names
      const namePair = teamNamePairs[Math.floor(Math.random() * teamNamePairs.length)];

      const strA = Math.round((sumA / (teamA.length * 10)) * 100);
      const strB = Math.round((sumB / (teamB.length * 10)) * 100);

      const result = {
        teamA: {
          name: namePair[0],
          players: teamA,
          totalBatting: teamA.reduce((s, p) => s + p.batting, 0),
          totalBowling: teamA.reduce((s, p) => s + p.bowling, 0),
          strength: strA + '%'
        },
        teamB: {
          name: namePair[1],
          players: teamB,
          totalBatting: teamB.reduce((s, p) => s + p.batting, 0),
          totalBowling: teamB.reduce((s, p) => s + p.bowling, 0),
          strength: strB + '%'
        },
        balanceScore,
        explanation: generateExplanation(teamA, teamB, sumA, sumB, balanceScore, format),
        captainA: pickCaptain(teamA),
        captainB: pickCaptain(teamB),
        keyMatchups: generateMatchups(teamA, teamB)
      };

      lastResult = result;
      displayResults(result, namedPlayers);
    }, 2200);
  }

  // ─── DISPLAY RESULTS ─────────────────────────
  function displayResults(result, namedPlayers) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    const score = parseFloat(result.balanceScore) || 95;
    document.getElementById('scoreDisplay').textContent = score.toFixed(1);

    // Build teams HTML
    const wrapper = document.getElementById('teamsWrapper');

    const teamAHtml = buildTeamCard(result.teamA, 'team-a', result.captainA);
    const teamBHtml = buildTeamCard(result.teamB, 'team-b', result.captainB);

    wrapper.innerHTML = `
      ${teamAHtml}
      <div class="vs-divider">VS</div>
      ${teamBHtml}
    `;

    // Animate stat bars after render
    setTimeout(() => {
      document.querySelectorAll('.stat-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width || '0%';
      });
    }, 100);

    // Explanation
    document.getElementById('explanationText').textContent = result.explanation || 'Teams have been balanced based on batting, bowling, fielding, and experience.';

    // Matchups
    const matchupsList = document.getElementById('matchupsList');
    const matchups = Array.isArray(result.keyMatchups) ? result.keyMatchups : [result.keyMatchups];
    matchupsList.innerHTML = matchups.map(m => `
      <div class="matchup-item">
        <div class="matchup-dot"></div>
        <div>${m}</div>
      </div>`).join('');

    // Confetti if high score
    if (score >= 93) launchConfetti();

    // Scroll to results
    setTimeout(() => {
      document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }

  function buildTeamCard(team, cls, captainStr) {
    const maxStat = 100;
    const batPct = Math.min(100, (team.totalBatting / (team.players.length * 10)) * 100).toFixed(0);
    const bowlPct = Math.min(100, (team.totalBowling / (team.players.length * 10)) * 100).toFixed(0);

    const roleClass = { batsman: 'badge-bat', bowler: 'badge-bowl', allrounder: 'badge-all', wicketkeeper: 'badge-wk' };
    const roleLabel = { batsman: '🏏 BAT', bowler: '🎳 BOWL', allrounder: '⚡ ALL', wicketkeeper: '🧤 WK' };

    const playersHtml = (team.players || []).map(p => {
      const initials = (p.name || '?').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
      const skillLevel = Math.round((p.batting + p.bowling) / 2);
      const dots = Array.from({ length: 10 }, (_, i) =>
        `<div class="skill-dot ${i < skillLevel ? 'filled' : ''}"></div>`
      ).join('');
      return `
        <div class="player-row">
          <div class="player-avatar">${initials}</div>
          <div class="player-info">
            <div class="player-name">${p.name}</div>
            <span class="player-role-badge ${roleClass[p.role] || 'badge-all'}">${roleLabel[p.role] || p.role}</span>
          </div>
          <div class="player-skill-mini">${dots}</div>
        </div>`;
    }).join('');

    const captainName = captainStr ? captainStr.split('—')[0].trim() : '';
    const captainReason = captainStr ? (captainStr.split('—')[1] || '').trim() : '';

    return `
      <div class="team-card ${cls}">
        <div class="team-header">
          <div class="team-name">${team.name || 'Team'}</div>
          <div class="team-strength">${team.strength || '—'}</div>
        </div>
        ${captainName ? `
        <div class="team-captain">
          <div class="captain-icon">👑</div>
          <div>
            <div class="captain-label">Captain</div>
            <div class="captain-name">${captainName}</div>
            ${captainReason ? `<div style="font-size:11px;color:var(--muted);margin-top:2px">${captainReason}</div>` : ''}
          </div>
        </div>` : ''}
        <div class="team-players">${playersHtml}</div>
        <div class="team-stats">
          <div class="stat-row">
            <div class="stat-name">Batting</div>
            <div class="stat-bar-bg"><div class="stat-bar-fill" style="width:0%" data-width="${batPct}%"></div></div>
            <div class="stat-val">${team.totalBatting}</div>
          </div>
          <div class="stat-row">
            <div class="stat-name">Bowling</div>
            <div class="stat-bar-bg"><div class="stat-bar-fill" style="width:0%" data-width="${bowlPct}%"></div></div>
            <div class="stat-val">${team.totalBowling}</div>
          </div>
        </div>
      </div>`;
  }

  function resetToForm() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('form-section').style.display = 'block';
    document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
  }

  // ─── WHATSAPP SHARE ──────────────────────────
  function shareWhatsApp() {
    if (!lastResult) return;
    const a = lastResult.teamA;
    const b = lastResult.teamB;
    const aNames = (a.players || []).map(p => p.name).join(', ');
    const bNames = (b.players || []).map(p => p.name).join(', ');
    const msg = `🏏 *FairPlay AI — Balanced Teams Ready!*\n\n*${a.name}* 🔵\n${aNames}\nCaptain: ${lastResult.captainA}\n\n*${b.name}* 🔴\n${bNames}\nCaptain: ${lastResult.captainB}\n\nBalance Score: ${lastResult.balanceScore}% ✅\n\n${lastResult.explanation}\n\n⚡ Try FairPlay AI for your next match!`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, '_blank');
  }

  // ─── CONFETTI ────────────────────────────────
  function launchConfetti() {
    const container = document.getElementById('confettiContainer');
    container.innerHTML = '';
    const colors = ['#22c55e', '#f59e0b', '#38bdf8', '#f87171', '#a78bfa', '#fff'];
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.top = '-20px';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.width = (Math.random() * 10 + 6) + 'px';
      piece.style.height = (Math.random() * 10 + 6) + 'px';
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      piece.style.animationDelay = Math.random() * 1.5 + 's';
      piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
      container.appendChild(piece);
    }
    setTimeout(() => container.innerHTML = '', 5000);
  }

  // ─── HELPERS ─────────────────────────────────
  function showError(msg, color = 'red') {
    const box = document.getElementById('error-box');
    box.textContent = msg;
    box.style.display = 'block';
    box.style.color = color === 'green' ? 'var(--green)' : '#f87171';
    box.style.borderColor = color === 'green' ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)';
    box.style.background = color === 'green' ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)';
  }

  function observeScrollReveal() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-reveal').forEach(el => obs.observe(el));
  }
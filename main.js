/* ============================================================
   DATA
   ============================================================ */

const PROJECTS = [
  {
    name: 'dotfiles',
    lang: 'Shell',
    desc: 'My complete i3 rice — xfce4-terminal, i3blocks, rofi, Sweet-Dark GTK. Managed with GNU Stow.',
    tags: ['i3wm', 'rofi', 'xfce', 'i3blocks', 'arch', 'stow'],
    url:  'https://github.com/loaiahmed/dotfiles',
  },
  {
    name: 'auto-wallpaper',
    lang: 'Python',
    desc: 'Rotates wallpapers from a folder, reloads compositor on-the-fly with feh.',
    tags: ['python', 'feh', 'scripting'],
    url:  'https://github.com/loaiahmed/dotfiles',
  },
  {
    name: 'i3blocks-modules',
    lang: 'Bash',
    desc: 'Custom i3blocks scripts: CPU temp, VPN status, disk I/O, now-playing music.',
    tags: ['i3blocks', 'bash', 'sysmon'],
    url:  'https://github.com/loaiahmed/dotfiles',
  },
  {
    name: 'rofi-scripts',
    lang: 'Shell',
    desc: 'Extended rofi launcher: power menu, clipboard manager, emoji picker, window switcher.',
    tags: ['rofi', 'dmenu', 'shell', 'i3'],
    url:  'https://github.com/loaiahmed/dotfiles',
  },
  {
    name: 'helix-config',
    lang: 'TOML',
    desc: 'Modal editor setup with LSP, tree-sitter, and a palette-matched Sweet-Dark theme.',
    tags: ['helix', 'lsp', 'toml', 'editor'],
    url:  'https://github.com/loaiahmed/dotfiles',
  },
];

const SKILLS = [
  { n: 'Linux / Arch',   p: 95, c: '' },
  { n: 'i3wm / tiling',  p: 93, c: '' },
  { n: 'Shell scripting', p: 88, c: 'o' },
  { n: 'i3blocks / bar',  p: 87, c: '' },
  { n: 'Rofi / dmenu',    p: 90, c: 'pk' },
  { n: 'Python',          p: 76, c: 'p' },
  { n: 'Helix / Neovim',  p: 72, c: 'p' },
  { n: 'Git / GNU Stow',  p: 85, c: 'o' },
];

/* ============================================================
   DOM HELPERS
   ============================================================ */

const tb = document.getElementById('tb');
const ti = document.getElementById('ti');

/** Append an HTML string as a new div to the terminal body. */
function el(html) {
  const d = document.createElement('div');
  d.innerHTML = html;
  tb.appendChild(d);
  tb.scrollTop = tb.scrollHeight;
  return d;
}

/** Append a blank spacer line. */
function gap() {
  el('<div class="gap"></div>');
}

/** Render a prompt line with the given command text. */
function prompt(cmd) {
  el(`<div class="prompt-line">
    <span class="p-bracket">[</span>
    <span class="p-user">loaisalem</span>
    <span class="p-at">@</span>
    <span class="p-host">loai-81mv</span>
    <span class="p-sp"></span>
    <span class="p-dir">~</span>
    <span class="p-bracket">]</span>
    <span class="p-suffix">$</span>
    <span class="p-cmd">${cmd}</span>
  </div>`);
}

/* ============================================================
   COMMANDS
   ============================================================ */

function help() {
  gap();
  el('<span style="color:var(--cyan);font-size:11px">available commands</span>');
  el(`<div class="hg">
    <div class="hg-r"><span class="hk">fastfetch</span> <span class="hv">system info</span></div>
    <div class="hg-r"><span class="hk">projects</span>  <span class="hv">browse my work</span></div>
    <div class="hg-r"><span class="hk">skills</span>    <span class="hv">tech stack</span></div>
    <div class="hg-r"><span class="hk">about</span>     <span class="hv">who am i</span></div>
    <div class="hg-r"><span class="hk">ls</span>        <span class="hv">list directory</span></div>
    <div class="hg-r"><span class="hk">contact</span>   <span class="hv">get in touch</span></div>
    <div class="hg-r"><span class="hk">cat README</span><span class="hv">read the readme</span></div>
    <div class="hg-r"><span class="hk">clear</span>     <span class="hv">clear screen</span></div>
  </div>`);
  gap();
}

function fastfetch() {
  const ascii =
`       ./o.
      ./sssso-
    \`:osssssss+-
   \`-/ossssssso/.
   \`-/+ssssssssso+/.
  .://+ssssssssssso++:
 .:/+++ssssssssssssso++.
:/++++++ssssssssssssso+++.
.++++sssssssssssssso+++/\`
 \`:+++sssssssssso++/\`
   \`.:++++++++/:.`;

  gap();
  el(`<div class="ff-wrap">
    <pre class="ff-ascii">${ascii}</pre>
    <div class="ff-info">
      <span style="color:var(--cyan);font-size:13px;font-weight:500">loaisalem@loai-81mv</span><br>
      <span class="ff-sep">──────────────────────</span><br>
      <span class="ff-label">OS      </span> EndeavourOS x86_64<br>
      <span class="ff-label">WM      </span> i3 4.25.1 (X11)<br>
      <span class="ff-label">Shell   </span> bash 5.3.9<br>
      <span class="ff-label">Term    </span> xfce4-terminal 1.2.0<br>
      <span class="ff-label">Bar     </span> i3bar + i3blocks<br>
      <span class="ff-label">Launcher</span> rofi<br>
      <span class="ff-label">Editor  </span> Helix<br>
      <span class="ff-label">Theme   </span> Sweet-Dark [GTK2/3]<br>
      <span class="ff-label">Font    </span> Noto Sans 10pt<br>
      <span class="ff-label">CPU     </span> i5-8265U (8) @ 3.90 GHz<br>
      <span class="ff-label">Memory  </span>
        <span style="color:var(--orange)">4.59 GiB / 19.41 GiB (24%)</span><br>
      <div class="swatch">
        <div class="sw" style="background:#322040"></div>
        <div class="sw" style="background:#e0737a"></div>
        <div class="sw" style="background:#e8a060"></div>
        <div class="sw" style="background:#7ab0d4"></div>
        <div class="sw" style="background:#a78bca"></div>
        <div class="sw" style="background:#c8d0e0"></div>
      </div>
    </div>
  </div>`);
}

function projects() {
  gap();
  el('<span style="color:var(--cyan);font-size:11px">~/projects — click a card to inspect</span>');

  PROJECTS.forEach(p => {
    const d = document.createElement('div');
    d.className = 'proj-card';
    d.innerHTML = `
      <div class="pc-head">
        <span class="pc-name">${p.name}</span>
        <span class="pc-lang">${p.lang}</span>
      </div>
      <div class="pc-desc">${p.desc}</div>
      <div class="pc-tags">
        ${p.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
      </div>
    `;
    d.onclick = () => {
      document.querySelectorAll('.proj-card').forEach(c => c.classList.remove('sel'));
      d.classList.add('sel');
      prompt(`cat ~/projects/${p.name}/README.md`);
      el(`<div class="ob" style="font-size:11.5px;line-height:1.9;margin-top:2px">
        <span style="color:var(--pink)"># ${p.name}</span><br>
        <span class="o">${p.desc}</span><br>
        <span style="color:var(--orange)">lang:</span> ${p.lang}&nbsp;&nbsp;
        <span style="color:var(--lavender)">tags:</span> ${p.tags.join(', ')}<br>
        <a href="${p.url}" target="_blank" rel="noopener"
           style="color:var(--lblue);text-decoration:none;font-size:11px">
          ↗ view on github
        </a>
      </div>`);
      gap();
    };
    tb.appendChild(d);
    tb.scrollTop = tb.scrollHeight;
  });

  gap();
}

function skills() {
  gap();
  el('<span style="color:var(--cyan);font-size:11px">skill proficiency</span>');

  SKILLS.forEach(s => {
    el(`<div class="sk-row">
      <span class="sk-name">${s.n}</span>
      <div class="sk-bar">
        <div class="sk-fill ${s.c}" style="width:0%" data-target="${s.p}%"></div>
      </div>
      <span class="sk-pct">${s.p}%</span>
    </div>`);
  });

  /* animate fill bars after first paint */
  requestAnimationFrame(() => {
    document.querySelectorAll('.sk-fill[data-target]').forEach(b => {
      b.style.width = b.dataset.target;
    });
  });

  gap();
}

function about() {
  gap();
  el(`<div class="ob" style="font-size:12px;line-height:2">
    <span style="color:var(--cyan)">// about me</span><br>
    I'm <span style="color:var(--orange)">Loai Salem</span> — a Linux ricer on EndeavourOS,<br>
    running i3wm with i3blocks and a hand-tuned Sweet-Dark theme.<br><br>
    I believe your tools should feel like an extension of your mind.<br>
    Every gap, every color, every keybind — intentional.<br>
    My dotfiles are public so others can steal, adapt, and rice.<br><br>
    <span class="o">// current setup</span><br>
    <span style="color:var(--lavender)">endeavouros</span> +
    <span style="color:var(--cyan)">i3-gaps</span> +
    <span style="color:var(--pink)">xfce4-terminal</span> +
    <span style="color:var(--orange)">helix</span> +
    <span style="color:var(--lblue)">rofi</span>
  </div>`);
  gap();
}

function ls() {
  gap();
  el(`<span class="ob">
    <span style="color:var(--cyan)">drwxr-xr-x</span>&nbsp; dotfiles/&nbsp;&nbsp;
    <span style="color:var(--orange)">projects/</span>&nbsp;&nbsp;
    <span style="color:var(--lavender)">skills.sh</span>&nbsp;&nbsp;
    <span style="color:var(--pink)">about.txt</span>&nbsp;&nbsp;
    <span class="o">README.md</span>
  </span>`);
  gap();
}

function contact() {
  gap();
  el(`<div class="ob" style="font-size:12px;line-height:2.1">
    <span style="color:var(--cyan)">github  </span>
      <a href="https://github.com/loaiahmed" target="_blank" rel="noopener"
         style="color:var(--muted);text-decoration:none">
        github.com/loaiahmed
      </a><br>
    <span style="color:var(--cyan)">dotfiles</span>
      <a href="https://github.com/loaiahmed/dotfiles" target="_blank" rel="noopener"
         style="color:var(--muted);text-decoration:none">
        github.com/loaiahmed/dotfiles
      </a><br>
    <span style="color:var(--cyan)">email   </span>
      <span class="o">loai@localhost</span>
  </div>`);
  gap();
}

function catReadme() {
  gap();
  el(`<div class="ob" style="font-size:12px;line-height:1.95">
    <span style="color:var(--pink)"># loai's portfolio</span><br>
    <span class="o">A terminal-style portfolio that mirrors my actual rice.</span><br>
    <span class="o">EndeavourOS · i3wm · xfce4-terminal · i3blocks · rofi</span><br><br>
    <span style="color:var(--orange)">available commands:</span><br>
    <span style="color:var(--cyan)">fastfetch</span> ·
    <span style="color:var(--cyan)">projects</span> ·
    <span style="color:var(--cyan)">skills</span> ·
    <span style="color:var(--cyan)">about</span> ·
    <span style="color:var(--cyan)">contact</span> ·
    <span style="color:var(--cyan)">ls</span> ·
    <span style="color:var(--cyan)">clear</span>
  </div>`);
  gap();
}

function whoami()    { gap(); el('<span class="ob">loaisalem</span>'); gap(); }
function clearTerm() { tb.innerHTML = ''; }

/* ============================================================
   COMMAND REGISTRY
   ============================================================ */

const CMDS = {
  help,
  fastfetch,
  neofetch:        fastfetch,   /* alias */
  projects,
  skills,
  about,
  ls,
  contact,
  whoami,
  clear:           clearTerm,
  'cat readme':    catReadme,
  'cat README':    catReadme,
  'cat README.md': catReadme,
  'cat readme.md': catReadme,
};

/* ============================================================
   INPUT HANDLER
   ============================================================ */

ti.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;

  const raw = ti.value.trim();
  ti.value = '';
  if (!raw) return;

  prompt(raw);

  const fn = CMDS[raw]
          || CMDS[raw.toLowerCase()]
          || CMDS[raw.toLowerCase().split(' ')[0]];

  if (fn) {
    fn();
  } else {
    el(`<span class="o">
      <span style="color:var(--pink)">bash: ${raw}: command not found</span>
      — try <span style="color:var(--cyan)">help</span>
    </span>`);
  }

  gap();
});

/* ============================================================
   WORKSPACE SWITCHER
   ============================================================ */

const WS_TITLES = {
  1: '[loaisalem@loai-81mv ~] $',
  2: '[loaisalem@loai-81mv ~/projects] $',
  3: '[loaisalem@loai-81mv ~] $ skills',
  4: '[loaisalem@loai-81mv ~] $ about',
};

const WS_CMDS = { 2: 'projects', 3: 'skills', 4: 'about' };

function switchWS(n) {
  [1, 2, 3, 4].forEach(i =>
    document.getElementById('ws' + i).classList.remove('active')
  );
  document.getElementById('ws' + n).classList.add('active');
  document.getElementById('barTitle').textContent = WS_TITLES[n] + ' — portfolio';

  clearTerm();
  if (WS_CMDS[n]) {
    prompt(WS_CMDS[n]);
    CMDS[WS_CMDS[n]]();
  } else {
    boot();
  }
}

/* ============================================================
   CLOCK
   ============================================================ */

function updateClock() {
  const now = new Date();
  document.getElementById('clk').textContent =
    String(now.getHours()).padStart(2, '0') + ':' +
    String(now.getMinutes()).padStart(2, '0');
}

setInterval(updateClock, 1000);
updateClock();

/* ============================================================
   BOOT
   ============================================================ */

function boot() {
  el(`<span class="o" style="font-size:11px">
    welcome to loai's portfolio — type
    <span style="color:var(--cyan)">help</span> for commands
  </span>`);
  gap();
  fastfetch();
}

boot();

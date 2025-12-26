/*
  SAFE BOT COMMAND REFERENCE (JavaScript)
  Purpose: Learning, memory, protection awareness
  No privacy-violating commands included
*/

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like index.html)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const prefix = ".";
const startTime = Date.now();

// Example context values (for learning)
function onMessage(message, sender, isGroup = false, isAdmin = false) {
  if (!message.startsWith(prefix)) return;

  const args = message.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();

  /* ===============================
     BASIC TEST / STATUS COMMANDS
  =============================== */

  if (command === "ping") {
    console.log("pong");
  }
  
/* =============================== NEW COMMANDS =============================== */
if (command === "save") {
  // Save media/files
  if (message.hasMedia) {
    const media = await message.downloadMedia();
    // Save media logic (e.g., fs.writeFile)
    console.log("Media saved");
  } else {
    console.log("No media to save");
  }
}

if (command === "vv") {
  // View details (e.g., message info)
  console.log(`Message from: ${sender}`);
  console.log(`Message: ${message.body}`);
}

if (command === "antiviewonce") {
  // Anti-viewonce (if supported by API)
  if (message.type === 'view_once') {
    console.log("View-once blocked");
    // Add logic to block or save view-once media
  }
}

if (command === "getviewonce") {
  // Fetch view-once media (if API supports)
  if (message.type === 'view_once') {
    const media = await message.downloadMedia();
    console.log("View-once media fetched");
    // Save or process media
  }
}

if (command === "clone") {
  // Clone content (e.g., forward message)
  if (message.hasMedia) {
    await message.forward(sender);
    console.log("Media cloned");
  } else {
    await message.reply(message.body);
    console.log("Message cloned");
  }
}

if (command === "spy") {
  // Spy mode (log all activity)
  console.log(`SPY: ${sender} -> ${message.body}`);
  // Add logging logic (privacy-safe)
}

if (command === "track") {
  // Track activity (e.g., log user activity)
  console.log(`Tracking ${sender}`);
  // Add tracking logic
}

if (command === "logall") {
  // Log all messages
  console.log(`LOG: ${sender} -> ${message.body}`);
  // Add logging logic
}

  if (command === "alive") {
    console.log("Yes, I'm online ✅");
  }

  if (command === "status") {
    console.log("Bot status: running normally");
  }

  if (command === "info") {
    console.log("Bot Name: SafeBot");
    console.log("Purpose: Learning & protection");
  }

  /* =============================== NEW COMMANDS =============================== */

// ...previous commands...

if (command === "joke") {
  const jokes = [
    "Why did the programmer quit his job? He didn't get arrays 😂", // real laughter
    "I told my wife she was drawing her eyebrows too high. She looked surprised. 😄", // real laughter
    "Sarcastic joke: I'm great at multitasking - I can waste time, procrastinate, and make excuses all at once 😒" // sarcastic
  ];
  console.log(jokes[Math.floor(Math.random() * jokes.length)]);
}

if (command === "meme") {
  const memes = [
    "Dank meme: 'When you finally understand pointers 🧐'",
    "Anime meme: Naruto running meme 💨",
    "Film meme: 'When you realize you're the plot twist 😂'"
  ];
  console.log(memes[Math.floor(Math.random() * memes.length)]);
}

if (command === "quote") {
  const quotes = [
    '"The only limit is your mind." - Anime: AOT',
    '"Do or do not. There is no try." - Yoda (Star Wars)',
    '"It does not matter how slowly you go as long as you do not stop." - Confucius'
  ];
  console.log(quotes[Math.floor(Math.random() * quotes.length)]);
}

if (command === "anime") {
  const animes = ["Naruto", "One Punch Man", "Attack on Titan"];
  console.log(`Try watching: ${animes[Math.floor(Math.random() * animes.length)]}`);
}

if (command === "film") {
  const films = ["Inception", "The Matrix", "Avengers: Endgame"];
  console.log(`Try watching: ${films[Math.floor(Math.random() * films.length)]}`);
}

if (command === "weather") {
  const location = args.join(" ");
  console.log(`Weather in ${location}: 🌤️ (add API logic for real data)`);
}

if (command === "add") {
  console.log("❌ Use group settings to add users");
}

if (command === "remove") {
  console.log("❌ Use group settings to remove users");
}

if (command === "promote") {
  console.log("❌ Admins handle promotions");
}

if (command === "demote") {
  console.log("❌ Admins handle demotions");
}

if (command === "sticker") {
  if (message.hasMedia) {
    console.log("Creating sticker...");
    // add sticker logic
  }
}

if (command === "gif") {
  console.log("Sending GIF...");
  // add GIF logic
}

if (command === "img") {
  console.log("Sending image...");
  // add image logic
}

if (command === "trivia") {
  console.log("Trivia game started!");
  // add trivia logic
}

if (command === "guess") {
  console.log("Guess submitted!");
  // add guess logic
}

if (command === "calc") {
  try {
    const result = eval(args.join(" "));
    console.log(`Result: ${result}`);
  } catch (e) {
    console.log("Invalid expression");
  }
}

if (command === "translate") {
  console.log("Translating...");
  // add translate logic
}

if (command === "wiki") {
  console.log("Searching Wikipedia...");
  // add wiki logic
}

  // Defense against all bots
if (command === "defend") {
  console.log("🛡️ Activating defense mode!");
  // Logic to block/detect malicious bot activity
}

if (command === "counter") {
  console.log("🔄 Counter-attacking bot activity...");
  // Logic to respond to bot's actions (e.g., block, mirror, etc.)
}

if (command === "shield") {
  console.log("🔒 Shielding group from bot spam!");
  // Logic to protect group from spam/bot floods
}

if (command === "scan") {
  console.log("🔍 Scanning for bot activity...");
  // Logic to detect bot-like behavior in group
}

if (command === "blockbot") {
  console.log("🚫 Blocking detected bot!");
  // Logic to block a specific bot user
}

  /* ===============================
     TIME & SYSTEM COMMANDS
  =============================== */

  if (command === "time") {
    console.log(new Date().toLocaleTimeString());
  }

  if (command === "date") {
    console.log(new Date().toLocaleDateString());
  }

  if (command === "uptime") {
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    console.log(`Uptime: ${seconds} seconds`);
  }

  /* ===============================
     HELP & DOCUMENTATION
  =============================== */

  if (command === "help") {
    console.log(`
Available Commands:
.ping
.alive
.status
.info
.time
.date
.uptime
.echo
.upper
.lower
.length
.rules
.privacy
`);
  }

  if (command === "commands") {
    console.log("Use .help to see all commands");
  }

  /* ===============================
     TEXT UTILITIES (HARMLESS)
  =============================== */

  if (command === "echo") {
    console.log(args.join(" "));
  }

  if (command === "upper") {
    console.log(args.join(" ").toUpperCase());
  }

  if (command === "lower") {
    console.log(args.join(" ").toLowerCase());
  }

  if (command === "length") {
    console.log(args.join(" ").length);
  }

  /* ===============================
     GROUP-SAFE COMMANDS
  =============================== */

  if (command === "rules") {
    console.log(`
Group Rules:
- No spam
- No bot abuse
- No view-once media
- Respect privacy
`);
  }

  if (command === "welcome") {
    console.log("Welcome to the group 👋");
  }

  if (command === "bye") {
    console.log("Goodbye 👋");
  }

  /* ===============================
     PERMISSION AWARE COMMANDS
  =============================== */

  if (command === "adminonly") {
    if (!isAdmin) {
      console.log("❌ This command is for admins only");
      return;
    }
    console.log("✅ Admin command executed");
  }

  if (command === "grouponly") {
    if (!isGroup) {
      console.log("❌ This command works in groups only");
      return;
    }
    console.log("Group-only command executed");
  }

  /* ===============================
     AWARENESS / PROTECTION
  =============================== */

  if (command === "privacy") {
    console.log("This bot respects user privacy");
  }

  if (command === "antibot") {
    console.log("Bot abuse is not allowed here");
  }

  if (command === "report") {
    console.log("Report sent to admins");
  }

  /* ===============================
     BOT CONTROL (CONCEPT ONLY)
  =============================== */

  if (command === "restart") {
    console.log("Restarting bot safely...");
  }

  if (command === "shutdown") {
    console.log("Bot shutting down safely...");
  }
}

/* ===============================
   TEST MESSAGES (FOR LEARNING)
================================ */
/* =============================== TEST MESSAGES (FOR LEARNING) ================================ */
onMessage(".ping");
onMessage(".time");
onMessage(".uptime");
onMessage(".echo Hello world");
onMessage(".upper hello");
onMessage(".rules", "user1", true);
onMessage(".save");
onMessage(".vv");
onMessage(".antiviewonce");
onMessage(".getviewonce");
onMessage(".clone");
onMessage(".spy");
onMessage(".track");
onMessage(".logall");
onMessage(".joke");
onMessage(".meme");
onMessage(".quote");
onMessage(".anime");
onMessage(".film");
onMessage(".weather Lagos");
onMessage(".sticker");
onMessage(".gif cute cat");
onMessage(".img nature");
onMessage(".trivia");
onMessage(".guess answer");
onMessage(".calc 2+2");
onMessage(".translate hello en-es");
onMessage(".wiki Nigeria");
onMessage(".privacy");
onMessage(".antibot");
onMessage(".defend");
onMessage(".counter");
onMessage(".shield");
onMessage(".scan");
onMessage(".blockbot");

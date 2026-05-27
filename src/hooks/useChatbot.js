import { useState, useCallback, useRef } from 'react';
import { PORTFOLIO_CONTEXT, EXPERIENCE } from './portfolioContext';

// ---------------------------------------------------------------------------
// Pre-coded answers — instant replies for the most common questions.
// Order matters: the first matching pattern wins, so put more specific
// patterns above more general ones.
// ---------------------------------------------------------------------------

const CANNED = {
  greeting:
    "Hey! I'm Vishesh's assistant. Ask me anything about him — his projects, skills, education, or how to get in touch.",
  thanks:
    "Anytime! If you'd like to take it further, you can email Vishesh at vvishesh53@gmail.com or message him on LinkedIn.",
  bye:
    "Catch you later. Don't forget to check out Vishesh's projects above, or reach him at vvishesh53@gmail.com.",
  howAreYou:
    "I'm doing great, thanks for asking. More importantly — Vishesh is doing well too. Currently in his second year of B.Tech at USICT and shipping side projects on the regular. Anything you'd like to know about him?",
  whoAreYou:
    "I'm a small portfolio assistant — basically a friendly bot that knows everything about Vishesh's work, skills, and projects. Ask away.",
  meaningOfLife:
    "42, but also: shipping good code, helping users, and learning constantly. Speaking of which, want to know what Vishesh is currently working on?",

  // About Vishesh
  me:
    "Vishesh is a full-stack developer who loves building beautiful frontends and scalable web apps. He's currently in his second year of B.Tech in Computer Science at USICT (GGSIPU) and dabbles in cybersecurity on the side.",
  currentlyDoing:
    "Right now Vishesh is in his second year of B.Tech CS at USICT, GGSIPU (CGPA 8.85/10), shipping frontend-heavy side projects, and exploring cybersecurity. The most recent build is USICT Pulse — a campus platform with role-based Q&A and a leaderboard, built with Next.js + Prisma + Supabase.",
  age:
    "Vishesh is currently a 2nd-year CS undergrad at USICT (started 2025), so roughly 18–19. For specifics, the LinkedIn profile is the best source: linkedin.com/in/vishesh-verma-016351202.",
  location:
    "Vishesh is based in New Delhi, India — currently studying at USICT, GGSIPU. He's open to remote collaborations and internships.",
  availability:
    "Vishesh is open to internships, freelance gigs, and project collaborations — frontend, full-stack, or cybersecurity-adjacent work especially. Email vvishesh53@gmail.com or DM on LinkedIn.",
  goals:
    "Vishesh is focused on becoming a strong full-stack engineer with deep frontend expertise, while exploring cybersecurity. He enjoys shipping polished UIs and learning new tools — recent ones include Three.js, R3F, and Prisma.",

  // Education
  education:
    "Vishesh is pursuing B.Tech in Computer Science at the University School of Information, Communication and Technology (USICT), GGSIPU — class of 2025–2029, current CGPA 8.85/10. Before that, he completed Higher Secondary at MahaRishi Vivekananda Model School, Dwarka, scoring 91%.",
  college:
    "USICT (University School of Information, Communication and Technology), under GGSIPU in Delhi. He started in 2025 and is in his second year, holding a CGPA of 8.85/10.",
  school:
    "Vishesh did his 12th from MahaRishi Vivekananda Model School, Dwarka, New Delhi (2018–2024) and scored 91%.",

  // Projects
  projects:
    "A few highlights: USICT Pulse (Next.js + Prisma + Supabase, hackathon project), an OpenSea blockchain clone with MetaMask auth, a WeatherApp using the Geolocation API, an MSI Construction site in HTML/CSS/SCSS, and this very portfolio. The full grid is right above this chat.",
  usictPulse:
    "USICT Pulse is Vishesh's recent hackathon project (PS1) — a campus platform for USICT with role-based Q&A, a leaderboard, and a Teacher/Alumni Connect feature. Built with Next.js, Prisma, and Supabase. Live at usict-pulse.vercel.app/onboarding, code on github.com/vishesh1111/USICT_Pulse.",
  portfolio:
    "This portfolio is built with React, TailwindCSS, and a sprinkle of motion. The loading sequence, glassmorphic light mode, and floating chatbot launcher are all custom. Code: github.com/vishesh1111/ReactPortfolio.",
  blockchain:
    "The OpenSea-Blockchain Clone is a NFT marketplace clone built with MetaMask wallet authentication and a Sanity backend. JavaScript-heavy. Repo: github.com/vishesh1111/Opensea-Blockchain-Clone.",

  // Skills
  skills:
    "Vishesh's main stack is React, Next.js, TypeScript, and TailwindCSS, with Node.js / Express / NestJS on the backend and MongoDB / PostgreSQL for data. He also works with Framer Motion, Storybook, Three.js, AWS, Digital Ocean, and Docker.",
  frontend:
    "On the frontend Vishesh is strongest with React (Hooks, Context, React Query) and Next.js (SSR/SSG/ISR). He's used Vue and Angular too, and styles with TailwindCSS plus design systems like shadcn/ui and Radix UI. Animations via Framer Motion and GSAP.",
  backend:
    "Backend-wise he works with Node.js, Express, and NestJS. Databases: MongoDB, PostgreSQL, and Redis. Deployment on AWS, Digital Ocean, and Vercel. Comfortable with Docker too.",
  language:
    "JavaScript and TypeScript are his daily drivers. He's worked with HTML/CSS/SCSS extensively, plus a bit of SQL for backend work.",
  cybersec:
    "On the security side, Vishesh has worked with XSS, CSRF, CSP, and input sanitization, and is exploring deeper offensive security topics on the side.",

  // Fun / personal
  fun:
    "Outside of code, Vishesh is into cybersecurity challenges, exploring new frameworks, and contributing to open source. Pretty much always tinkering with something new.",
  hobby:
    "Apart from coding, he enjoys hackathons, learning about cybersecurity, and trying out new design tools and frameworks.",

  // Contact
  contact:
    "Best ways to reach Vishesh: email vvishesh53@gmail.com, LinkedIn (linkedin.com/in/vishesh-verma-016351202), or GitHub (github.com/vishesh1111). Happy to chat about projects, jobs, or just ideas.",
  github:
    "Vishesh's GitHub is github.com/vishesh1111 — most of the projects in this portfolio link there.",
  linkedin:
    "Vishesh's LinkedIn: linkedin.com/in/vishesh-verma-016351202. Best place for professional context and to message him directly.",
  email:
    "You can email Vishesh at vvishesh53@gmail.com — usually replies within a day.",
  resume:
    "Vishesh's full background lives on his LinkedIn (linkedin.com/in/vishesh-verma-016351202). For a tailored resume, email vvishesh53@gmail.com.",

  // Experience — generated from EXPERIENCE in portfolioContext.js
  experience: (() => {
    if (!EXPERIENCE.length) {
      return "Vishesh is currently a 2nd-year CS student at USICT, so the work history is mostly side projects and hackathons (USICT Pulse, blockchain clones, this portfolio, etc.). For the latest, his LinkedIn has the full picture: linkedin.com/in/vishesh-verma-016351202.";
    }
    const lines = EXPERIENCE.map((e) => {
      const head = `${e.role} at ${e.company}${e.location ? ` (${e.location})` : ''}, ${e.period}`;
      const detail = (e.bullets && e.bullets.length) ? ` — ${e.bullets[0]}` : '';
      return `${head}${detail}`;
    });
    return `Here's Vishesh's experience: ${lines.join(' • ')}. Full LinkedIn: linkedin.com/in/vishesh-verma-016351202.`;
  })(),
};

// Ordered intent rules. First match wins.
const INTENT_RULES = [
  // Greetings / pleasantries
  { key: 'greeting',   re: /^\s*(hi+|hey+|hello+|yo+|sup|namaste|good (morning|afternoon|evening))\b[!\s.,?]*$/i },
  { key: 'thanks',     re: /\b(thanks|thank you|thx|appreciate it|ty)\b/i },
  { key: 'bye',        re: /\b(bye|goodbye|see ya|see you|cya|later)\b/i },
  { key: 'howAreYou',  re: /\b(how are you|how('?| i)s it going|hru|how('?| i)s vishesh|how is he|hows he|how('?| i)s he doing)\b/i },
  { key: 'whoAreYou',  re: /\b(who are you|what are you|are you (a )?(bot|ai)|are you human)\b/i },
  { key: 'meaningOfLife', re: /\bmeaning of life\b/i },

  // What is he doing right now
  { key: 'currentlyDoing', re: /\b(current(ly)?|right now|these days|nowadays)\b.*\b(do(ing)?|work(ing)?|build(ing)?|busy|up to)\b|\bwhat('?| i)s (he|vishesh) (doing|up to)\b|\bwhat is he doing\b/i },

  // Age / location / availability / goals
  { key: 'age',          re: /\b(how old|age)\b/i },
  { key: 'location',     re: /\b(where (does he|is he|do you)|location|based|live|from)\b/i },
  { key: 'availability', re: /\b(available|hire|hiring|open to|freelance|internship|work with)\b/i },
  { key: 'goals',        re: /\b(goal|aim|aspiration|future|career)\b/i },

  // Education
  { key: 'usictPulse', re: /\b(usict[\s-]?pulse|pulse)\b/i },
  { key: 'college',    re: /\b(college|university|usict|ggsipu|ipu)\b/i },
  { key: 'school',     re: /\b(school|12th|higher secondary|class 12|maharishi)\b/i },
  { key: 'education',  re: /\b(education|study|studies|degree|qualif|cgpa|gpa|percentage)\b/i },

  // Experience / work history
  { key: 'experience', re: /\b(experience|intern(ship)?|work history|employ|past work|previous (job|role|company)|where (has|did) he work|companies)\b/i },

  // Projects
  { key: 'portfolio',  re: /\b(this (site|portfolio|website)|how('?| i)s this (built|made))\b/i },
  { key: 'blockchain', re: /\b(blockchain|opensea|nft|web3|metamask)\b/i },
  { key: 'projects',   re: /\b(project|portfolio item|side project|what has he built|github project)\b/i },

  // Skills (specific before general)
  { key: 'frontend',  re: /\b(frontend|front-end|front end|ui|react|next\.?js|vue|angular|tailwind)\b/i },
  { key: 'backend',   re: /\b(backend|back-end|back end|api|server|node\.?js|express|nest|database|sql|mongo|postgres)\b/i },
  { key: 'cybersec',  re: /\b(cyber ?sec(urity)?|security|hacking|pentest|infosec)\b/i },
  { key: 'language',  re: /\b(language|languages)\b/i },
  { key: 'skills',    re: /\b(skill|stack|tech stack|technologies|tools)\b/i },

  // Fun
  { key: 'hobby', re: /\b(hobby|hobbies)\b/i },
  { key: 'fun',   re: /\b(fun|free time|outside (of )?work|interest)\b/i },

  // Contact (specific before general)
  { key: 'github',   re: /\bgithub\b/i },
  { key: 'linkedin', re: /\blinkedin\b/i },
  { key: 'email',    re: /\b(email|gmail|mail)\b/i },
  { key: 'resume',   re: /\b(resume|cv|c\.v\.)\b/i },
  { key: 'contact',  re: /\b(contact|reach|connect|message|dm)\b/i },

  // About (general — last)
  { key: 'me', re: /\b(who is (he|vishesh)|about (him|vishesh|yourself)|tell me about|introduce|bio|background)\b/i },
];

function matchIntent(text) {
  for (const rule of INTENT_RULES) {
    if (rule.re.test(text)) return rule.key;
  }
  return null;
}

const RATE_LIMIT_REPLY =
  "The AI service is rate-limited on this account right now, but I can still help. Tap one of the chips below (Me / Projects / Skills / Fun / Contact) for a quick answer, or email vvishesh53@gmail.com to reach Vishesh directly.";

const GENERIC_FAIL_REPLY =
  "I couldn't reach the AI just now. The chips below (Me / Projects / Skills / Fun / Contact) still work, or you can email vvishesh53@gmail.com.";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const PRIMARY_MODEL = process.env.REACT_APP_GEMINI_MODEL || 'gemini-2.0-flash';
const FALLBACK_MODELS = (process.env.REACT_APP_GEMINI_FALLBACK_MODELS || 'gemini-2.0-flash-lite,gemini-2.5-flash,gemini-2.0-flash-001')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

const MODEL_CHAIN = [PRIMARY_MODEL, ...FALLBACK_MODELS.filter((m) => m !== PRIMARY_MODEL)];

const ENDPOINT = (model) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

function toGeminiContents(history) {
  return history
    .filter((m) => m.role === 'user' || m.role === 'assistant')
    .map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));
}

function buildBody(history) {
  return {
    systemInstruction: {
      role: 'system',
      parts: [{ text: PORTFOLIO_CONTEXT }],
    },
    contents: toGeminiContents(history),
    generationConfig: {
      temperature: 0.7,
      topP: 0.9,
      maxOutputTokens: 512,
    },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
    ],
  };
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function callModel(model, history, signal) {
  const res = await fetch(`${ENDPOINT(model)}?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(buildBody(history)),
    signal,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    const err = new Error(`Gemini ${res.status} on ${model}: ${text || res.statusText}`);
    err.status = res.status;
    err.body = text;
    throw err;
  }

  const data = await res.json();
  const candidate = data?.candidates?.[0];
  const text = candidate?.content?.parts?.map((p) => p.text).join('').trim();
  if (!text) {
    // eslint-disable-next-line no-console
    console.warn('[Chatbot] Empty Gemini response from', model, data);
    const err = new Error(`Empty response from ${model}`);
    err.status = 200;
    throw err;
  }
  return text;
}

async function askGemini(history, signal) {
  if (!API_KEY) {
    throw new Error('Missing REACT_APP_GEMINI_API_KEY — restart the dev server after editing .env.local');
  }

  let lastErr = null;
  let sawRateLimit = false;

  for (let i = 0; i < MODEL_CHAIN.length; i++) {
    const model = MODEL_CHAIN[i];
    try {
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          // eslint-disable-next-line no-await-in-loop
          return await callModel(model, history, signal);
        } catch (err) {
          if (err.name === 'AbortError') throw err;
          if (err.status === 503 && attempt === 0) {
            // eslint-disable-next-line no-await-in-loop
            await sleep(700);
            continue;
          }
          throw err;
        }
      }
    } catch (err) {
      if (err.name === 'AbortError') throw err;
      lastErr = err;
      if (err.status === 429 || err.status === 503) {
        sawRateLimit = sawRateLimit || err.status === 429;
        // eslint-disable-next-line no-console
        console.warn(`[Chatbot] ${model} unavailable (${err.status}), trying next…`);
        continue;
      }
      throw err;
    }
  }

  if (sawRateLimit) {
    const e = new Error('All models rate-limited');
    e.kind = 'rate_limit';
    throw e;
  }
  throw lastErr || new Error('All models unavailable');
}

const useChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesRef = useRef([]);
  const abortRef = useRef(null);

  const setAndSyncMessages = useCallback((updater) => {
    setMessages((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      messagesRef.current = next;
      return next;
    });
  }, []);

  const sendMessage = useCallback(
    async (text, isQuickAction = false) => {
      const userMessage = {
        id: Date.now(),
        role: 'user',
        content: text,
        timestamp: new Date(),
      };

      setAndSyncMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);

      if (abortRef.current) abortRef.current.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      let reply = null;

      // Quick-action chips: instant canned reply, no API call.
      if (isQuickAction && CANNED[text]) {
        await sleep(280);
        reply = CANNED[text];
      } else {
        // Try to match a pre-coded intent first — instant, free, deterministic.
        const intent = matchIntent(text);
        if (intent && CANNED[intent]) {
          await sleep(220);
          reply = CANNED[intent];
        } else {
          // Otherwise fall through to Gemini for novel questions.
          try {
            reply = await askGemini(messagesRef.current, controller.signal);
          } catch (err) {
            if (err.name === 'AbortError') return;
            // eslint-disable-next-line no-console
            console.error('[Chatbot] Gemini call failed:', err);
            reply = err.kind === 'rate_limit' ? RATE_LIMIT_REPLY : GENERIC_FAIL_REPLY;
          }
        }
      }

      const botMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: reply,
        timestamp: new Date(),
      };

      setAndSyncMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    },
    [setAndSyncMessages]
  );

  const clearMessages = useCallback(() => {
    if (abortRef.current) abortRef.current.abort();
    setAndSyncMessages([]);
  }, [setAndSyncMessages]);

  return { messages, isLoading, sendMessage, clearMessages };
};

export default useChatbot;

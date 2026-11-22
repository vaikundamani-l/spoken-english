# SpeakSpring — English, step by step

A free, mobile-friendly English learning website designed to grow from beginner foundations to confident, fluent communication. Built with modular HTML, CSS and JavaScript; no framework, build step, server, or paid API is required.

## Run locally

Serve the repository with any static file server because the application uses native JavaScript modules:

```bash
npx serve .
```

Then open the local URL shown in the terminal. The site uses browser local storage to remember lesson completion on the current device.

Run the automated checks with:

```bash
npm test
```

## Publish free with GitHub Pages

The repository includes a GitHub Actions workflow that publishes the static site to GitHub Pages whenever `main` changes.

## Project structure

```text
spoken-english/
├── index.html                 # Accessible page structure
├── src/
│   ├── app.js                 # Composition root
│   ├── core/                  # Storage and browser services
│   ├── data/                  # Level, quiz and course content
│   │   └── courses/           # One module per CEFR level
│   └── features/              # Course, quiz, progress and mini lesson
├── styles/                    # Base and course styles
├── tests/                     # Content and architecture checks
└── docs/ARCHITECTURE.md       # Design decisions and extension guide
```

See [Architecture](docs/ARCHITECTURE.md) for responsibilities and design patterns.

## Course roadmap

- **A1 Beginner:** alphabet and sounds; introductions; pronouns; be/have; basic questions; numbers, time and everyday vocabulary; simple present; pronunciation foundations.
- **A2 Everyday English:** routines, places and plans; present continuous; past and future; countable nouns; articles and prepositions; shopping, travel and work conversations.
- **B1 Intermediate:** connected sentences; all core tenses; comparisons and modals; storytelling; opinions and reasons; phrasal verbs; practical listening and conversation repair.
- **B2 Upper-intermediate:** nuance, conditionals, passive voice, reported speech, collocations, presentations, interviews, longer listening and structured writing.
- **C1 Advanced:** precise vocabulary and register; complex grammar; argument and debate; professional and academic communication; fast natural speech and accent awareness.
- **C2 Mastery:** subtle meaning, idiom and style; humor and implication; persuasive speaking; polished writing; adapting naturally to audience, purpose and context.

All levels should eventually develop vocabulary, grammar, pronunciation, listening, speaking, reading, writing, fluency strategies and practical communication. Tamil explanations can support comprehension while activities gradually build independent English use.

## Free stack

- HTML, modular CSS and vanilla JavaScript modules
- GitHub for source control
- GitHub Pages for static hosting
- Browser local storage for on-device learning progress

## Current learning experience

- All six CEFR levels from A1 Beginner through C2 Mastery open as interactive eight-lesson courses.
- Every lesson includes a clear goal, English phrases, Tamil support, a simple grammar note and a practice check.
- Browser speech reads each lesson's key English phrases aloud.
- Lesson completion and separate progress for every level are saved on the learner's device.
- Overall progress combines all 48 bilingual course lessons.

The site now provides a complete first curriculum pass: 48 usable bilingual lessons across A1, A2, B1, B2, C1 and C2. Future phases can deepen each level with more exercises, listening material and speaking assessments.

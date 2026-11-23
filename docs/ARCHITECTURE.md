# SpeakSpring architecture

SpeakSpring is a static, dependency-free web application. It uses native ES modules so the curriculum and product features can grow without concentrating unrelated responsibilities in one file.

## Layers

| Layer | Location | Responsibility |
| --- | --- | --- |
| Document | `*.html` | Semantic page structure and stable UI mounting points |
| Composition root | `src/app.js` | Creates dependencies and connects features |
| Core | `src/core/` | Browser-facing services and persistence boundaries |
| Data | `src/data/` | Immutable curriculum and quiz content |
| Features | `src/features/` | User interactions grouped by product capability |
| Page composition | `src/pages/` | Connects data and features for each standalone page |
| Shared | `src/shared/` | Common navigation and page initialization |
| Presentation | `styles/` | Existing visual system, separated into base and course styles |

## Design patterns

- **Composition Root:** `src/app.js` is the only place that constructs and connects application objects.
- **Repository:** `ProgressRepository` owns local-storage keys, reads and writes. Feature code does not access storage directly.
- **Service:** `SpeechService` isolates the Web Speech API and its browser support check.
- **Controller/View:** the course controller manages lesson state and actions, while `CourseView` renders the DOM.
- **Dependency Injection:** controllers receive their data, repositories, services and callbacks through constructors.
- **Feature Modules:** quiz, course, mini-lesson and progress code can change independently.
- **Data-driven UI:** one reusable course experience renders all CEFR levels from validated curriculum modules.
- **Multi-page architecture:** each major learning goal has a dedicated URL and small composition module while sharing the same core services and persistence layer.

## Adding a lesson

1. Open the matching file under `src/data/courses/`.
2. Add a lesson object with a unique `id` and all bilingual lesson fields.
3. Keep `answer` within the bounds of `options`.
4. Run `npm test` before merging.

## Adding a feature

Create a focused folder under `src/features/`. Keep browser infrastructure in `src/core/`, content in `src/data/`, and dependency construction in `src/app.js`. New features should receive dependencies instead of importing global state.

Standalone learning paths use a small page composition module under `src/pages/`, immutable curriculum data under `src/data/`, and shared browser services under `src/core/`. Their progress must be exposed through `ProgressRepository` and included in the dashboard total.

## Persistence compatibility

The refactor preserves the existing local-storage keys. Each learning path uses a versioned, namespaced key so learners keep their saved progress when new pages are deployed.

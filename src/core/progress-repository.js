const MINI_LESSON_KEY = 'speakspring-progress-v1';
const GRAMMAR_KEY = 'speakspring-grammar-progress-v1';
const SPEAKING_KEY = 'speakspring-speaking-progress-v1';
const VOCABULARY_KEY = 'speakspring-vocabulary-progress-v1';
const LISTENING_KEY = 'speakspring-listening-progress-v1';
const PRONUNCIATION_KEY = 'speakspring-pronunciation-progress-v1';

export class ProgressRepository {
  constructor(storage) {
    this.storage = storage;
  }

  read(key, fallback) {
    try {
      return JSON.parse(this.storage.getItem(key)) || fallback;
    } catch {
      return fallback;
    }
  }

  courseKey(courseKey) {
    return `speakspring-${courseKey}-progress-v1`;
  }

  getCourse(courseKey) {
    return this.read(this.courseKey(courseKey), { completed: [] });
  }

  completeLesson(courseKey, lessonId) {
    const progress = this.getCourse(courseKey);
    if (!progress.completed.includes(lessonId)) progress.completed.push(lessonId);
    this.storage.setItem(this.courseKey(courseKey), JSON.stringify(progress));
    return progress;
  }

  getMiniLesson() {
    return this.read(MINI_LESSON_KEY, { lessonDone: false });
  }

  completeMiniLesson() {
    this.storage.setItem(MINI_LESSON_KEY, JSON.stringify({ lessonDone: true }));
  }

  getGrammar() {
    return this.read(GRAMMAR_KEY, { completed: [], lastLesson: null });
  }

  completeGrammarLesson(lessonId) {
    const progress = this.getGrammar();
    if (!progress.completed.includes(lessonId)) progress.completed.push(lessonId);
    progress.lastLesson = lessonId;
    this.storage.setItem(GRAMMAR_KEY, JSON.stringify(progress));
    return progress;
  }

  rememberGrammarLesson(lessonId) {
    const progress = this.getGrammar();
    progress.lastLesson = lessonId;
    this.storage.setItem(GRAMMAR_KEY, JSON.stringify(progress));
  }

  getSpeaking() {
    return this.read(SPEAKING_KEY, { completed: [] });
  }

  completeSpeakingPractice(practiceId) {
    const progress = this.getSpeaking();
    if (!progress.completed.includes(practiceId)) progress.completed.push(practiceId);
    this.storage.setItem(SPEAKING_KEY, JSON.stringify(progress));
    return progress;
  }

  getVocabulary() { return this.read(VOCABULARY_KEY, { completed: [] }); }
  completeVocabularyPack(packId) { return this.completeItem(VOCABULARY_KEY, this.getVocabulary(), packId); }
  getListening() { return this.read(LISTENING_KEY, { completed: [] }); }
  completeListeningPractice(practiceId) { return this.completeItem(LISTENING_KEY, this.getListening(), practiceId); }
  getPronunciation() { return this.read(PRONUNCIATION_KEY, { completed: [] }); }
  completePronunciationPractice(practiceId) { return this.completeItem(PRONUNCIATION_KEY, this.getPronunciation(), practiceId); }

  completeItem(key, progress, itemId) {
    if (!progress.completed.includes(itemId)) progress.completed.push(itemId);
    this.storage.setItem(key, JSON.stringify(progress));
    return progress;
  }
}

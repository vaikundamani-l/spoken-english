const MINI_LESSON_KEY = 'speakspring-progress-v1';

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
}

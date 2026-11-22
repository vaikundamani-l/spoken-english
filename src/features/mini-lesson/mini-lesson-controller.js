export class MiniLessonController {
  constructor(document, repository, onProgressChange) {
    this.document = document;
    this.repository = repository;
    this.onProgressChange = onProgressChange;
  }

  init() {
    this.document.querySelector('#lessonDone').addEventListener('click', () => {
      this.repository.completeMiniLesson();
      this.render();
      this.onProgressChange();
    });
    this.document.querySelector('#continueBtn').addEventListener('click', () => {
      const target = this.repository.getMiniLesson().lessonDone ? '#path' : '#lesson';
      this.document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    });
    this.render();
  }

  render() {
    const done = this.repository.getMiniLesson().lessonDone;
    const button = this.document.querySelector('#lessonDone');
    button.textContent = done ? 'Lesson completed ✓' : 'Mark lesson complete ✓';
    button.disabled = done;
    button.style.opacity = done ? '.8' : '1';
  }
}

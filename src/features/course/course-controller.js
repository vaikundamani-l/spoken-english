export class CourseController {
  constructor({ courses, levels, repository, speech, view, onProgressChange }) {
    this.courses = courses;
    this.levels = levels;
    this.repository = repository;
    this.speech = speech;
    this.view = view;
    this.onProgressChange = onProgressChange;
    this.courseIndex = 0;
    this.lessonIndex = 0;
    this.answered = false;
  }

  get course() { return this.courses[this.courseIndex]; }
  get lesson() { return this.course.lessons[this.lessonIndex]; }

  init(document) {
    this.view.renderLevels(this.levels, index => this.open(index));
    document.querySelector('#courseBack').addEventListener('click', () => this.view.closeCourse());
    document.querySelector('#completeCourseLesson').addEventListener('click', () => this.complete());
    document.querySelector('#nextCourseLesson').addEventListener('click', () => this.next());
    document.querySelector('#speakLesson').addEventListener('click', () => this.speak(document));
  }

  open(courseIndex) {
    this.courseIndex = courseIndex;
    this.lessonIndex = 0;
    this.view.openCourse(this.course);
    this.selectLesson(0);
  }

  selectLesson(index) {
    this.lessonIndex = Math.max(0, Math.min(index, this.course.lessons.length - 1));
    this.answered = false;
    const progress = this.repository.getCourse(this.course.key);
    this.view.renderLesson(this.course, this.lessonIndex, progress, choice => this.answer(choice));
    this.view.renderLessonList(this.course, this.lessonIndex, progress, index => this.selectLesson(index));
  }

  answer(choice) {
    if (this.answered) return;
    this.answered = true;
    this.view.showAnswer(this.lesson, choice);
  }

  complete() {
    this.repository.completeLesson(this.course.key, this.lesson.id);
    this.selectLesson(this.lessonIndex);
    this.onProgressChange();
  }

  next() {
    this.selectLesson((this.lessonIndex + 1) % this.course.lessons.length);
    this.view.document.querySelector('#coursePlayer').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  speak(document) {
    const button = document.querySelector('#speakLesson');
    this.speech.speakPhrases(this.lesson.phrases, () => button.classList.add('speaking'), () => button.classList.remove('speaking'));
  }
}

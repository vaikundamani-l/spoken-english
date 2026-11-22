export function renderOverallProgress(document, repository, courses) {
  const miniDone = repository.getMiniLesson().lessonDone;
  const completed = courses.reduce((sum, course) => sum + repository.getCourse(course.key).completed.length, 0);
  const total = courses.reduce((sum, course) => sum + course.lessons.length, 0);
  const percent = Math.min(100, (miniDone ? 8 : 0) + Math.round(completed / total * 92));
  document.querySelector('#progressPercent').textContent = `${percent}%`;
  document.querySelector('#progressRing').style.background = `conic-gradient(#6552d8 ${percent * 3.6}deg,#e4e1f7 ${percent * 3.6}deg)`;
  document.querySelector('#progressTitle').textContent = percent ? 'Great start — keep going!' : 'Your journey starts here';
  document.querySelector('#progressText').textContent = completed ? `${completed} of ${total} course lessons completed.` : (miniDone ? 'Your first mini lesson is complete.' : 'Complete your first lesson to begin.');
}

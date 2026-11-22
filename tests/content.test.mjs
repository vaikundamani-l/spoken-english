import test from 'node:test';
import assert from 'node:assert/strict';
import { courses, totalCourseLessons } from '../src/data/courses/index.js';
import { levels } from '../src/data/levels.js';
import { quiz } from '../src/data/quick-quiz.js';

const requiredLessonFields = [
  'id', 'title', 'tamil', 'goal', 'goalTamil', 'phrases', 'note',
  'noteTamil', 'question', 'options', 'answer', 'feedback'
];

test('curriculum contains six aligned CEFR courses and 48 lessons', () => {
  assert.equal(levels.length, 6);
  assert.equal(courses.length, 6);
  assert.equal(totalCourseLessons, 48);
  courses.forEach(course => assert.equal(course.lessons.length, 8, course.key));
});

test('every lesson has complete bilingual practice data and a unique id', () => {
  const ids = new Set();

  for (const course of courses) {
    for (const lesson of course.lessons) {
      requiredLessonFields.forEach(field => assert.ok(field in lesson, `${course.key}/${lesson.id}: ${field}`));
      assert.ok(!ids.has(lesson.id), `duplicate lesson id: ${lesson.id}`);
      ids.add(lesson.id);
      assert.ok(lesson.phrases.length > 0, `${lesson.id}: phrases`);
      lesson.phrases.forEach(phrase => assert.equal(phrase.length, 3, `${lesson.id}: phrase shape`));
      assert.ok(lesson.options.length > 1, `${lesson.id}: options`);
      assert.ok(lesson.answer >= 0 && lesson.answer < lesson.options.length, `${lesson.id}: answer`);
    }
  }
});

test('quick quiz answers point to valid options', () => {
  assert.ok(quiz.length > 0);
  quiz.forEach(question => {
    assert.ok(question.answer >= 0 && question.answer < question.options.length);
    assert.ok(question.explanation.length > 0);
  });
});

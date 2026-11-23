import test from 'node:test';
import assert from 'node:assert/strict';
import { courses, totalCourseLessons } from '../src/data/courses/index.js';
import { levels } from '../src/data/levels.js';
import { quiz } from '../src/data/quick-quiz.js';
import { grammarLessons, grammarModules } from '../src/data/grammar-lessons.js';
import { speakingPractices } from '../src/data/speaking-practice.js';
import { vocabularyPacks } from '../src/data/vocabulary-packs.js';
import { listeningPractices } from '../src/data/listening-practice.js';
import { pronunciationPractices } from '../src/data/pronunciation-practice.js';

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

test('grammar path contains 24 ordered bilingual lessons', () => {
  assert.equal(grammarModules.length, 4);
  assert.equal(grammarLessons.length, 24);
  assert.equal(new Set(grammarLessons.map(lesson => lesson.id)).size, 24);
  assert.deepEqual(grammarModules.flatMap(module => module.lessonIds), grammarLessons.map(lesson => lesson.id));
  grammarLessons.forEach(lesson => {
    assert.ok(lesson.title && lesson.tamil && lesson.explanation && lesson.explanationTamil);
    assert.equal(lesson.examples.length, 3, lesson.id);
    assert.ok(lesson.answer >= 0 && lesson.answer < lesson.options.length, lesson.id);
  });
});

test('speaking lab contains complete guided practices', () => {
  assert.equal(speakingPractices.length, 8);
  assert.equal(new Set(speakingPractices.map(practice => practice.id)).size, 8);
  speakingPractices.forEach(practice => {
    assert.ok(practice.prompt && practice.model && practice.tamil);
    assert.equal(practice.tips.length, 3, practice.id);
  });
});

test('vocabulary builder contains 48 bilingual words in eight packs', () => {
  assert.equal(vocabularyPacks.length, 8);
  assert.equal(new Set(vocabularyPacks.map(pack => pack.id)).size, 8);
  assert.equal(vocabularyPacks.reduce((total, pack) => total + pack.words.length, 0), 48);
  vocabularyPacks.forEach(pack => {
    assert.equal(pack.words.length, 6, pack.id);
    pack.words.forEach(word => assert.equal(word.length, 4, `${pack.id}: word shape`));
  });
});

test('listening path contains eight valid comprehension practices', () => {
  assert.equal(listeningPractices.length, 8);
  assert.equal(new Set(listeningPractices.map(practice => practice.id)).size, 8);
  listeningPractices.forEach(practice => {
    assert.ok(practice.lines.length > 0, `${practice.id}: transcript`);
    assert.ok(practice.summaryTamil, `${practice.id}: Tamil summary`);
    assert.ok(practice.answer >= 0 && practice.answer < practice.options.length, `${practice.id}: answer`);
  });
});

test('pronunciation lab contains eight complete sound drills', () => {
  assert.equal(pronunciationPractices.length, 8);
  assert.equal(new Set(pronunciationPractices.map(practice => practice.id)).size, 8);
  pronunciationPractices.forEach(practice => {
    assert.equal(practice.pairs.length, 3, practice.id);
    practice.pairs.forEach(pair => assert.equal(pair.length, 2, `${practice.id}: sound pair`));
    assert.ok(practice.focus && practice.focusTamil && practice.sentence, practice.id);
  });
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

test('index loads the modular application and stylesheet entry points', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /href="styles\/main\.css"/);
  assert.match(html, /type="module" src="src\/app\.js"/);
  assert.doesNotMatch(html, /href="styles\.css"/);
  assert.doesNotMatch(html, /src="app\.js"/);
});

test('all architecture entry points exist', async () => {
  const files = [
    '../src/app.js',
    '../src/core/progress-repository.js',
    '../src/core/speech-service.js',
    '../src/features/course/course-controller.js',
    '../src/features/course/course-view.js',
    '../src/features/quiz/quick-quiz-controller.js',
    '../src/features/mini-lesson/mini-lesson-controller.js',
    '../src/features/progress/overall-progress.js',
    '../styles/main.css'
  ];
  await Promise.all(files.map(file => access(new URL(file, import.meta.url))));
});

test('professional learning areas are separate navigable pages', async () => {
  const pages = ['index.html', 'courses.html', 'grammar.html', 'grammar-lesson.html', 'practice.html', 'speaking.html', 'progress.html'];
  const contents = await Promise.all(pages.map(page => readFile(new URL(`../${page}`, import.meta.url), 'utf8')));
  contents.forEach((html, index) => {
    assert.match(html, /styles\/main\.css/, pages[index]);
    assert.match(html, /<main[\s>]/, pages[index]);
    assert.match(html, /data-nav="grammar"/, pages[index]);
  });
});

test('the current visual system remains unchanged by the refactor', async () => {
  const styles = await Promise.all([
    readFile(new URL('../styles/base.css', import.meta.url), 'utf8'),
    readFile(new URL('../styles/course.css', import.meta.url), 'utf8')
  ]);
  const css = styles.join('\n');
  assert.doesNotMatch(css, /Approved premium|popular-grid|popular-section/i);
});

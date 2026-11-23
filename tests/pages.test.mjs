import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

const pageNames = ['index.html', 'courses.html', 'grammar.html', 'grammar-lesson.html', 'practice.html', 'speaking.html', 'progress.html'];

test('every page has unique element ids and valid local module entry points', async () => {
  for (const pageName of pageNames) {
    const pageUrl = new URL(`../${pageName}`, import.meta.url);
    const html = await readFile(pageUrl, 'utf8');
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length, `${pageName} has duplicate ids`);

    const moduleSources = [...html.matchAll(/<script[^>]+type="module"[^>]+src="([^"]+)"/g)].map(match => match[1]);
    assert.equal(moduleSources.length, 1, `${pageName} module entry`);
    assert.match(moduleSources[0], /\?v=\d+$/, `${pageName} cache version`);
    const modulePath = moduleSources[0].split('?')[0];
    await access(new URL(`../${modulePath}`, import.meta.url));
  }
});

test('navigation connects every main learning page', async () => {
  for (const pageName of pageNames) {
    const html = await readFile(new URL(`../${pageName}`, import.meta.url), 'utf8');
    for (const destination of ['index.html', 'courses.html', 'grammar.html', 'practice.html', 'speaking.html', 'progress.html']) {
      assert.match(html, new RegExp(`href="${destination.replace('.', '\\.')}"`), `${pageName} -> ${destination}`);
    }
  }
});

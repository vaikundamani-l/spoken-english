import { a1Lessons } from './a1.js';
import { a2Lessons } from './a2.js';
import { b1Lessons } from './b1.js';
import { b2Lessons } from './b2.js';
import { c1Lessons } from './c1.js';
import { c2Lessons } from './c2.js';

export const courses = [
  { key: 'a1', levelLabel: 'A1 · FOUNDATION', title: 'Beginner', summary: 'Build the English you need for your first real conversations.', lessons: a1Lessons },
  { key: 'a2', levelLabel: 'A2 · ELEMENTARY', title: 'Everyday English', summary: 'Use practical English for daily life, travel, shopping, work and plans.', lessons: a2Lessons },
  { key: 'b1', levelLabel: 'B1 · INTERMEDIATE', title: 'Build your voice', summary: 'Connect ideas, tell stories and express opinions with growing confidence.', lessons: b1Lessons },
  { key: 'b2', levelLabel: 'B2 · UPPER-INTERMEDIATE', title: 'Speak with range', summary: 'Handle complex grammar, longer speech and professional situations with confidence.', lessons: b2Lessons },
  { key: 'c1', levelLabel: 'C1 · ADVANCED', title: 'Communicate precisely', summary: 'Express complex ideas precisely across professional, academic and social settings.', lessons: c1Lessons },
  { key: 'c2', levelLabel: 'C2 · MASTERY', title: 'Fluent & natural', summary: 'Control nuance, implication, register and style with expert flexibility.', lessons: c2Lessons }
];

export const totalCourseLessons = courses.reduce((total, course) => total + course.lessons.length, 0);

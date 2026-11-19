const levels = [
  {level:'A1 · FOUNDATION', name:'Beginner', desc:'Start with everyday words, simple sentences and the confidence to introduce yourself.', topics:['Alphabet & sounds','Hello, I am…','Basic questions'], color:'violet'},
  {level:'A2 · ELEMENTARY', name:'Everyday English', desc:'Talk about routines, people, places and plans using clear, useful English.', topics:['Daily routines','Past & future','At shops and work']},
  {level:'B1 · INTERMEDIATE', name:'Build your voice', desc:'Explain experiences, share opinions and keep a conversation moving.', topics:['Storytelling','Giving opinions','Connectors']},
  {level:'B2 · UPPER-INTERMEDIATE', name:'Speak with range', desc:'Express ideas in detail and follow longer conversations with ease.', topics:['Nuance & tone','Work English','Long-form listening']},
  {level:'C1 · ADVANCED', name:'Communicate precisely', desc:'Use English flexibly for study, work and complex conversations.', topics:['Precise vocabulary','Argument & debate','Advanced grammar']},
  {level:'C2 · MASTERY', name:'Fluent & natural', desc:'Understand subtle meaning and express yourself naturally across contexts.', topics:['Idioms & register','Accent awareness','Polished fluency']}
];

const levelGrid = document.querySelector('#levelGrid');
levelGrid.innerHTML = levels.map((item, i) => `<article class="level-card"><div class="level-meta"><span>${item.level}</span><span class="level-number">0${i+1}</span></div><h3>${item.name}</h3><p>${item.desc}</p><div class="level-topics">${item.topics.map(topic => `<span>${topic}</span>`).join('')}</div><span class="level-arrow" aria-hidden="true">↗</span></article>`).join('');

const quiz = [
  {question:'Which sentence is correct?', options:['She go to work every day.','She goes to work every day.','She going to work every day.'], answer:1, explanation:'With “he”, “she” or “it” in the simple present, the verb usually takes -s: she goes.'},
  {question:'Choose the natural sentence.', options:['I am interested in music.','I am interested on music.','I interested in music.'], answer:0, explanation:'The natural phrase is “interested in”. Prepositions often belong to a phrase, so learn them together.'},
  {question:'What is the past form of “teach”?', options:['teached','taught','teaching'], answer:1, explanation:'“Teach” is irregular. Its past form is “taught”: I taught my friend yesterday.'}
];
let quizIndex = 0;
let answered = false;
const quizQuestion = document.querySelector('#quizQuestion');
const quizOptions = document.querySelector('#quizOptions');
const quizFeedback = document.querySelector('#quizFeedback');
const quizNext = document.querySelector('#quizNext');
function renderQuiz(){
  const current = quiz[quizIndex]; answered = false;
  document.querySelector('#quizCount').textContent = `${String(quizIndex+1).padStart(2,'0')} / ${String(quiz.length).padStart(2,'0')}`;
  quizQuestion.textContent = current.question;
  quizFeedback.textContent = '';
  quizNext.hidden = true;
  quizOptions.innerHTML = current.options.map((option, i) => `<button class="quiz-option" type="button" data-answer="${i}">${option}</button>`).join('');
  quizOptions.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    if(answered) return;
    answered = true;
    const choice = Number(button.dataset.answer);
    quizOptions.querySelectorAll('button').forEach((option, i) => { if(i === current.answer) option.classList.add('correct'); });
    if(choice !== current.answer) button.classList.add('wrong');
    quizFeedback.textContent = `${choice === current.answer ? 'That’s right! ' : 'Not quite. '}${current.explanation}`;
    quizNext.textContent = quizIndex === quiz.length - 1 ? 'Try again ↻' : 'Next question →';
    quizNext.hidden = false;
  }));
}
quizNext.addEventListener('click', () => { quizIndex = (quizIndex + 1) % quiz.length; renderQuiz(); });
document.querySelector('#quizStart').addEventListener('click', () => document.querySelector('#quizCard').scrollIntoView({behavior:'smooth',block:'center'}));
renderQuiz();

const STORAGE_KEY = 'speakspring-progress-v1';
function readProgress(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {lessonDone:false};}catch{return {lessonDone:false};}}
function updateProgress(){
  const progress = readProgress();
  const percent = progress.lessonDone ? 8 : 0;
  document.querySelector('#progressPercent').textContent = `${percent}%`;
  document.querySelector('#progressRing').style.background = `conic-gradient(#6552d8 ${percent*3.6}deg,#e4e1f7 ${percent*3.6}deg)`;
  document.querySelector('#progressTitle').textContent = progress.lessonDone ? 'Great start — keep going!' : 'Your journey starts here';
  document.querySelector('#progressText').textContent = progress.lessonDone ? 'Your first lesson is complete.' : 'Complete your first lesson to begin.';
  document.querySelector('#lessonDone').textContent = progress.lessonDone ? 'Lesson completed ✓' : 'Mark lesson complete ✓';
  document.querySelector('#lessonDone').disabled = progress.lessonDone;
  document.querySelector('#lessonDone').style.opacity = progress.lessonDone ? '.8' : '1';
}
document.querySelector('#lessonDone').addEventListener('click', () => {localStorage.setItem(STORAGE_KEY, JSON.stringify({lessonDone:true})); updateProgress();});
document.querySelector('#continueBtn').addEventListener('click', () => document.querySelector(readProgress().lessonDone ? '#path' : '#lesson').scrollIntoView({behavior:'smooth'}));
document.querySelector('#year').textContent = new Date().getFullYear();
updateProgress();

const levels = [
  {level:'A1 · FOUNDATION', name:'Beginner', desc:'Start with everyday words, simple sentences and the confidence to introduce yourself.', topics:['Alphabet & sounds','Hello, I am…','Basic questions'], color:'violet'},
  {level:'A2 · ELEMENTARY', name:'Everyday English', desc:'Talk about routines, people, places and plans using clear, useful English.', topics:['Daily routines','Past & future','At shops and work']},
  {level:'B1 · INTERMEDIATE', name:'Build your voice', desc:'Explain experiences, share opinions and keep a conversation moving.', topics:['Storytelling','Giving opinions','Connectors']},
  {level:'B2 · UPPER-INTERMEDIATE', name:'Speak with range', desc:'Express ideas in detail and follow longer conversations with ease.', topics:['Nuance & tone','Work English','Long-form listening']},
  {level:'C1 · ADVANCED', name:'Communicate precisely', desc:'Use English flexibly for study, work and complex conversations.', topics:['Precise vocabulary','Argument & debate','Advanced grammar']},
  {level:'C2 · MASTERY', name:'Fluent & natural', desc:'Understand subtle meaning and express yourself naturally across contexts.', topics:['Idioms & register','Accent awareness','Polished fluency']}
];

const a1Lessons = [
  {id:'greetings',title:'Greetings',tamil:'வாழ்த்துகள்',goal:'Greet someone politely and respond naturally.',goalTamil:'ஒருவரை மரியாதையாக வாழ்த்தி, இயல்பாக பதில் சொல்லுங்கள்.',phrases:[['Hello!','வணக்கம்!','A friendly greeting'],['Good morning.','காலை வணக்கம்.','Use before noon'],['How are you?','நீங்கள் எப்படி இருக்கிறீர்கள்?','Ask about someone'],["I'm fine, thank you.",'நான் நலமாக இருக்கிறேன், நன்றி.','A polite reply']],note:'“Hello” works at any time. “Good morning” is normally used before noon.',noteTamil:'“Hello” என்பதை எந்த நேரத்திலும் பயன்படுத்தலாம். “Good morning” பொதுவாக மதியத்திற்கு முன் பயன்படுத்தப்படும்.',question:'You meet your teacher at 9 AM. What do you say?',options:['Good morning, sir.','Good night, sir.'],answer:0,feedback:'Correct! “Good morning” fits 9 AM.'},
  {id:'introductions',title:'Introduce yourself',tamil:'உங்களை அறிமுகப்படுத்துதல்',goal:'Say your name, home town and what you do.',goalTamil:'உங்கள் பெயர், ஊர் மற்றும் நீங்கள் என்ன செய்கிறீர்கள் என்பதைச் சொல்லுங்கள்.',phrases:[["My name is Mani.",'என் பெயர் மணி.','Say your name'],["I'm from Tenkasi.",'நான் தென்காசியைச் சேர்ந்தவன்.','Say your place'],["I'm a student.",'நான் ஒரு மாணவர்.','Say what you do'],['Nice to meet you.','உங்களைச் சந்தித்ததில் மகிழ்ச்சி.','End politely']],note:'Use “I am” or the shorter form “I’m”. Both have the same meaning.',noteTamil:'“I am” அல்லது அதன் சுருக்கமான “I’m” இரண்டையும் பயன்படுத்தலாம்; பொருள் ஒன்றே.',question:'Which is a correct introduction?',options:["I'm from Tenkasi.",'I from Tenkasi.'],answer:0,feedback:'Correct! We need “am”: I am / I’m from Tenkasi.'},
  {id:'pronouns-be',title:'I, you, he & she',tamil:'நான், நீங்கள், அவன், அவள்',goal:'Match basic pronouns with am, is and are.',goalTamil:'அடிப்படை pronouns-ஐ am, is, are உடன் சரியாகப் பயன்படுத்துங்கள்.',phrases:[['I am ready.','நான் தயாராக இருக்கிறேன்.','I + am'],['You are kind.','நீங்கள் அன்பானவர்.','You + are'],['He is my friend.','அவர் என் நண்பர்.','He + is'],['She is a doctor.','அவர் ஒரு மருத்துவர்.','She + is']],note:'Use “am” with I, “are” with you/we/they, and “is” with he/she/it.',noteTamil:'I உடன் “am”, you/we/they உடன் “are”, he/she/it உடன் “is” பயன்படுத்தவும்.',question:'Choose the correct sentence.',options:['She is my sister.','She are my sister.'],answer:0,feedback:'Correct! “She” takes “is”.'},
  {id:'family',title:'Family & people',tamil:'குடும்பம் மற்றும் மனிதர்கள்',goal:'Talk simply about the people in your family.',goalTamil:'உங்கள் குடும்பத்தில் உள்ளவர்களைப் பற்றி எளிமையாகப் பேசுங்கள்.',phrases:[['This is my mother.','இவர் என் அம்மா.','Introduce a person'],['I have one brother.','எனக்கு ஒரு சகோதரர் உள்ளார்.','Talk about family'],['My father is a driver.','என் அப்பா ஓட்டுநர்.','Say a job'],['We live together.','நாங்கள் ஒன்றாக வசிக்கிறோம்.','Talk about your home']],note:'Use “this is” when introducing one person who is near you.',noteTamil:'உங்களுக்கு அருகில் உள்ள ஒருவரை அறிமுகப்படுத்த “this is” பயன்படுத்தவும்.',question:'How do you introduce your brother?',options:['This is my brother.','These is my brother.'],answer:0,feedback:'Correct! Use “this is” for one person.'},
  {id:'routines',title:'Daily routines',tamil:'தினசரி செயல்கள்',goal:'Describe things you do every day.',goalTamil:'நீங்கள் தினமும் செய்யும் செயல்களை விவரியுங்கள்.',phrases:[['I wake up at six.','நான் ஆறு மணிக்கு எழுகிறேன்.','Morning routine'],['I go to work.','நான் வேலைக்குச் செல்கிறேன்.','Daily activity'],['I eat lunch at one.','நான் ஒரு மணிக்கு மதிய உணவு சாப்பிடுகிறேன்.','Time + activity'],['I study English daily.','நான் தினமும் ஆங்கிலம் படிக்கிறேன்.','Learning routine']],note:'Use the simple present for habits and routines: I work, I study, I go.',noteTamil:'பழக்கங்கள் மற்றும் தினசரி செயல்களுக்கு simple present பயன்படுத்தவும்.',question:'Which sentence describes a daily habit?',options:['I study English every day.','I studying English every day.'],answer:0,feedback:'Correct! Use the base verb after “I”.'},
  {id:'questions',title:'Simple questions',tamil:'எளிய கேள்விகள்',goal:'Ask and answer common personal questions.',goalTamil:'பொதுவான தனிப்பட்ட கேள்விகளைக் கேட்டு பதிலளியுங்கள்.',phrases:[["What's your name?",'உங்கள் பெயர் என்ன?','Ask a name'],['Where are you from?','நீங்கள் எங்கிருந்து வருகிறீர்கள்?','Ask a place'],['What do you do?','நீங்கள் என்ன செய்கிறீர்கள்?','Ask work or study'],['Do you speak English?','நீங்கள் ஆங்கிலம் பேசுவீர்களா?','A yes/no question']],note:'Use “where” for a place, “what” for information, and “do” for many action questions.',noteTamil:'இடத்திற்கு “where”, தகவலுக்கு “what”, பல செயல் கேள்விகளுக்கு “do” பயன்படுத்தவும்.',question:'Which question asks about a place?',options:['Where are you from?','What is your name?'],answer:0,feedback:'Correct! “Where” asks about a place.'},
  {id:'time-numbers',title:'Numbers & time',tamil:'எண்கள் மற்றும் நேரம்',goal:'Say basic numbers and tell the time.',goalTamil:'அடிப்படை எண்களையும் நேரத்தையும் சொல்லுங்கள்.',phrases:[["It's seven o'clock.",'ஏழு மணி ஆகிறது.','Exact hour'],["It's half past eight.",'எட்டரை மணி ஆகிறது.','Thirty minutes after'],['My phone number is…','என் தொலைபேசி எண்…','Read digits separately'],['Today is Monday.','இன்று திங்கட்கிழமை.','Say the day']],note:'For phone numbers, say each digit separately. Zero can be “zero” or “oh”.',noteTamil:'தொலைபேசி எண்ணில் ஒவ்வொரு இலக்கத்தையும் தனித்தனியாகச் சொல்லவும்.',question:'8:30 is…',options:["half past eight","half past seven"],answer:0,feedback:'Correct! 8:30 is “half past eight”.'},
  {id:'mini-conversation',title:'First conversation',tamil:'முதல் உரையாடல்',goal:'Use what you learned in one short conversation.',goalTamil:'நீங்கள் கற்றவற்றை ஒரு சிறிய உரையாடலில் பயன்படுத்துங்கள்.',phrases:[['Hello! My name is Mani.','வணக்கம்! என் பெயர் மணி.','Start'],["Hi Mani, I'm Arun.",'ஹாய் மணி, நான் அருண்.','Reply'],['Where are you from?','நீங்கள் எங்கிருந்து வருகிறீர்கள்?','Continue'],["I'm from Tenkasi. Nice to meet you!",'நான் தென்காசியைச் சேர்ந்தவன். சந்தித்ததில் மகிழ்ச்சி!','Finish politely']],note:'A simple conversation needs a greeting, an introduction, one question and a polite ending.',noteTamil:'ஒரு எளிய உரையாடலுக்கு வாழ்த்து, அறிமுகம், ஒரு கேள்வி மற்றும் மரியாதையான முடிவு போதும்.',question:'What is a natural polite ending?',options:['Nice to meet you.','What your name?'],answer:0,feedback:'Correct! “Nice to meet you” is a natural polite ending.'}
];

const levelGrid = document.querySelector('#levelGrid');
levelGrid.innerHTML = levels.map((item, i) => `<button class="level-card" type="button" aria-label="Open ${item.name} course"><div class="level-meta"><span>${item.level}</span><span class="level-number">0${i+1}</span></div><h3>${item.name}</h3><p>${item.desc}</p><div class="level-topics">${item.topics.map(topic => `<span>${topic}</span>`).join('')}</div><span class="level-arrow" aria-hidden="true">↗</span></button>`).join('');

const COURSE_STORAGE_KEY = 'speakspring-a1-progress-v1';
let activeLesson = 0;
let practiceAnswered = false;
function readCourseProgress(){try{return JSON.parse(localStorage.getItem(COURSE_STORAGE_KEY)) || {completed:[]};}catch{return {completed:[]};}}
function writeCourseProgress(progress){localStorage.setItem(COURSE_STORAGE_KEY,JSON.stringify(progress));}
function renderLessonList(){
  const progress=readCourseProgress();
  document.querySelector('#lessonList').innerHTML=a1Lessons.map((lesson,i)=>`<button type="button" data-lesson="${i}" class="${i===activeLesson?'active':''} ${progress.completed.includes(lesson.id)?'done':''}"><span class="lesson-list-number">${progress.completed.includes(lesson.id)?'✓':String(i+1).padStart(2,'0')}</span><span class="lesson-list-copy"><b>${lesson.title}</b><small>${lesson.tamil}</small></span><span class="lesson-status">${progress.completed.includes(lesson.id)?'✓':''}</span></button>`).join('');
  document.querySelectorAll('[data-lesson]').forEach(button=>button.addEventListener('click',()=>selectCourseLesson(Number(button.dataset.lesson))));
  const count=progress.completed.length; const percent=Math.round(count/a1Lessons.length*100);
  document.querySelector('#courseProgressText').textContent=`${count} of ${a1Lessons.length} lessons`;
  document.querySelector('#courseProgressPercent').textContent=`${percent}%`;
  document.querySelector('#courseProgressBar').style.width=`${percent}%`;
}
function selectCourseLesson(index){
  activeLesson=Math.max(0,Math.min(index,a1Lessons.length-1)); practiceAnswered=false;
  const lesson=a1Lessons[activeLesson]; const progress=readCourseProgress();
  document.querySelector('#playerLessonNumber').textContent=`LESSON ${String(activeLesson+1).padStart(2,'0')}`;
  document.querySelector('#playerTitle').textContent=lesson.title; document.querySelector('#playerTamilTitle').textContent=lesson.tamil;
  document.querySelector('#playerGoal').textContent=lesson.goal; document.querySelector('#playerGoalTamil').textContent=lesson.goalTamil;
  document.querySelector('#phraseBoard').innerHTML=lesson.phrases.map(phrase=>`<div class="phrase-card"><b>${phrase[0]}</b><span>${phrase[1]}</span><small>${phrase[2]}</small></div>`).join('');
  document.querySelector('#playerNote').textContent=lesson.note; document.querySelector('#playerNoteTamil').textContent=lesson.noteTamil;
  document.querySelector('#checkQuestion').textContent=lesson.question;
  document.querySelector('#checkOptions').innerHTML=lesson.options.map((option,i)=>`<button type="button" data-choice="${i}">${option}</button>`).join('');
  document.querySelector('#checkFeedback').textContent='';
  document.querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>answerCoursePractice(Number(button.dataset.choice))));
  const done=progress.completed.includes(lesson.id); const completeButton=document.querySelector('#completeCourseLesson');
  completeButton.disabled=done; completeButton.innerHTML=done?'Lesson completed <span>✓</span>':'Complete lesson <span>✓</span>';
  document.querySelector('#nextCourseLesson').innerHTML=activeLesson===a1Lessons.length-1?'Back to first lesson <span>↻</span>':'Next lesson <span>→</span>';
  renderLessonList();
}
function answerCoursePractice(choice){
  if(practiceAnswered)return; practiceAnswered=true; const lesson=a1Lessons[activeLesson];
  document.querySelectorAll('[data-choice]').forEach((button,i)=>{if(i===lesson.answer)button.classList.add('correct');});
  if(choice!==lesson.answer)document.querySelector(`[data-choice="${choice}"]`).classList.add('wrong');
  document.querySelector('#checkFeedback').textContent=choice===lesson.answer?lesson.feedback:`Not quite. ${lesson.feedback}`;
}
function openA1Course(){document.querySelector('#course').hidden=false;selectCourseLesson(activeLesson);document.querySelector('#course').scrollIntoView({behavior:'smooth',block:'start'});}
document.querySelectorAll('.level-card').forEach((card,i)=>card.addEventListener('click',()=>{if(i===0){openA1Course();return;}const arrow=card.querySelector('.level-arrow');arrow.textContent='Soon';setTimeout(()=>arrow.textContent='↗',1500);}));
document.querySelector('#courseBack').addEventListener('click',()=>{document.querySelector('#course').hidden=true;document.querySelector('#path').scrollIntoView({behavior:'smooth'});});
document.querySelector('#completeCourseLesson').addEventListener('click',()=>{const progress=readCourseProgress();const id=a1Lessons[activeLesson].id;if(!progress.completed.includes(id))progress.completed.push(id);writeCourseProgress(progress);selectCourseLesson(activeLesson);updateProgress();});
document.querySelector('#nextCourseLesson').addEventListener('click',()=>{selectCourseLesson((activeLesson+1)%a1Lessons.length);document.querySelector('#coursePlayer').scrollIntoView({behavior:'smooth',block:'start'});});
document.querySelector('#speakLesson').addEventListener('click',()=>{if(!('speechSynthesis' in window))return;window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(a1Lessons[activeLesson].phrases.map(item=>item[0]).join('. '));utterance.lang='en-IN';utterance.rate=.82;const button=document.querySelector('#speakLesson');button.classList.add('speaking');utterance.onend=()=>button.classList.remove('speaking');window.speechSynthesis.speak(utterance);});

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
  const courseCount=readCourseProgress().completed.length;
  const percent = Math.min(100,(progress.lessonDone ? 8 : 0)+Math.round(courseCount/a1Lessons.length*17));
  document.querySelector('#progressPercent').textContent = `${percent}%`;
  document.querySelector('#progressRing').style.background = `conic-gradient(#6552d8 ${percent*3.6}deg,#e4e1f7 ${percent*3.6}deg)`;
  document.querySelector('#progressTitle').textContent = percent ? 'Great start — keep going!' : 'Your journey starts here';
  document.querySelector('#progressText').textContent = courseCount ? `${courseCount} A1 lesson${courseCount===1?'':'s'} completed.` : (progress.lessonDone ? 'Your first mini lesson is complete.' : 'Complete your first lesson to begin.');
  document.querySelector('#lessonDone').textContent = progress.lessonDone ? 'Lesson completed ✓' : 'Mark lesson complete ✓';
  document.querySelector('#lessonDone').disabled = progress.lessonDone;
  document.querySelector('#lessonDone').style.opacity = progress.lessonDone ? '.8' : '1';
}
document.querySelector('#lessonDone').addEventListener('click', () => {localStorage.setItem(STORAGE_KEY, JSON.stringify({lessonDone:true})); updateProgress();});
document.querySelector('#continueBtn').addEventListener('click', () => document.querySelector(readProgress().lessonDone ? '#path' : '#lesson').scrollIntoView({behavior:'smooth'}));
document.querySelector('#year').textContent = new Date().getFullYear();
renderLessonList();
updateProgress();

export const grammarModules = [
  { id: 'foundation', number: '01', title: 'Build the foundation', tamil: 'அடித்தளத்தை உருவாக்குங்கள்', level: 'START HERE', description: 'Understand how English sentences and word groups work.', lessonIds: ['sentence-order', 'nouns', 'pronouns', 'be-verbs', 'articles', 'adjectives'] },
  { id: 'everyday', number: '02', title: 'Everyday verbs & tenses', tamil: 'தினசரி வினைச்சொற்கள் மற்றும் காலங்கள்', level: 'A1–A2', description: 'Talk about habits, actions, the past and the future.', lessonIds: ['simple-present', 'questions', 'present-continuous', 'simple-past', 'past-continuous', 'future-forms'] },
  { id: 'accuracy', number: '03', title: 'Speak with accuracy', tamil: 'துல்லியமாகப் பேசுங்கள்', level: 'A2–B1', description: 'Choose the right forms and connect ideas clearly.', lessonIds: ['present-perfect', 'countability', 'prepositions', 'modals', 'comparisons', 'conjunctions'] },
  { id: 'advanced', number: '04', title: 'Advanced control', tamil: 'மேம்பட்ட மொழிக் கட்டுப்பாடு', level: 'B1–C1', description: 'Handle complex structures, nuance and professional English.', lessonIds: ['conditionals', 'passive-voice', 'reported-speech', 'relative-clauses', 'gerunds-infinitives', 'emphasis-hedging'] }
];

export const grammarLessons = [
  {
    id: 'sentence-order', moduleId: 'foundation', title: 'Build a sentence', tamil: 'ஒரு வாக்கியத்தை அமைத்தல்', duration: 8,
    objective: 'Put a subject, verb and object in the natural English order.', objectiveTamil: 'Subject, verb, object ஆகியவற்றை சரியான ஆங்கில வரிசையில் அமைக்கவும்.',
    explanation: 'A basic English statement normally follows Subject + Verb + Object. The subject performs the action; the object receives it.',
    explanationTamil: 'அடிப்படை ஆங்கில வாக்கியம் பொதுவாக Subject + Verb + Object வரிசையில் வரும். Subject செயலைச் செய்கிறது; Object செயலைப் பெறுகிறது.',
    formula: 'Subject + Verb + Object',
    examples: [['I drink water.', 'நான் தண்ணீர் குடிக்கிறேன்.'], ['She reads books.', 'அவள் புத்தகங்கள் படிக்கிறாள்.'], ['They play cricket.', 'அவர்கள் கிரிக்கெட் விளையாடுகிறார்கள்.']],
    mistake: ['I water drink.', 'I drink water.'], question: 'Choose the sentence with correct word order.', options: ['He likes music.', 'He music likes.', 'Likes he music.'], answer: 0, feedback: '“He” is the subject, “likes” is the verb and “music” is the object.'
  },
  {
    id: 'nouns', moduleId: 'foundation', title: 'Nouns', tamil: 'பெயர்ச்சொற்கள்', duration: 8,
    objective: 'Identify people, places, things and ideas.', objectiveTamil: 'மக்கள், இடங்கள், பொருட்கள் மற்றும் எண்ணங்களைக் குறிக்கும் சொற்களை அறியவும்.',
    explanation: 'A noun names a person, place, thing or idea. Proper nouns such as Chennai and Ravi begin with a capital letter.',
    explanationTamil: 'Noun என்பது ஒருவர், இடம், பொருள் அல்லது எண்ணத்தின் பெயர். Chennai, Ravi போன்ற proper noun பெரிய எழுத்தில் தொடங்கும்.',
    formula: 'person · place · thing · idea',
    examples: [['Ravi works in Chennai.', 'ரவி சென்னையில் வேலை செய்கிறார்.'], ['The phone is new.', 'தொலைபேசி புதியது.'], ['Kindness matters.', 'அன்பு முக்கியம்.']],
    mistake: ['i live in tamil nadu.', 'I live in Tamil Nadu.'], question: 'Which word is a noun?', options: ['quickly', 'teacher', 'beautiful'], answer: 1, feedback: '“Teacher” names a person, so it is a noun.'
  },
  {
    id: 'pronouns', moduleId: 'foundation', title: 'Pronouns', tamil: 'பிரதிப்பெயர்கள்', duration: 9,
    objective: 'Replace repeated nouns with clear pronouns.', objectiveTamil: 'மீண்டும் வரும் பெயர்ச்சொற்களுக்கு பதிலாக pronoun பயன்படுத்தவும்.',
    explanation: 'Pronouns replace nouns: I, you, he, she, it, we and they. Choose a pronoun that matches the person or thing.',
    explanationTamil: 'Pronoun ஒரு noun-க்கு பதிலாக வரும்: I, you, he, she, it, we, they. நபர் அல்லது பொருளுக்கு பொருந்தும் pronoun-ஐ தேர்ந்தெடுக்கவும்.',
    formula: 'Ravi → he · Meena → she · book → it',
    examples: [['Meena is here. She is ready.', 'மீனா இங்கே இருக்கிறார். அவள் தயாராக இருக்கிறார்.'], ['The car is old. It is slow.', 'கார் பழையது. அது மெதுவானது.'], ['Ravi and I work. We are busy.', 'ரவியும் நானும் வேலை செய்கிறோம். நாங்கள் பிஸியாக இருக்கிறோம்.']],
    mistake: ['My sister is a doctor. He works here.', 'My sister is a doctor. She works here.'], question: 'Arun and Bala are friends. ___ study together.', options: ['He', 'They', 'It'], answer: 1, feedback: 'Use “they” for two or more people.'
  },
  {
    id: 'be-verbs', moduleId: 'foundation', title: 'Am, is & are', tamil: 'Am, is, are பயன்பாடு', duration: 10,
    objective: 'Use the present forms of “be” correctly.', objectiveTamil: '“Be” verb-ன் present வடிவங்களை சரியாகப் பயன்படுத்தவும்.',
    explanation: 'Use am with I, is with he/she/it or one thing, and are with you/we/they or plural nouns.',
    explanationTamil: 'I உடன் am; he/she/it அல்லது ஒருமையுடன் is; you/we/they அல்லது பன்மையுடன் are பயன்படுத்தவும்.',
    formula: 'I am · He/She/It is · You/We/They are',
    examples: [['I am tired.', 'நான் சோர்வாக இருக்கிறேன்.'], ['She is a teacher.', 'அவள் ஒரு ஆசிரியர்.'], ['They are at home.', 'அவர்கள் வீட்டில் இருக்கிறார்கள்.']],
    mistake: ['I is ready.', 'I am ready.'], question: 'Choose the correct sentence.', options: ['We is happy.', 'We are happy.', 'We am happy.'], answer: 1, feedback: 'Use “are” with “we”.'
  },
  {
    id: 'articles', moduleId: 'foundation', title: 'A, an & the', tamil: 'A, an, the பயன்பாடு', duration: 11,
    objective: 'Choose an article for general and specific nouns.', objectiveTamil: 'பொதுவான மற்றும் குறிப்பிட்ட noun-களுக்கு சரியான article தேர்ந்தெடுக்கவும்.',
    explanation: 'Use a before a consonant sound, an before a vowel sound, and the when the listener knows the specific thing.',
    explanationTamil: 'Consonant sound முன் a, vowel sound முன் an, குறிப்பிட்ட பொருள் இருவருக்கும் தெரிந்தால் the பயன்படுத்தவும்.',
    formula: 'a book · an apple · the book on the table',
    examples: [['I need a pen.', 'எனக்கு ஒரு பேனா வேண்டும்.'], ['She ate an orange.', 'அவள் ஒரு ஆரஞ்சு சாப்பிட்டாள்.'], ['Close the door.', 'அந்த கதவை மூடுங்கள்.']],
    mistake: ['an university', 'a university'], question: 'Choose the correct phrase.', options: ['a umbrella', 'an umbrella', 'the umbrella (any umbrella)'], answer: 1, feedback: '“Umbrella” begins with a vowel sound, so use “an”.'
  },
  {
    id: 'adjectives', moduleId: 'foundation', title: 'Adjectives', tamil: 'பெயரடைகள்', duration: 9,
    objective: 'Describe nouns clearly.', objectiveTamil: 'Noun-களை தெளிவாக விவரிக்கவும்.',
    explanation: 'An adjective describes a noun. In English it usually comes before the noun, or after a linking verb such as be.',
    explanationTamil: 'Adjective ஒரு noun-ஐ விவரிக்கும். பொதுவாக noun-க்கு முன் அல்லது be போன்ற linking verb-க்கு பின் வரும்.',
    formula: 'adjective + noun · be + adjective',
    examples: [['It is a small house.', 'அது ஒரு சிறிய வீடு.'], ['The house is small.', 'அந்த வீடு சிறியது.'], ['She has a clear voice.', 'அவளுக்கு தெளிவான குரல் உள்ளது.']],
    mistake: ['a car red', 'a red car'], question: 'Which phrase is natural English?', options: ['a beautiful flower', 'a flower beautiful', 'beautifully flower'], answer: 0, feedback: 'An adjective normally comes before its noun.'
  },
  {
    id: 'simple-present', moduleId: 'everyday', title: 'Simple present', tamil: 'எளிய நிகழ்காலம்', duration: 12,
    objective: 'Talk about habits, facts and routines.', objectiveTamil: 'பழக்கங்கள், உண்மைகள் மற்றும் தினசரி செயல்களைப் பேசவும்.',
    explanation: 'Use the base verb for I/you/we/they. Add -s or -es for he/she/it in affirmative statements.',
    explanationTamil: 'I/you/we/they உடன் base verb. He/she/it affirmative வாக்கியத்தில் verb-க்கு -s அல்லது -es சேர்க்கவும்.',
    formula: 'I work · She works',
    examples: [['I wake up at six.', 'நான் ஆறு மணிக்கு எழுகிறேன்.'], ['He works in a bank.', 'அவர் வங்கியில் வேலை செய்கிறார்.'], ['Water boils at 100°C.', 'தண்ணீர் 100°C-ல் கொதிக்கிறது.']],
    mistake: ['She go to work.', 'She goes to work.'], question: 'Choose the correct sentence.', options: ['He play cricket.', 'He plays cricket.', 'He playing cricket.'], answer: 1, feedback: 'Add -s to the verb with “he” in the simple present.'
  },
  {
    id: 'questions', moduleId: 'everyday', title: 'Questions & negatives', tamil: 'கேள்விகள் மற்றும் எதிர்மறை வாக்கியங்கள்', duration: 12,
    objective: 'Form simple-present questions and negatives.', objectiveTamil: 'Simple present கேள்வி மற்றும் negative வாக்கியங்களை அமைக்கவும்.',
    explanation: 'Use do with I/you/we/they and does with he/she/it. After do or does, use the base form of the main verb.',
    explanationTamil: 'I/you/we/they உடன் do; he/she/it உடன் does. Do/does-க்கு பின் main verb base form-ல் வர வேண்டும்.',
    formula: 'Do/Does + subject + base verb?',
    examples: [['Do you speak English?', 'நீங்கள் ஆங்கிலம் பேசுவீர்களா?'], ['Does she work here?', 'அவள் இங்கே வேலை செய்கிறாளா?'], ['He does not drive.', 'அவர் வாகனம் ஓட்டுவதில்லை.']],
    mistake: ['Does she works here?', 'Does she work here?'], question: 'Choose the correct question.', options: ['Does he likes tea?', 'Does he like tea?', 'Do he like tea?'], answer: 1, feedback: 'After “does”, use the base verb “like”.'
  },
  {
    id: 'present-continuous', moduleId: 'everyday', title: 'Present continuous', tamil: 'தொடர் நிகழ்காலம்', duration: 11,
    objective: 'Describe actions happening now or around now.', objectiveTamil: 'இப்போது அல்லது தற்போதைய காலப்பகுதியில் நடக்கும் செயலை விவரிக்கவும்.',
    explanation: 'Use am/is/are + verb-ing for an action in progress. Some state verbs such as know and like are not normally continuous.',
    explanationTamil: 'நடந்து கொண்டிருக்கும் செயலுக்கு am/is/are + verb-ing. know, like போன்ற state verb பொதுவாக continuous-ல் வராது.',
    formula: 'subject + am/is/are + verb-ing',
    examples: [['I am studying now.', 'நான் இப்போது படித்துக்கொண்டிருக்கிறேன்.'], ['They are waiting outside.', 'அவர்கள் வெளியே காத்திருக்கிறார்கள்.'], ['She is working this week.', 'அவள் இந்த வாரம் வேலை செய்கிறாள்.']],
    mistake: ['I am know the answer.', 'I know the answer.'], question: 'Which action is happening now?', options: ['She cooks every day.', 'She is cooking now.', 'She cooked yesterday.'], answer: 1, feedback: '“Is cooking” shows an action in progress now.'
  },
  {
    id: 'simple-past', moduleId: 'everyday', title: 'Simple past', tamil: 'எளிய இறந்தகாலம்', duration: 12,
    objective: 'Talk about completed past actions.', objectiveTamil: 'முடிந்துபோன கடந்தகால செயல்களைப் பேசவும்.',
    explanation: 'Use the past form for a completed action at a finished past time. Regular verbs take -ed; irregular verbs change form.',
    explanationTamil: 'முடிந்த கடந்தகால செயலுக்கு past form பயன்படுத்தவும். Regular verb-க்கு -ed; irregular verb வடிவம் மாறும்.',
    formula: 'subject + past verb',
    examples: [['I visited Madurai yesterday.', 'நான் நேற்று மதுரைக்கு சென்றேன்.'], ['She bought a book.', 'அவள் ஒரு புத்தகம் வாங்கினாள்.'], ['We did not go.', 'நாங்கள் செல்லவில்லை.']],
    mistake: ['Did you went?', 'Did you go?'], question: 'Choose the correct past sentence.', options: ['I see him yesterday.', 'I saw him yesterday.', 'I have see him yesterday.'], answer: 1, feedback: '“Saw” is the past form of “see”.'
  },
  {
    id: 'past-continuous', moduleId: 'everyday', title: 'Past continuous', tamil: 'தொடர் இறந்தகாலம்', duration: 11,
    objective: 'Describe an action that was in progress in the past.', objectiveTamil: 'கடந்தகாலத்தில் நடந்து கொண்டிருந்த செயலை விவரிக்கவும்.',
    explanation: 'Use was/were + verb-ing for a past action in progress, often when another shorter action happened.',
    explanationTamil: 'கடந்தகாலத்தில் தொடர்ந்த செயலுக்கு was/were + verb-ing; அப்போது மற்றொரு குறுகிய செயல் நடந்திருக்கலாம்.',
    formula: 'was/were + verb-ing',
    examples: [['I was sleeping at ten.', 'பத்து மணிக்கு நான் தூங்கிக்கொண்டிருந்தேன்.'], ['They were playing when it rained.', 'மழை பெய்தபோது அவர்கள் விளையாடிக்கொண்டிருந்தார்கள்.'], ['She was not listening.', 'அவள் கேட்டுக்கொண்டிருக்கவில்லை.']],
    mistake: ['We was waiting.', 'We were waiting.'], question: 'Choose the correct sentence.', options: ['I was cook when he called.', 'I was cooking when he called.', 'I cooking when he called.'], answer: 1, feedback: 'Past continuous uses “was/were + verb-ing”.'
  },
  {
    id: 'future-forms', moduleId: 'everyday', title: 'Future forms', tamil: 'எதிர்கால வடிவங்கள்', duration: 13,
    objective: 'Choose will, going to or present continuous for future meaning.', objectiveTamil: 'எதிர்கால பொருளுக்கு will, going to அல்லது present continuous தேர்ந்தெடுக்கவும்.',
    explanation: 'Use will for instant decisions and predictions, going to for intentions or visible evidence, and present continuous for arrangements.',
    explanationTamil: 'உடனடி முடிவு/கணிப்புக்கு will; திட்டம்/தெளிவான ஆதாரத்திற்கு going to; ஏற்பாட்டுக்கு present continuous.',
    formula: 'will + verb · be going to + verb · be + verb-ing',
    examples: [['I will help you.', 'நான் உங்களுக்கு உதவுவேன்.'], ['It is going to rain.', 'மழை பெய்யப் போகிறது.'], ['I am meeting Ravi tomorrow.', 'நான் நாளை ரவியை சந்திக்கிறேன்.']],
    mistake: ['I will to call.', 'I will call.'], question: 'You decided before now. Which is natural?', options: ['I am going to study tonight.', 'I study yesterday.', 'I will to study tonight.'], answer: 0, feedback: '“Going to” expresses an existing intention.'
  },
  {
    id: 'present-perfect', moduleId: 'accuracy', title: 'Present perfect', tamil: 'நிகழ்கால நிறைவுவினை', duration: 14,
    objective: 'Connect a past action to the present.', objectiveTamil: 'கடந்த செயலை தற்போதைய நிலைக்கு இணைக்கவும்.',
    explanation: 'Use have/has + past participle for experience, unfinished time or a past result that matters now. Do not use it with a finished past time such as yesterday.',
    explanationTamil: 'அனுபவம், முடியாத காலம் அல்லது இப்போது முக்கியமான past result-க்கு have/has + past participle. yesterday போன்ற finished time உடன் பயன்படுத்த வேண்டாம்.',
    formula: 'have/has + past participle',
    examples: [['I have finished the work.', 'நான் வேலையை முடித்துவிட்டேன்.'], ['She has visited Delhi twice.', 'அவள் டெல்லிக்கு இருமுறை சென்றிருக்கிறாள்.'], ['We have lived here since 2020.', 'நாங்கள் 2020 முதல் இங்கே வசிக்கிறோம்.']],
    mistake: ['I have seen him yesterday.', 'I saw him yesterday.'], question: 'Choose the correct sentence.', options: ['She has finished already.', 'She have finished already.', 'She has finish already.'], answer: 0, feedback: 'Use “has + past participle” with “she”.'
  },
  {
    id: 'countability', moduleId: 'accuracy', title: 'Countable & uncountable nouns', tamil: 'எண்ணக்கூடிய மற்றும் எண்ணமுடியாத பெயர்ச்சொற்கள்', duration: 12,
    objective: 'Use much, many, some and plural forms correctly.', objectiveTamil: 'Much, many, some மற்றும் plural வடிவங்களை சரியாகப் பயன்படுத்தவும்.',
    explanation: 'Countable nouns can be counted and have plurals. Uncountable nouns such as water and information normally do not take a/an or a plural -s.',
    explanationTamil: 'Countable noun-ஐ எண்ணலாம்; plural உண்டு. water, information போன்ற uncountable noun பொதுவாக a/an அல்லது plural -s பெறாது.',
    formula: 'many books · much water · some information',
    examples: [['I have three books.', 'என்னிடம் மூன்று புத்தகங்கள் உள்ளன.'], ['We need some water.', 'நமக்கு கொஞ்சம் தண்ணீர் வேண்டும்.'], ['How much time is left?', 'எவ்வளவு நேரம் மீதமுள்ளது?']],
    mistake: ['an information', 'some information'], question: 'Choose the natural phrase.', options: ['many advice', 'an advice', 'some advice'], answer: 2, feedback: '“Advice” is uncountable, so use “some advice”.'
  },
  {
    id: 'prepositions', moduleId: 'accuracy', title: 'Prepositions', tamil: 'முன்னிடைச் சொற்கள்', duration: 13,
    objective: 'Use common time and place prepositions.', objectiveTamil: 'காலம் மற்றும் இடத்திற்கான common preposition-களைப் பயன்படுத்தவும்.',
    explanation: 'Use at for a point, on for a surface/day and in for an enclosed place or longer period. Learn fixed phrases as complete units.',
    explanationTamil: 'ஒரு point-க்கு at; surface/day-க்கு on; enclosed place/long period-க்கு in. Fixed phrase-ஐ முழுமையாகக் கற்கவும்.',
    formula: 'at 6:00 · on Monday · in July',
    examples: [['Meet me at the station.', 'நிலையத்தில் என்னை சந்திக்கவும்.'], ['The keys are on the table.', 'சாவிகள் மேசையில் உள்ளன.'], ['I was born in May.', 'நான் மே மாதத்தில் பிறந்தேன்.']],
    mistake: ['on 6 o’clock', 'at 6 o’clock'], question: 'Choose the correct phrase.', options: ['in Monday', 'at Monday', 'on Monday'], answer: 2, feedback: 'Use “on” with days of the week.'
  },
  {
    id: 'modals', moduleId: 'accuracy', title: 'Modal verbs', tamil: 'Modal வினைச்சொற்கள்', duration: 13,
    objective: 'Express ability, advice, permission and obligation.', objectiveTamil: 'திறன், ஆலோசனை, அனுமதி மற்றும் கடமையை வெளிப்படுத்தவும்.',
    explanation: 'Can, could, should, must and might are followed by the base verb without “to”. Each modal changes the speaker’s meaning or strength.',
    explanationTamil: 'Can, could, should, must, might ஆகியவற்றுக்கு பின் “to” இல்லாமல் base verb வரும். ஒவ்வொன்றும் பொருள்/வலிமையை மாற்றும்.',
    formula: 'modal + base verb',
    examples: [['I can swim.', 'எனக்கு நீந்த முடியும்.'], ['You should rest.', 'நீங்கள் ஓய்வெடுக்க வேண்டும்.'], ['We must leave now.', 'நாம் இப்போது செல்ல வேண்டும்.']],
    mistake: ['She can to drive.', 'She can drive.'], question: 'Which sentence gives advice?', options: ['You should sleep earlier.', 'You can speak Tamil.', 'You must not enter.'], answer: 0, feedback: '“Should” commonly gives advice.'
  },
  {
    id: 'comparisons', moduleId: 'accuracy', title: 'Comparatives & superlatives', tamil: 'ஒப்பீட்டு வடிவங்கள்', duration: 12,
    objective: 'Compare two or more people and things.', objectiveTamil: 'இரண்டு அல்லது அதற்கு மேற்பட்ட நபர்/பொருட்களை ஒப்பிடவும்.',
    explanation: 'Use a comparative for two things and a superlative for the highest in a group. Short adjectives often take -er/-est; longer ones use more/most.',
    explanationTamil: 'இரண்டை ஒப்பிட comparative; குழுவில் உயர்ந்ததைச் சொல்ல superlative. Short adjective-க்கு -er/-est; long adjective-க்கு more/most.',
    formula: 'taller than · more useful than · the best',
    examples: [['Ravi is taller than Arun.', 'ரவி அருணைவிட உயரமானவர்.'], ['This is more useful.', 'இது அதிக பயனுள்ளது.'], ['She is the best player.', 'அவள் சிறந்த வீராங்கனை.']],
    mistake: ['more easier', 'easier'], question: 'Choose the correct sentence.', options: ['This bag is cheaper than that one.', 'This bag is more cheaper.', 'This is cheapest than that.'], answer: 0, feedback: '“Cheaper than” is the correct comparative form.'
  },
  {
    id: 'conjunctions', moduleId: 'accuracy', title: 'Connect ideas', tamil: 'கருத்துகளை இணைத்தல்', duration: 12,
    objective: 'Join ideas with clear logical relationships.', objectiveTamil: 'தெளிவான logical relationship உடன் கருத்துகளை இணைக்கவும்.',
    explanation: 'Use and to add, but/although to contrast, because to give a reason and so to give a result.',
    explanationTamil: 'சேர்க்க and; contrast-க்கு but/although; காரணத்திற்கு because; விளைவுக்கு so பயன்படுத்தவும்.',
    formula: 'idea + connector + idea',
    examples: [['I was tired, but I continued.', 'நான் சோர்வாக இருந்தேன், ஆனால் தொடர்ந்தேன்.'], ['I stayed home because it rained.', 'மழை பெய்ததால் வீட்டில் இருந்தேன்.'], ['It rained, so we waited.', 'மழை பெய்தது, அதனால் காத்திருந்தோம்.']],
    mistake: ['Because it rained, so we waited.', 'Because it rained, we waited.'], question: 'Choose the connector that gives a reason: “I called ___ I needed help.”', options: ['but', 'because', 'so'], answer: 1, feedback: '“Because” introduces the reason.'
  },
  {
    id: 'conditionals', moduleId: 'advanced', title: 'Conditionals', tamil: 'நிபந்தனை வாக்கியங்கள்', duration: 15,
    objective: 'Discuss facts, possibilities and imaginary situations.', objectiveTamil: 'உண்மை, சாத்தியம் மற்றும் கற்பனை சூழல்களைப் பேசவும்.',
    explanation: 'Conditional patterns show how real a situation is: zero for facts, first for possible futures, second for imaginary presents and third for imaginary pasts.',
    explanationTamil: 'Zero fact-க்கு; first future possibility-க்கு; second imaginary present-க்கு; third imaginary past-க்கு.',
    formula: 'If + condition, result',
    examples: [['If you heat ice, it melts.', 'பனியை சூடாக்கினால் உருகும்.'], ['If it rains, we will stay home.', 'மழை பெய்தால் வீட்டில் இருப்போம்.'], ['If I had time, I would travel.', 'எனக்கு நேரம் இருந்தால் பயணம் செய்வேன்.']],
    mistake: ['If it will rain, we will stay.', 'If it rains, we will stay.'], question: 'Which sentence is an imaginary present?', options: ['If I were rich, I would travel.', 'If water boils, it turns to steam.', 'If it rains, I will wait.'], answer: 0, feedback: 'Second conditional describes an imaginary present situation.'
  },
  {
    id: 'passive-voice', moduleId: 'advanced', title: 'Passive voice', tamil: 'செயப்பாட்டு வினை', duration: 14,
    objective: 'Focus on an action or result instead of the doer.', objectiveTamil: 'செய்பவரை விட செயல் அல்லது விளைவில் கவனம் செலுத்தவும்.',
    explanation: 'Build the passive with the correct form of be + past participle. Add “by” only when the doer is useful information.',
    explanationTamil: 'சரியான be form + past participle கொண்டு passive அமைக்கவும். செய்பவர் தேவையான தகவல் என்றால் மட்டும் “by” சேர்க்கவும்.',
    formula: 'be + past participle',
    examples: [['English is spoken worldwide.', 'ஆங்கிலம் உலகம் முழுவதும் பேசப்படுகிறது.'], ['The report was completed.', 'அறிக்கை முடிக்கப்பட்டது.'], ['The road is being repaired.', 'சாலை பழுது பார்க்கப்படுகிறது.']],
    mistake: ['The email was send.', 'The email was sent.'], question: 'Choose the correct passive sentence.', options: ['The work completed yesterday.', 'The work was completed yesterday.', 'The work was complete by yesterday.'], answer: 1, feedback: 'Past passive uses “was/were + past participle”.'
  },
  {
    id: 'reported-speech', moduleId: 'advanced', title: 'Reported speech', tamil: 'மறைமுகக் கூற்று', duration: 15,
    objective: 'Report another person’s words naturally.', objectiveTamil: 'மற்றொருவர் கூறியதை இயல்பாக தெரிவிக்கவும்.',
    explanation: 'Reported speech changes viewpoint, pronouns and often tense. Use said for statements and told + person for instructions or information.',
    explanationTamil: 'Reported speech-ல் viewpoint, pronoun மற்றும் பல நேரங்களில் tense மாறும். Statement-க்கு said; told + person பயன்படுத்தவும்.',
    formula: 'said (that)… · told me (that)…',
    examples: [['She said she was tired.', 'அவள் சோர்வாக இருந்ததாகக் கூறினாள்.'], ['He told me to wait.', 'அவர் என்னைக் காத்திருக்கச் சொன்னார்.'], ['They asked if I was ready.', 'நான் தயாரா என்று அவர்கள் கேட்டார்கள்.']],
    mistake: ['He told that he was busy.', 'He said that he was busy.'], question: '“I am ready,” she said. Choose the report.', options: ['She said she was ready.', 'She told she is ready.', 'She said I am ready.'], answer: 0, feedback: 'The viewpoint changes to “she was ready”.'
  },
  {
    id: 'relative-clauses', moduleId: 'advanced', title: 'Relative clauses', tamil: 'தொடர்பு உட்பிரிவுகள்', duration: 14,
    objective: 'Add identifying or extra information to a noun.', objectiveTamil: 'ஒரு noun-க்கு அடையாளம் அல்லது கூடுதல் தகவல் சேர்க்கவும்.',
    explanation: 'Use who for people, which for things and that for people or things in defining clauses. Non-defining extra information uses commas.',
    explanationTamil: 'People-க்கு who; things-க்கு which; defining clause-ல் இரண்டிற்கும் that. Extra information தரும் non-defining clause comma பெறும்.',
    formula: 'noun + who/which/that + clause',
    examples: [['The woman who called is my manager.', 'அழைத்த பெண் என் மேலாளர்.'], ['The phone that I bought is fast.', 'நான் வாங்கிய தொலைபேசி வேகமானது.'], ['Chennai, which is coastal, is humid.', 'கடற்கரை நகரமான சென்னை ஈரப்பதமானது.']],
    mistake: ['The man which works here', 'The man who works here'], question: 'Choose the correct relative word: “The book ___ I borrowed is useful.”', options: ['who', 'that', 'where'], answer: 1, feedback: 'Use “that” or “which” for a thing.'
  },
  {
    id: 'gerunds-infinitives', moduleId: 'advanced', title: 'Gerunds & infinitives', tamil: 'Gerund மற்றும் infinitive', duration: 15,
    objective: 'Choose verb-ing or to + verb after common verbs.', objectiveTamil: 'Common verb-களுக்கு பின் verb-ing அல்லது to + verb தேர்ந்தெடுக்கவும்.',
    explanation: 'Some verbs take -ing, some take to + infinitive, and a few allow both with a change in meaning. Learn the verb pattern as one phrase.',
    explanationTamil: 'சில verb-க்கு -ing; சிலவற்றுக்கு to + infinitive. சிலவற்றில் இரண்டும் பொருள் மாற்றத்துடன் வரும். Pattern-ஐ phrase-ஆக கற்கவும்.',
    formula: 'enjoy doing · want to do · stop doing/to do',
    examples: [['I enjoy reading.', 'எனக்கு படிப்பது பிடிக்கும்.'], ['She wants to learn.', 'அவள் கற்க விரும்புகிறாள்.'], ['Remember to call me.', 'என்னை அழைக்க நினைவில் கொள்ளுங்கள்.']],
    mistake: ['I enjoy to read.', 'I enjoy reading.'], question: 'Choose the natural sentence.', options: ['He decided going home.', 'He decided to go home.', 'He decided go home.'], answer: 1, feedback: '“Decide” is followed by “to + infinitive”.'
  },
  {
    id: 'emphasis-hedging', moduleId: 'advanced', title: 'Emphasis & hedging', tamil: 'வலியுறுத்தல் மற்றும் மென்மையாக்கல்', duration: 16,
    objective: 'Control strength and nuance in advanced communication.', objectiveTamil: 'மேம்பட்ட தொடர்பாடலில் வலிமை மற்றும் nuance-ஐ கட்டுப்படுத்தவும்.',
    explanation: 'Emphasis highlights what matters; hedging reduces certainty or directness. Professional English often balances both.',
    explanationTamil: 'Emphasis முக்கியத்தை வலியுறுத்தும்; hedging certainty/directness-ஐ மென்மையாக்கும். Professional English இரண்டையும் சமநிலைப்படுத்தும்.',
    formula: 'What matters is… · It appears that… · may/might',
    examples: [['What matters most is consistency.', 'மிக முக்கியமானது தொடர்ச்சியான முயற்சி.'], ['It appears that demand is slowing.', 'தேவை குறைவதாகத் தெரிகிறது.'], ['This may indicate a larger issue.', 'இது பெரிய பிரச்சினையைச் சுட்டிக்காட்டலாம்.']],
    mistake: ['This proves the plan will fail. (when evidence is limited)', 'This may suggest the plan needs revision.'], question: 'Which sentence is appropriately cautious?', options: ['This definitely proves everything.', 'The results may indicate a change.', 'There is absolutely no doubt from one example.'], answer: 1, feedback: '“May indicate” reports limited evidence with suitable caution.'
  }
];

export const grammarLessonById = new Map(grammarLessons.map(lesson => [lesson.id, lesson]));

export function getGrammarModule(moduleId) {
  return grammarModules.find(module => module.id === moduleId);
}

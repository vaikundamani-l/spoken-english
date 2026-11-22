export class SpeechService {
  constructor(speechSynthesis, Utterance) {
    this.speechSynthesis = speechSynthesis;
    this.Utterance = Utterance;
  }

  get supported() {
    return Boolean(this.speechSynthesis && this.Utterance);
  }

  speakPhrases(phrases, onStart, onEnd) {
    if (!this.supported) return;
    this.speechSynthesis.cancel();
    const utterance = new this.Utterance(phrases.map(([english]) => english).join('. '));
    utterance.lang = 'en-IN';
    utterance.rate = 0.82;
    utterance.onstart = onStart;
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
    this.speechSynthesis.speak(utterance);
  }
}

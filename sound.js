let chord1 = [47, 52, 56, 59, 63, 66, 68, 71, 73, 76, 80, 88];

let sustone1;
let sustone2;
let tone1;
let tone2;
let tone3;
let singleNote;

let attackLevel = 0.3;
let releaseLevel = 0;

let attackTime = 0.75;
let decayTime = 1.5;
let susPercent = 0.2;
let releaseTime = 1;

let attackLevel2 = 0.2;
let releaseLevel2 = 0;

let attackTime2 = 2;
let decayTime2 = 3;
let susPercent2 = 0.2;
let releaseTime2 = 2;

let tremolo;

let i = 3;
let i2 = 0;
let i3 = 5;

let singleNoteRandomizer;

function chordSetup() {
  masterVolume(0.2);
  singleNoteRandomizer = int(random(200, 400));

  env = new p5.Envelope();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  tone1 = new p5.Oscillator();
  tone1.setType("sine");
  tone1.amp(env);
  tone1value = midiToFreq(chord1[i]);
  tone1.freq(tone1value);

  tone2 = new p5.Oscillator();
  tone2.setType("sine");
  tone2.amp(env);
  tone2value = midiToFreq(chord1[i2]);
  tone2.freq(tone2value);

  tone3 = new p5.Oscillator();
  tone3.setType("sine");
  tone3.amp(env);
  tone3value = midiToFreq(chord1[i3]);
  tone3.freq(tone3value);

  singleNote = new p5.Oscillator();
  singleNote.setType("sine");
  singleNote.amp(env);
  singleNotevalue = midiToFreq(chord1[i]);
  singleNote.freq(singleNotevalue);

  //super slow tremolo for sustones
  tremolo = new p5.Oscillator();
  tremolo.freq(0.15);
  tremolo.amp(0.2);
  tremolo.setType("sine");
  tremolo.start();

  sustone1 = new p5.Oscillator();
  sustone1.setType("sine");
  sustone1.amp(tremolo);
  sustone1value = midiToFreq(chord1[0]);
  sustone1.freq(sustone1value);

  sustone2 = new p5.Oscillator();
  sustone2.setType("sine");
  sustone2.amp(tremolo);
  sustone2value = midiToFreq(chord1[2]);
  sustone2.freq(sustone2value);
}

function playEnv() {
  env.play();
}

function playsound() {
  //reduced length of array to favor bass notes in "i"
  i = int(random(1, chord1.length - 5));
  i2 = int(random(1, chord1.length - 3));
  i3 = int(random(1, chord1.length - 1));
  chordSetup();

  tone1.start();
  tone2.start();
  tone3.start();
  tone1.stop(3.5);
  tone2.stop(3.5);
  tone3.stop(3.5);
  playEnv();
}

function playOneNote() {
  i = int(random(1, chord1.length - 1));
  chordSetup();
  singleNote.start();
  singleNote.stop(3.5);
  playEnv();
}

let osc, osc2, osc3, osc4, env, env2;
let chord1 = [47, 52, 56, 59, 63, 66, 68, 71, 73, 76, 80, 88];

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

function chordSetup() {
  masterVolume(0.2);
  env = new p5.Envelope();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  env2 = new p5.Envelope();
  env2.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env2.setRange(attackLevel, releaseLevel);

  osc = new p5.Oscillator("sine");
  osc2 = new p5.Oscillator("sine");
  osc3 = new p5.Oscillator("sine");
  osc4 = new p5.Oscillator("sine");
  // console.log(osc);
  // debugger;
}

function playsound() {
  // console.log(osc);
  // debugger;
  //reduced length of array to favor bass notes in "i"
  osc.start();
  osc.amp(0.5);
  osc.freq(midiToFreq(chord1[int(random(1, chord1.length - 5))]));
  osc.amp(env);
  osc.stop(3.5);
  osc2.start();
  osc2.amp(0.5);
  osc2.freq(midiToFreq(chord1[int(random(1, chord1.length - 3))]));
  osc2.amp(env);
  osc.stop(3.5);
  osc3.start();
  osc3.amp(0.5);
  osc3.freq(midiToFreq(chord1[int(random(1, chord1.length - 1))]));
  osc3.amp(env);
  osc.stop(3.5);
  env.play();
}

function playOneNote() {
  osc4.start();
  osc4.amp(0.5);
  osc4.freq(midiToFreq(chord1[int(random(1, chord1.length - 5))]));
  osc4.amp(env2);
  osc4.stop(3.5);
  env2.play();
}

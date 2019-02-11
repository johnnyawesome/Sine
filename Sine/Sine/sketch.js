/// <reference path="../TSDef/p5.global-mode.d.ts" />

//Amplitude of the Sine Wave
let amplitude = 300;
let x = 0;
let y = 0;

function setup() {
  createCanvas(800, 800, P2D);
}

function draw() {
  background(0, 30);
  noStroke();
  fill(0, 255, 100, 100);
  translate(width / 2, height / 2);

  //Sin() gives values between 0 and 1,
  //so we multiply it by Amplitude to get motion
  ellipse(amplitude * sin(x), y, 80, 80)

  //We increment X to get different Sine-Values
  x += 0.03;
}
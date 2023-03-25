let canvas;
let world;
let keyboard;


/**
 * loading canvas 
 */
function init() {
    canvas = document.getElementById('canvas');
}


/**
 * Starting the game 
 */
function startGame() {
  initLevel();
  keyboard = new Keyboard();
  world = new World(canvas, keyboard);
  setTimeout(()=>{
    addMenuButtons();
    document.getElementById('hud').classList.add('d-flex');
    document.getElementById('hud').classList.remove('d-none');
  }, 1000);
  
}


/**
 * menu button
 */
function addMenuButtons(){
  hideElement('startContainer');
  document.getElementById('menuButtonLine').classList.add('gameMenuButtonLine');
}


/**
 * settings button 
 */
function settings(){
   hideElementAnimated('controlMenu');
   hideElementAnimated('infoMenu');
   showElementAnimated('settingsMenu');
}


/**
 * restart the game whenever you want
 */
function goBackToStartScreen() {
  document.location.reload();
}


/**
 * control button 
 */
function control(){
   hideElementAnimated('settingsMenu');
   hideElementAnimated('infoMenu');
   showElementAnimated('controlMenu');
}

function info() {
  hideElementAnimated('controlMenu');
  hideElementAnimated('settingsMenu');
  showElementAnimated('infoMenu');
}

/**
 * close button
 */
function closeMenu(){
   hideElementAnimated('settingsMenu');
   hideElementAnimated('controlMenu');
   hideElementAnimated('infoMenu');
}


function doNotClose(event){
   event.stopPropagation();
}



function showElement(element) {
  document.getElementById(`${element}`).classList.remove('d-none');
}



function showElementAnimated(element) {
  document.getElementById(`${element}`).classList.remove('vis-hidden');
  setTimeout(()=>{
      document.getElementById(`${element}`).classList.remove('d-none');
  }, 400)
}



function hideElement(element) {
  document.getElementById(`${element}`).classList.add('d-none');
}



function hideElementAnimated(element) {
  document.getElementById(`${element}`).classList.add('vis-hidden');
  setTimeout(()=>{
      document.getElementById(`${element}`).classList.add('d-none');
  }, 400)
}


/**
 * on/off sound
 */
function soundOn(){
  return document.getElementById('soundToggle').checked;
}


/**
 * on/off music
 */
function musicOn(){
  return document.getElementById('musicToggle').checked;
}


/**
 * open fullscreen
 */
function fullscreen() {
  let container = document.getElementById('container');
  container.requestFullscreen();
  document.getElementById('container').classList.add('fullscreen');
  document.getElementById('canvas').classList.add('canvasFullscreen');
  document.getElementById('fullscreenButton').setAttribute('onclick', `javascript: closeFullscreen()`);
  closeMenu();
}


/**
 * close fullscreen
 */
function closeFullscreen() {
  document.exitFullscreen();
  document.getElementById('container').classList.remove('fullscreen');
  document.getElementById('fullscreenButton').setAttribute('onclick', `javascript: fullscreen()`);
}



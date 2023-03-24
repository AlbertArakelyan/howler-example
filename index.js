const $range1 = document.getElementById('range-1');
const $range2 = document.getElementById('range-2');

const sound = new Howl({
  src: ['sample-15s.mp3'],
  volume: 1,
});

sound.once('load', function(){
  setTimeout(() => {
    sound.play();
  }, 3500);

  // setTimeout(() => {
  //   sound.volume(0);
  // }, 10000);
});

sound.on('end', function(){
  console.log(1, 'Finished!');
});

const sound2 = new Howl({
  src: ['mp3_example.mp3'],
  volume: 1,
});

sound2.once('load', function(){
  sound2.play();
});

sound2.on('end', function(){
  console.log(2, 'Finished!');
});

$range1.addEventListener('input', (e) => {
  console.log(1, e.target.value);
  sound.volume(e.target.value / 100);
});

$range2.addEventListener('input', (e) => {
  console.log(2, e.target.value);
  sound2.volume(e.target.value / 100);
});
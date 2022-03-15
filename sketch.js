let currentPic;
let picArr = [];
let grid = [];
let tRand;
let side;
let specialelite;
let clicked;
let startbtn, resetbtn;
let scrollY = 0;
let bgText =
  "'be grateful,' you said to me\n" +
  "i am grateful\n" +
  "you tell me that i am lucky\n" +
  "lucky enough to have a roof over my head\n" +
  "and lucky enough to have a full stomach\n" +
  "i am grateful,\n" +
  "i am\n" +
  "i know other people don't have that roof\n" +
  "and people that don't have food,\n" +
  "and i am grateful that i do\n" +
  "i am\n" +
  "but please listen when i say that i am not lucky enough to know what to do with what i've been given\n" +
  "my pain is mine and mine alone to turn over in my hands and to cut myself with\n" +
  "so when you tell me that i am weak\n" +
  "that i am too sensitive and simply destined to fail in this world\n" +
  "it only makes that pain cut a little deeper\n" +
  "you asked me to explain my pain\n" +
  "why is it that i am so broken when i have all this and more\n" +
  "you ask and you scream and you yell, demanding an answer for my selfishness\n" +
  "the words split my lips when i tell you that i am tired\n" +
  "that i don't remember how to do anything except cry and force myself to breathe\n" +
  "that i cannot explain in what way and how i am hurting\n" +
  "but that i simply am\n" +
  "it's been years but i still remember\n" +
  "the betrayal and hurt when your response to my pain was only to inflict more\n" +
  "the helplessness i felt when i realized i had to do this alone\n" +
  "i was not supposed to be alone\n" +
  "you were my lighthouse\n" +
  "my last resort for shelter when i was drowning\n" +
  "but you forced me to burn that bridge when i saw that look in your eyes that screamed, 'you are not mine'\n" +
  "and now you have the nerve to stand there and ask me why i won't let you into my heart -- why i have shut you out where it matters\n" +
  "you have the nerve to look surprised when i tell you that i have wanted to die, ignoring how i am still here and fighting without you\n" +
  "you stand there and look hurt and spin some self-centered tale of being guilt ridden when you didn't listen when i screamed for help\n" +
  "the accusation in your eyes says more than enough -- you may want to care now but not enough to swallow your pride\n" +
  "it was not my fault and it was never my fault.\n" +
  "i am still unlearning all the poison you spilled in my ears\n" +
  "i am still regaining the youth and innocence you stole from me\n" +
  "and i have learned that when you say you know best and will always have my best intentions at heart,\n" +
  "you do not mean it enough to let yourself understand that i will never be who you wanted\n" +
  "i will always be too sensitive, too selfish, and a failure in your eyes\n" +
  "but i am not weak\n" +
  "i am sensitive and i am merely shattered pieces, shakily put together\n" +
  "but i am strong because i had to put those pieces together myself,\n" +
  "i am strong because i sliced my fingers open in the process and used my blood to sign away our relationship\n" +
  "and i know you won't say it so i will:\n" +
  "i'm sorry you weren't there for me\n" +
  "i have forgiven, but not forgotten\n" +
  "signed,\n" +
  "your daughter\n";

function preloadImgs() {
  for (let i = 0; i < 55; i++) {
    let filename = "dataset/love (" + i + ").jpg";
    picArr[i] = loadImage(filename);
    //console.log(filename);
  }
}

function preload() {
  specialelite = loadFont("assets/SpecialElite-Regular.ttf");
}

function newPic(x, y) {
  currentPic = picArr[int(random(picArr.length))];
  currentPic.resize(side, 0);
  image(currentPic, x, y);
}

function updateGrid() {
  let cellRand = int(random(0, grid.length));
  newPic(grid[cellRand].x, grid[cellRand].y);
  tRand = randomTime();
}

function randomTime() {
  return int(random(1, 10));
}

function preloadGrid() {
  grid = [
    {
      pos: "topleft",
      x: width * 0.08,
      y: height * 0.08,
    },
    {
      pos: "topmid",
      x: width * 0.375,
      y: height * 0.08,
    },
    {
      pos: "topright",
      x: width * 0.67,
      y: height * 0.08,
    },
    {
      pos: "midleft",
      x: width * 0.08,
      y: height * 0.375,
    },
    {
      pos: "midmid",
      x: width * 0.375,
      y: height * 0.375,
    },
    {
      pos: "midright",
      x: width * 0.67,
      y: height * 0.375,
    },
    {
      pos: "botleft",
      x: width * 0.08,
      y: height * 0.67,
    },
    {
      pos: "botmid",
      x: width * 0.375,
      y: height * 0.67,
    },
    {
      pos: "botright",
      x: width * 0.67,
      y: height * 0.67,
    },
  ];
}

function setup() {
  //canvas/drawing set up
  let windowSide;
  if (windowWidth > windowHeight) {
    windowSide = windowHeight * 0.8;
  } else {
    windowSide = windowWidth * 0.8;
  }
  let canvas = createCanvas(windowSide, windowSide);
  canvas.parent("html-canvas");
  background(0, 0, 0);
  imageMode(CORNER);
  tRand = randomTime();
  if (width > height) {
    side = height * 0.25;
  } else {
    side = width * 0.25;
  }

  //preloads all images into picArr[]
  preloadImgs();

  //initializes grid
  preloadGrid();
  for (let i = 0; i < grid.length; i++) {
    newPic(grid[i].x, grid[i].y);
  }

  //buttons
  startbtn = createButton("C L I C K");
  startbtn.parent("html-btn");
  startbtn.mousePressed(heal);
  clicked = false;

  //text
  textFont(specialelite);
  textSize(10);
}

function heal() {
  clicked = true;
  startbtn.remove();

  currentPic = picArr[int(random(picArr.length))];
  currentPic.resize(width * 0.85, 0);
  imageMode(CENTER);
  image(currentPic, width * 0.5, height * 0.5);
  resetbtn = createButton("R E T R Y");
  resetbtn.parent("html-btn");
  resetbtn.mousePressed(reset);
}

function reset() {
  startbtn = createButton("C L I C K");
  startbtn.parent("html-btn");
  startbtn.mousePressed(heal);
  clicked = false;
  resetbtn.remove();
  background(0);
}

function draw() {
  //text bg
  /*background(0, 0, 0);
  for (let y = scrollY; y < height; y += 28) {
    fill(255);
    text(bgText, 0, 0, windowWidth, windowHeight);
  }
  scrollY--;*/
  if (!clicked) {
    if (frameCount % tRand == 0) {
      updateGrid();
    }
  }
}

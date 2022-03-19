const sketchCenter = function (p) {
  let currentPic;
  let hateArr = [];
  let loveArr = [];
  let grid = [];
  let tRand;
  let side;
  let clicked;
  let startbtn;
  let resetbtn = null;

  p.setup = function () {
    //canvas/drawing set up
    let windowSide;
    if (p.windowWidth > p.windowHeight) {
      windowSide = p.windowHeight * 0.8;
    } else {
      windowSide = p.windowWidth * 0.8;
    }
    let canvas = p.createCanvas(windowSide, windowSide);
    canvas.parent("centerCanvas");
    canvas.style("z-index", "2");
    p.background(0, 0, 0);
    p.imageMode(p.CORNER);
    tRand = p.randomTime();
    if (p.width > p.height) {
      side = p.height * 0.25;
    } else {
      side = p.width * 0.25;
    }

    //preloads all images into picArr[]
    p.preloadImgs();

    //initializes grid
    p.preloadGrid();
    for (let i = 0; i < grid.length; i++) {
      p.newPic(grid[i].x, grid[i].y);
    }

    //buttons
    startbtn = p.createButton("C L I C K");
    startbtn.parent("html-btn");
    startbtn.mousePressed(p.perceive);
    clicked = false;
    console.log("1");
  };

  p.preload = function () {
    specialelite = p.loadFont("assets/SpecialElite-Regular.ttf");
    console.log("2");
  };

  p.draw = function () {
    console.log("3");
    if (!clicked) {
      if (p.frameCount % tRand == 0) {
        p.updateGrid();
      }
    }
  };

  p.preloadImgs = function () {
    for (let i = 0; i < 55; i++) {
      let filename = "dataset1/hate (" + i + ").jpg";
      hateArr[i] = p.loadImage(filename);
    }

    for (let i = 0; i < 12; i++) {
      let filename = "dataset2/love (" + i + ").jpg";
      loveArr[i] = p.loadImage(filename);
    }
  };

  p.newPic = function (x, y) {
    p.imageMode(p.CORNER);
    currentPic = hateArr[p.int(p.random(hateArr.length))];
    currentPic.resize(side, 0);
    p.image(currentPic, x, y);
    console.log(`x = ${x}, y = ${y}`);
    console.log("5");
  };

  p.updateGrid = function () {
    let cellRand = p.int(p.random(0, grid.length));
    p.newPic(grid[cellRand].x, grid[cellRand].y);
    tRand = p.randomTime();
    console.log("6");
  };

  p.randomTime = function () {
    console.log("7");
    return p.int(p.random(6, 10));
  };

  p.preloadGrid = function () {
    console.log("8");
    grid = [
      {
        pos: "topleft",
        x: p.width * 0.08,
        y: p.height * 0.08,
      },
      {
        pos: "topmid",
        x: p.width * 0.375,
        y: p.height * 0.08,
      },
      {
        pos: "topright",
        x: p.width * 0.67,
        y: p.height * 0.08,
      },
      {
        pos: "midleft",
        x: p.width * 0.08,
        y: p.height * 0.375,
      },
      {
        pos: "midmid",
        x: p.width * 0.375,
        y: p.height * 0.375,
      },
      {
        pos: "midright",
        x: p.width * 0.67,
        y: p.height * 0.375,
      },
      {
        pos: "botleft",
        x: p.width * 0.08,
        y: p.height * 0.67,
      },
      {
        pos: "botmid",
        x: p.width * 0.375,
        y: p.height * 0.67,
      },
      {
        pos: "botright",
        x: p.width * 0.67,
        y: p.height * 0.67,
      },
    ];
  };

  p.perceive = function () {
    clicked = true;
    currentPic = loveArr[p.int(p.random(loveArr.length))];
    currentPic.resize(p.width * 0.85, 0);
    p.imageMode(p.CENTER);
    p.image(currentPic, p.width * 0.5, p.height * 0.5);
    startbtn.remove();
    resetbtn = p.createButton("R E T R Y");
    resetbtn.parent("html-btn");
    resetbtn.mousePressed(p.reset);
  };

  p.reset = function () {
    resetbtn.remove();
    startbtn = p.createButton("C L I C K");
    startbtn.parent("html-btn");
    startbtn.mousePressed(p.perceive);
    clicked = false;
    p.background(0);
  };
};

const sketchBg = function (p) {
  let specialelite;
  let scroll1;
  let bgText =
    "'be grateful,' you said to me\n\n" +
    "i am grateful\n\n" +
    "you tell me that i am lucky\n\n" +
    "lucky enough to have a roof over my head\n\n" +
    "and lucky enough to have a full stomach\n\n" +
    "i am grateful,\n\n" +
    "i am\n\n\n" +
    "i know other people don't have that roof\n\n" +
    "and people that don't have food,\n\n" +
    "and i am grateful that i do\n\n" +
    "i am\n\n\n" +
    "but please listen when i say that i am not lucky enough to know what to do with what i've been given\n\n" +
    "my pain is mine and mine alone to turn over in my hands and to cut myself with\n\n" +
    "so when you tell me that i am weak\n\n" +
    "that i am too sensitive and simply destined to fail in this world\n\n" +
    "it only makes that pain cut a little deeper\n\n\n" +
    "you asked me to explain my pain\n\n" +
    "why is it that i am so broken when i have all this and more\n\n" +
    "you ask and you scream and you yell, demanding an answer for my selfishness\n\n" +
    "the words split my lips when i tell you that i am tired\n\n" +
    "that i don't remember how to do anything except cry and force myself to breathe\n\n" +
    "that i cannot explain in what way and how i am hurting\n\n" +
    "but that i simply am\n\n\n" +
    "it's been years but i still remember\n\n" +
    "the betrayal and hurt when your response to my pain was only to inflict more\n\n" +
    "the helplessness i felt when i realized i had to do this alone\n\n" +
    "i was not supposed to be alone\n\n" +
    "you were my lighthouse\n\n" +
    "my last resort for shelter when i was drowning\n\n" +
    "but you forced me to burn that bridge when i saw that look in your eyes that screamed, 'you are not mine'\n\n" +
    "and now you have the nerve to stand there and ask me why i won't let you into my heart -- why i have shut you out where it matters\n\n" +
    "you have the nerve to look surprised when i tell you that i have wanted to die, ignoring how i am still here and fighting without you\n\n" +
    "you stand there and look hurt and spin some self-centered tale of being guilt ridden when you didn't listen when i screamed for help\n\n" +
    "the accusation in your eyes says more than enough -- you may want to care now but not enough to swallow your pride\n\n\n" +
    "it was not my fault and it was never my fault.\n\n\n" +
    "i am still unlearning all the poison you spilled in my ears\n\n" +
    "i am still regaining the youth and innocence you stole from me\n\n" +
    "and i have learned that when you say you know best and will always have my best intentions at heart,\n\n" +
    "you do not mean it enough to let yourself understand that i will never be who you wanted\n\n" +
    "i will always be too sensitive, too selfish, and a failure in your eyes\n\n" +
    "but i am not weak\n\n\n" +
    "i am sensitive and i am merely shattered pieces, shakily put together\n\n" +
    "but i am strong because i had to put those pieces together myself,\n\n" +
    "i am strong because i sliced my fingers open in the process and used my blood to sign away our relationship\n\n" +
    "and i know you won't say it so i will:\n\n" +
    "i'm sorry you weren't there for me\n\n" +
    "i have forgiven, but not forgotten\n\n\n" +
    "signed,\n\n" +
    "your daughter";

  p.setup = function () {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.position(p.windowWidth * 0.55, 0);
    canvas.style("z-index", "-1");
    canvas.parent("bgCanvas");

    //bgtext
    p.textFont(specialelite);
    p.textSize(84);
    scroll1 = 0;
    p.loadText();
  };

  p.draw = function () {
    //scroll1
    if (scroll1 <= -(p.height * 7.9)) {
      scroll1 = p.height;
      p.loadText();
    } else {
      p.background(0, 0, 0);
    }
    scroll1 -= 10;
    p.translate(0, scroll1);
    p.text(bgText, 0, 0);
  };

  p.preload = function () {
    specialelite = p.loadFont("assets/SpecialElite-Regular.ttf");
  };

  p.loadText = function () {
    p.fill(255, 255, 255, 100);
    p.text(bgText, 0, scroll1);
  };
};

var p5bg = new p5(sketchBg);
var p5center = new p5(sketchCenter);
//var p5center = new p5(sketchCenter, "centerCanvas");
